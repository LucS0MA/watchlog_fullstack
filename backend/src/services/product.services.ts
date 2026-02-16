import { Product } from "../models/product.models.js";
import { ProductRow } from "#types/product.types.js";
import { pool } from "../config/database.js";

export const productService = {
  createProduct: async (productData: Product): Promise<ProductRow> => {
    const newProduct = await pool.query<ProductRow>(
      "INSERT INTO products (name, description, price, image_url, stock) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [
        productData.name,
        productData.description,
        productData.price,
        productData.image_url,
        productData.stock,
      ],
    );
    return newProduct.rows[0];
  },

  deleteProduct: async (id: string): Promise<null | ProductRow> => {
    const productDeleted = await pool.query<ProductRow>(
      "DELETE FROM products WHERE id = $1 RETURNING *",
      [id],
    );
    return productDeleted.rows[0] ?? null;
  },

  getAllProducts: async (): Promise<ProductRow[]> => {
    const { rows } = await pool.query<ProductRow>("SELECT * FROM products");
    return rows;
  },

  getProductsById: async (id: string): Promise<ProductRow> => {
    const { rows } = await pool.query<ProductRow>(
      "SELECT * FROM products WHERE id = $1",
      [id],
    );
    return rows[0];
  },

  updateProduct: async (
    id: string,
    updateProductData: Partial<Product>,
  ): Promise<null | ProductRow> => {
    const productUpdated = await pool.query<ProductRow>(
      "UPDATE products SET name = COALESCE($1, name), description = COALESCE($2, description), price = COALESCE($3, price), image_url = COALESCE($4, image_url), stock = COALESCE($5, stock) WHERE id = $6 RETURNING *",
      [
        updateProductData.name,
        updateProductData.description,
        updateProductData.price,
        updateProductData.image_url,
        updateProductData.stock,
        id,
      ],
    );
    return productUpdated.rows[0] ?? null;
  },
};
