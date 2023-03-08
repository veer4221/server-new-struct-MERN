import express, { Router } from "express";
const router = express.Router();
import { registerController } from "../controllers";
import loginController from "../controllers/Auth/login.controller";
import auth from "../middlewares/auth";
import userController from "../controllers/Auth/user.controller";

router.post("/register", registerController.register);
router.post("/login", loginController.login);
router.get("/me", auth, userController.me);

export default router;
