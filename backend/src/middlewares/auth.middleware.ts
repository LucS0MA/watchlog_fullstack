import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

import { JwtPayload } from "../types/jwtPayload.types.js";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token as string | undefined;
    if (!token) {
      return res.status(401).json({ message: "Authentication required" });
    }
    const jwtSecret = process.env.JWT_SECRET_KEY;
    if (!jwtSecret) {
      throw new Error("The jwt secret key is not defined");
    }
    const decodedJwt = jwt.verify(token, jwtSecret) as JwtPayload;
    req.user = decodedJwt;
    next();
  } catch (err) {
    console.error(err);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
