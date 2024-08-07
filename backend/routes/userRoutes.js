import express from "express";
import {
  getUser,
  loginUser,
  registerUser,
  updateUser,
  forgotPassUser,
  resetPassword,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.route("/profile").get(protect, getUser).put(protect, updateUser);
router.post("/forgot-password-confirmation", forgotPassUser);
router.put("/reset-password", resetPassword);

export default router;
