const express = require("express");
const controller = require("../controllers/usuarios.controller");
const { authenticateToken } = require("../middlewares/authenticateToken.middleware");
const router = express.Router();

router.get("/", controller.list);
router.get("/:id", controller.getById);
router.post("/", authenticateToken, controller.create);
router.put("/:id", authenticateToken, controller.update);
router.delete("/:id", authenticateToken, controller.remove);
module.exports = router;


//router.post("/", auth, authorize(["user", "admin"]), controller.create);
//router.put("/:id", auth, authorize(["user", "admin"]), controller.update);