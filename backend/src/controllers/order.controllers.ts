import { Request, Response } from "express";
import { Order } from "../models/order.models.js";
import { orderService } from "../services/order.services.js";

export const getAllOrders = async (_req: Request, res: Response) => {
  try {
    const orders = await orderService.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve all orders",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getOrderById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const order = await orderService.getOrderById(id);
    res.status(200).json(order);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get the order",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getOrdersByUserId = async (req: Request, res: Response) => {
  try {
    const user_id = String(req.params.user_id);

    if (!user_id) {
      return res.status(404).json({ error: "No user_id provided" });
    }

    const orders = await orderService.getOrdersByUserId(user_id);
    res.status(200).json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get orders for this user",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const createOrder = async (req: Request, res: Response) => {
  try {
    const newOrderData = req.body as Order;
    const result = await orderService.createOrder(newOrderData);
    res.status(201).json({ message: "Order successfully created", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create the order",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const updateOrder = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const updateOrderData = req.body as Partial<Order>;
    const result = await orderService.updateOrder(id, updateOrderData);
    res.status(200).json({ message: "Order successfully updated", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to update the order",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteOrder = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const result = await orderService.deleteOrder(id);
    res.status(200).json({ message: "Order successfully deleted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to delete the order",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};
