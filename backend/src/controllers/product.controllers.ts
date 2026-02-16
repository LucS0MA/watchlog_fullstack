import { Request, Response } from "express";
import { Product } from "../models/product.models.js";
import { productService } from "#services/product.services.js";

export const getAllProducts = async (_req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve all the products",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getProductsById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const product = await productService.getProductsById(id);
    res.status(200).json(product);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve the product",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  try {
    const newProductData = req.body as Product;
    const result = await productService.createProduct(newProductData);
    res.status(201).json({ message: "Product successfully created", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create the product",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const updateProductData = req.body as Partial<Product>;
    const result = await productService.updateProduct(id, updateProductData);
    res.status(200).json({ message: "Product successfully updated", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to update the product",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const result = await productService.deleteProduct(id);
    res.status(200).json({ message: "Product successfully deleted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to delete the product",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};
