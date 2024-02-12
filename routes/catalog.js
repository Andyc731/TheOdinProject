const express = require("express");
const route = express.Router();

const items_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");

route.get("/", items_controller.index);
route.get("/items", items_controller.item_list);
route.get("/items/create", items_controller.item_create_get);
route.post("/items/create", items_controller.item_create_post);
route.get("/items/:id/delete", items_controller.item_delete_get);
route.post("/items/:id/delete", items_controller.item_delete_post);
route.get("/items/:id/update", items_controller.item_update_get);
route.post("/items/:id/update", items_controller.item_update_post);
route.post("/items/:id", items_controller.item_detail);
