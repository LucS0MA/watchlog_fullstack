import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";

import { pool } from "./config/database.js";
import { movieRouter } from "./routes/movie.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { reviewRouter } from "./routes/review.routes.js";
import { NowResult } from "./types/dbConnection.types.js";
import { productRouter } from "./routes/product.routes.js";
import { orderRouter } from "./routes/order.routes.js";
import { orderItemRouter } from "./routes/orderItem.routes.js";

const app = express();
const port = process.env.PORT ?? 3000;

app.use(cors({ origin: process.env.FRONTEND_URL }));

app.use(cookieParser());
app.use(express.json());
app.use("/movies", movieRouter);
app.use("/users", userRouter);
app.use("/reviews", reviewRouter);
app.use("/products", productRouter);
app.use("/orders", orderRouter);
app.use("/order-items", orderItemRouter);

const dbConnection = async () => {
  try {
    const { rows } = await pool.query<NowResult>(`SELECT NOW()`);
    console.log("✅ Database connected at", rows[0].now);
    app.get("/", (_req, res) => {
      res.send("API watchlog");
    });

    app.listen(port, () => {
      console.log("BoilerPlate API app is listenning on port 3000 !");
    });
  } catch (error) {
    console.error("❌ Database connection failed", error);
    process.exit(1);
  }
};

dbConnection().catch((err: unknown) => {
  console.error("dbConnection failed", err);
  process.exit(1);
});
