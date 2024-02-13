const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");

exports.index = asyncHandler(async (req, res, next) => {
  res.send("blah");
});

exports.item_list = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
exports.item_create_get = asyncHandler(async (req, res, next) => {
  res.send("blah");
});

exports.item_create_post = asyncHandler(async (req, res, next) => {
  res.send("blah");
});
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
