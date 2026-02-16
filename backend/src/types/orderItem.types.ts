export interface OrderItemPublic {
  id: number;
  order_id: number;
  price_at_purchase: number;
  product_id: number;
  quantity: number;
}

export interface OrderItemRow {
  id: number;
  order_id: number;
  price_at_purchase: number;
  product_id: number;
  quantity: number;
}
