import { Request, Response } from "express";
import { OrderItem } from "../models/orderItem.models.js";
import { orderItemService } from "../services/orderItem.services.js";

export const getAllOrderItems = async (_req: Request, res: Response) => {
  try {
    const orderItems = await orderItemService.getAllOrderItems();
    res.status(200).json(orderItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to retrieve all order items",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getOrderItemById = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const orderItem = await orderItemService.getOrderItemById(id);
    res.status(200).json(orderItem);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get the order item",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const getOrderItemsByOrderId = async (req: Request, res: Response) => {
  try {
    const order_id = String(req.params.order_id);

    if (!order_id) {
      return res.status(404).json({ error: "No order_id provided" });
    }

    const orderItems = await orderItemService.getOrderItemsByOrderId(order_id);
    res.status(200).json(orderItems);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to get order items for this order",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const createOrderItem = async (req: Request, res: Response) => {
  try {
    const newOrderItemData = req.body as OrderItem;
    const result = await orderItemService.createOrderItem(newOrderItemData);
    res
      .status(201)
      .json({ message: "Order item successfully created", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create the order item",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const updateOrderItem = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);
    const updateOrderItemData = req.body as Partial<OrderItem>;
    const result = await orderItemService.updateOrderItem(
      id,
      updateOrderItemData,
    );
    res
      .status(200)
      .json({ message: "Order item successfully updated", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to update the order item",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};

export const deleteOrderItem = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id);

    if (!id) {
      return res.status(404).json({ error: "No id provided" });
    }

    const result = await orderItemService.deleteOrderItem(id);
    res
      .status(200)
      .json({ message: "Order item successfully deleted", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to delete the order item",
      message: err instanceof Error ? err.message : "unknown error",
    });
  }
};
