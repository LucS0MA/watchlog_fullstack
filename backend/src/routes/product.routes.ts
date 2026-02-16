import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductsById,
  updateProduct,
} from "#controllers/product.controllers.js";
import { Router } from "express";

export const productRouter = Router();

productRouter.get("/", getAllProducts);
productRouter.get("/:id", getProductsById);
productRouter.post("/", createProduct);
productRouter.put("/:id", updateProduct);
productRouter.delete("/:id", deleteProduct);
