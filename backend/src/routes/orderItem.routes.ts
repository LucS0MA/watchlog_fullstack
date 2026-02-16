import {
  createOrderItem,
  deleteOrderItem,
  getAllOrderItems,
  getOrderItemById,
  getOrderItemsByOrderId,
  updateOrderItem,
} from "../controllers/orderItem.controllers.js";
import { Router } from "express";

export const orderItemRouter = Router();

orderItemRouter.get("/", getAllOrderItems);
orderItemRouter.get("/:id", getOrderItemById);
orderItemRouter.get("/order/:order_id", getOrderItemsByOrderId);
orderItemRouter.post("/", createOrderItem);
orderItemRouter.put("/:id", updateOrderItem);
orderItemRouter.delete("/:id", deleteOrderItem);
