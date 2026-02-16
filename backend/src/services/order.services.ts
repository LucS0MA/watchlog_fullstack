import { Order } from "../models/order.models.js";
import { OrderRow } from "../types/order.types.js";
import { pool } from "../config/database.js";

export const orderService = {
  createOrder: async (orderData: Order): Promise<OrderRow> => {
    const newOrder = await pool.query<OrderRow>(
      "INSERT INTO orders (user_id, total_amount, status, shipping_address) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        orderData.user_id,
        orderData.total_amount,
        orderData.status,
        orderData.shipping_address,
      ],
    );
    return newOrder.rows[0];
  },

  deleteOrder: async (id: string): Promise<null | OrderRow> => {
    const orderDeleted = await pool.query<OrderRow>(
      "DELETE FROM orders WHERE id = $1 RETURNING *",
      [id],
    );
    return orderDeleted.rows[0] ?? null;
  },

  getAllOrders: async (): Promise<OrderRow[]> => {
    const { rows } = await pool.query<OrderRow>("SELECT * FROM orders");
    return rows;
  },

  getOrderById: async (id: string): Promise<null | OrderRow> => {
    const { rows } = await pool.query<OrderRow>(
      "SELECT * FROM orders WHERE id = $1",
      [id],
    );
    return rows[0] ?? null;
  },

  getOrdersByUserId: async (user_id: string): Promise<OrderRow[]> => {
    const { rows } = await pool.query<OrderRow>(
      "SELECT * FROM orders WHERE user_id = $1",
      [user_id],
    );
    return rows;
  },

  updateOrder: async (
    id: string,
    updateOrderData: Partial<Order>,
  ): Promise<null | OrderRow> => {
    const orderUpdated = await pool.query<OrderRow>(
      "UPDATE orders SET user_id = COALESCE($1, user_id), total_amount = COALESCE($2, total_amount), status = COALESCE($3, status), shipping_address = COALESCE($4, shipping_address) WHERE id = $5 RETURNING *",
      [
        updateOrderData.user_id,
        updateOrderData.total_amount,
        updateOrderData.status,
        updateOrderData.shipping_address,
        id,
      ],
    );
    return orderUpdated.rows[0] ?? null;
  },
};
