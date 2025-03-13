const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
const Category = require("../models/category");
const Item = require("../models/item");

exports.category_detail = asyncHandler(async (req, res, next) => {
  const [category, items] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Item.find({ category: req.params.id }).exec(),
  ]);

  if (!category) {
    const error = new Error();
    error.status = 404;
    return next(error);
  }

  res.render("category_detail", {
    title: "Category Detail",
    category: category,
    items: items,
  });
});
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.render("category_form", {
    title: "Create Category",
  });
});
exports.category_create_post = [
  body("name", "Name must not be empty").trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const error = validationResult(req);

    const category = new Category({
      name: req.body.name,
    });

    if (!error.isEmpty()) {
      res.render("category_form", {
        title: "Create Category",
      });
    } else {
      await category.save();
      res.redirect(category.url);
    }
  }),
];
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  const [category, itemsInCategory] = await Promise.all([
    Category.findById(req.params.id).exec(),
    Item.find({ category: req.params.id }).sort({ name: 1 }).exec(),
  ]);

  res.render("category_delete", {
    title: "Delete Category",
    category: category,
    items: itemsInCategory,
  });
});
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  await Category.findByIdAndDelete(req.body.categoryid);
  res.redirect("/catalog/category");
});
exports.category_update_get = asyncHandler(async (req, res, next) => {
  const category = await Category.findById(req.params.id).exec();

  res.render("category_form", {
    title: "Update Category",
    category: category,
  });
});
exports.category_update_post = asyncHandler(async (req, res, next) => {
  const category = new Category({
    name: req.body.name,
    _id: req.params.id,
  });

  const updatedCategory = await Category.findByIdAndUpdate(
    req.params.id,
    category,
    {},
  );
  res.redirect(updatedCategory.url);
});
exports.category_list = asyncHandler(async (req, res, next) => {
  const category_list = await Category.find().sort({ name: 1 }).exec();

  res.render("category_list", {
    title: "Category List",
    category_list: category_list,
  });
});
