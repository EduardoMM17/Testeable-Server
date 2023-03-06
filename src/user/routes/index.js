const controller = require("../controller");
const express = require("express");
const middlewares = require("../../middlewares/check");
const router = express.Router();

router.post("/", [middlewares.jsonBodyCheck, controller.createUser]);
router.get("/:id", [controller.getUser]);
router.get("/", [controller.getUsers]);

module.exports = router;
