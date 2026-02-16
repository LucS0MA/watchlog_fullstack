import { OrderItem } from "../models/orderItem.models.js";
import { OrderItemRow } from "../types/orderItem.types.js";
import { pool } from "../config/database.js";

export const orderItemService = {
  createOrderItem: async (orderItemData: OrderItem): Promise<OrderItemRow> => {
    const newOrderItem = await pool.query<OrderItemRow>(
      "INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        orderItemData.order_id,
        orderItemData.product_id,
        orderItemData.quantity,
        orderItemData.price_at_purchase,
      ],
    );
    return newOrderItem.rows[0];
  },

  deleteOrderItem: async (id: string): Promise<null | OrderItemRow> => {
    const orderItemDeleted = await pool.query<OrderItemRow>(
      "DELETE FROM order_items WHERE id = $1 RETURNING *",
      [id],
    );
    return orderItemDeleted.rows[0] ?? null;
  },

  getAllOrderItems: async (): Promise<OrderItemRow[]> => {
    const { rows } = await pool.query<OrderItemRow>(
      "SELECT * FROM order_items",
    );
    return rows;
  },

  getOrderItemById: async (id: string): Promise<null | OrderItemRow> => {
    const { rows } = await pool.query<OrderItemRow>(
      "SELECT * FROM order_items WHERE id = $1",
      [id],
    );
    return rows[0] ?? null;
  },

  getOrderItemsByOrderId: async (order_id: string): Promise<OrderItemRow[]> => {
    const { rows } = await pool.query<OrderItemRow>(
      "SELECT * FROM order_items WHERE order_id = $1",
      [order_id],
    );
    return rows;
  },

  updateOrderItem: async (
    id: string,
    updateOrderItemData: Partial<OrderItem>,
  ): Promise<null | OrderItemRow> => {
    const orderItemUpdated = await pool.query<OrderItemRow>(
      "UPDATE order_items SET order_id = COALESCE($1, order_id), product_id = COALESCE($2, product_id), quantity = COALESCE($3, quantity), price_at_purchase = COALESCE($4, price_at_purchase) WHERE id = $5 RETURNING *",
      [
        updateOrderItemData.order_id,
        updateOrderItemData.product_id,
        updateOrderItemData.quantity,
        updateOrderItemData.price_at_purchase,
        id,
      ],
    );
    return orderItemUpdated.rows[0] ?? null;
  },
};
