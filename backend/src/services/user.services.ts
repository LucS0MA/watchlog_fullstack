import * as argon2 from "argon2";
import jwt, { Secret } from "jsonwebtoken";

import { pool } from "../config/database.js";
import { User } from "../models/user.models.js";
import { UserLogin, UserPublic, UserRow } from "../types/user.types.js";

export const userService = {
  createUser: async (userData: User): Promise<UserPublic> => {
    const hash = await argon2.hash(userData.password_hash);
    const newUser = await pool.query<UserRow>(
      "INSERT INTO users (username, email, password_hash) VALUES ($1, $2, $3) RETURNING id, username",
      [userData.username, userData.email, hash],
    );
    return newUser.rows[0];
  },

  deleteUser: async (id: string): Promise<UserPublic> => {
    const userDelete = await pool.query<UserRow>(
      "DELETE FROM users WHERE id = $1 RETURNING id, username, email",
      [id],
    );
    return userDelete.rows[0];
  },

  getAll: async (): Promise<UserRow[]> => {
    const { rows } = await pool.query<UserRow>(
      "SELECT id, username, email FROM users",
    );
    return rows;
  },
  getUserById: async (id: string): Promise<null | UserPublic> => {
    const user = await pool.query<UserRow>(
      "SELECT id, username, email FROM users WHERE id = $1",
      [id],
    );
    return user.rows[0] ?? null;
  },

  login: async (loginData: Partial<UserLogin>): Promise<string> => {
    const { rows } = await pool.query<UserRow>(
      "SELECT username, email, password_hash FROM users WHERE email = $1",
      [loginData.email],
    );

    if (!rows[0]) {
      throw new Error("INVALID_CREDENTIALS");
    }

    const user = rows[0];

    const passwordHash = user.password_hash;
    const password = loginData.password;
    if (!passwordHash || !password) {
      throw new Error("INVALID_CREDENTIALS");
    }

    const isValid = await argon2.verify(passwordHash, password);

    if (!isValid) {
      throw new Error("INVALID_CREDENTIALS");
    }

    return jwt.sign(
      {
        email: user.email,
        id: user.id,
        username: user.username,
      },
      process.env.JWT_SECRET_KEY as Secret,
      { expiresIn: "1h" },
    );
  },

  updateUser: async (
    id: string,
    userData: Partial<User>,
  ): Promise<UserPublic> => {
    const userUpdated = await pool.query<UserRow>(
      "UPDATE USERS SET username = COALESCE($1, username), email = COALESCE($2, email), password_hash = COALESCE($3, password_hash) WHERE id = $4 RETURNING id, username, email",
      [userData.username, userData.email, userData.password_hash, id],
    );
    return userUpdated.rows[0];
  },
};
