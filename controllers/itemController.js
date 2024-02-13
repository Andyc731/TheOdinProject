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
  res.send("blah");
});
exports.item_delete_post = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
exports.item_update_get = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
exports.item_update_post = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
exports.item_detail = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
