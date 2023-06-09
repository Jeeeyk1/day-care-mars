const express = require("express");
const router = express.Router();
const {
  login,
  deleteUserById,
  createUser,

  updateUserById,
  getUserById,
  getUsers,
} = require("../controller/UsersController");
const auth = require("../utils/auth");

router.post("/signup", createUser);
router.post("/login", login);
router.get("/",  getUsers);
router.get("/:id", auth.verifyToken, getUserById);
router.patch("/:id", auth.verifyToken, updateUserById);
router.delete("/:id",   deleteUserById);

module.exports = router;
