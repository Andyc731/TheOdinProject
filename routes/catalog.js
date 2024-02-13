const express = require("express");
const router = express.Router();

const items_controller = require("../controllers/itemController");
const category_controller = require("../controllers/categoryController");

router.get("/", items_controller.index);
router.get("/items", items_controller.item_list);
router.get("/items/create", items_controller.item_create_get);
router.post("/items/create", items_controller.item_create_post);
router.get("/items/:id/delete", items_controller.item_delete_get);
router.post("/items/:id/delete", items_controller.item_delete_post);
router.get("/items/:id/update", items_controller.item_update_get);
router.post("/items/:id/update", items_controller.item_update_post);
router.post("/items/:id", items_controller.item_detail);

module.exports = router;
