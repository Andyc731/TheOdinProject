const Item = require("../models/item");
const Category = require("../models/category");

const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  const [numItems, numCategory] = await Promise.all([
    Item.countDocuments({}).exec(),
    Category.countDocuments({}).exec(),
  ]);
  res.render("index", {
    title: "Inventory Home",
    numItems: numItems,
    numCategory: numCategory,
  });
});

exports.item_list = asyncHandler(async (req, res, next) => {
  const item_list = await Item.find().sort({ name: 1 }).exec();
  res.render("item_list", {
    title: "Item List",
    item_list: item_list,
  });
});
exports.item_create_get = asyncHandler(async (req, res, next) => {
  const allCategory = Category.find().sort({ name: 1 }).exec();
  res.render("item_form", {
    title: "Create Item",
    categories: allCategory,
  });
});

exports.item_create_post = [
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.category =
        typeof req.body.category === "undefined" ? [] : [req.body.category];
    }
    next();
  },

  body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("category.*").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const item = new Item({
      name: req.body.name,
      category: req.body.category,
    });

    if (!errors.isEmpty()) {
      const allCategory = await Category.find().sort({ name: 1 }).exec();

      for (const category of allCategory) {
        if (item.category.includes(category._id)) {
          category.checked = "true";
        }
      }
      res.render("item_form", {
        title: "Create Item",
        categories: allCategory,
        item: item,
        errors: errors.array(),
      });
    } else {
      await item.save();
      res.redirect(item.url);
    }
  }),
];

exports.item_delete_get = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id).exec();

  res.render("item_delete", {
    title: "Delete item",
    item: item,
  });
});
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  await Item.findByIdAndDelete(req.body.itemid);
  res.redirect("/catalog/items");
});
exports.item_update_get = asyncHandler(async (req, res, next) => {
  const [item, allCategory] = await Promise.all([
    Item.findById(req.params.id).exec(),
    Category.find().sort({ name: 1 }).exec(),
  ]);

  if (item === null) {
    const error = new Error("Item not found");
    error.status = 404;
    return next(error);
  }

  allCategory.forEach((category) => {
    if (item.category.includes(category._id)) category.checked = "true";
  });
  res.render("item_form", {
    title: "Item Update",
    item: item,
    categories: allCategory,
  });
});
exports.item_update_post = [
  (req, res, next) => {
    if (!Array.isArray(req.body.genre)) {
      req.body.category =
        typeof req.body.category === "undefined" ? [] : [req.body.category];
    }
    next();
  },

  body("name", "Name must not be empty.").trim().isLength({ min: 1 }).escape(),
  body("category.*").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const item = new Item({
      name: req.body.name,
      category: req.body.category,
      _id: req.params.id,
    });

    if (!errors.isEmpty()) {
      const allCategory = await Category.find().sort({ name: 1 }).exec();

      for (const category of allCategory) {
        if (item.category.includes(category._id)) {
          category.checked = "true";
        }
      }
      res.render("item_form", {
        title: "Create Item",
        categories: allCategory,
        item: item,
        errors: errors.array(),
      });
    } else {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, item, {});
      res.redirect(updatedItem.url);
    }
  }),
];
exports.item_detail = asyncHandler(async (req, res, next) => {
  const item = await Item.findById(req.params.id).exec();

  res.render("item_detail", {
    title: "Item Detail",
    item: item,
  });
});
