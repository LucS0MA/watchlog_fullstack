import { Request, Response } from "express";

import { User } from "../models/user.models.js";
import { userService } from "../services/user.services.js";
import { UserLogin } from "../types/user.types.js";
import { UserInput, UserInputSchema } from "../schema/user.schema.js";
import jwt from "jsonwebtoken";
import { JwtPayload } from "../types/jwtPayload.types.js";

export const getAllUsers = async (_req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get all the users",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const token = await req.cookies.token as string | undefined;
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const jwtSecret = process.env.JWT_SECRET_KEY;
    if (!jwtSecret) {
      throw new Error("The jwt secret key is not defined");
    }
    const decodedJwt = jwt.verify(token, jwtSecret) as JwtPayload;
    req.user = decodedJwt;
    console.log(decodedJwt);
    res.status(200).json({email: req.user.email, username: req.user.username})
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get all the users",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const user = await userService.getUserById(id);
    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get the user",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const userDeleted = await userService.deleteUser(id);
    res.status(200).json(userDeleted);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to delete the user",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const loginData = req.body as UserLogin;
    const token = await userService.login(loginData);
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    res.status(200).json({ message: "User connected !" });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed connection",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const register = async (req: Request, res: Response) => {
  try {
    const userDataParsed = UserInputSchema.parse(req.body) as UserInput;
    const result = await userService.createUser(userDataParsed);
    res.status(201).json({ message: "User successfully created", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create the new user",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const updateUserData = req.body as Partial<User>;
    const result = await userService.updateUser(id, updateUserData);
    res.status(200).json({ message: "User successfully updated", result });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "Failed to update the user",
      message: err instanceof Error ? err.message : "unkown error",
    });
  }
};
