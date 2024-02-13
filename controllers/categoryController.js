const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");

exports.category_detail = asyncHandler(async (req, res, next) => {
  res.send("detail");
});
exports.category_create_get = asyncHandler(async (req, res, next) => {
  res.send("create get");
});
exports.category_create_post = asyncHandler(async (req, res, next) => {
  res.send("create post");
});
exports.category_delete_get = asyncHandler(async (req, res, next) => {
  res.send("delete get");
});
exports.category_delete_post = asyncHandler(async (req, res, next) => {
  res.send("delete post");
});
exports.category_update_get = asyncHandler(async (req, res, next) => {
  res.send("update get");
});
exports.category_update_post = asyncHandler(async (req, res, next) => {
  res.send("update post");
});
exports.category_list = asyncHandler(async (req, res, next) => {
  res.send("category list");
});
