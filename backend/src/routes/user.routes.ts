import { Router } from "express";

import { auth } from "../middlewares/auth.middleware.js";
import {
  deleteUser,
  getAllUsers,
  getUserById,
  login,
  register,
  updateUser,
} from "../controllers/user.controllers.js";

export const userRouter = Router();

userRouter.get("/", getAllUsers);
userRouter.post("/", register);
userRouter.post("/login", login);
userRouter.get("/:id", getUserById);
userRouter.delete("/:id", auth, deleteUser);
userRouter.put("/:id", auth, updateUser);
