const express = require("express");
const route = express.Router();

const item_controller = require("../controllers/itemController.js");
const category_controller = require("../controllers/categoryController.js");

route.get("/", item_controller.index);
