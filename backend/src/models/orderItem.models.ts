export class OrderItem {
  order_id: number;
  price_at_purchase: number;
  product_id: number;
  quantity: number;

  constructor(
    order_id: number,
    product_id: number,
    quantity: number,
    price_at_purchase: number,
  ) {
    this.order_id = order_id;
    this.price_at_purchase = price_at_purchase;
    this.product_id = product_id;
    this.quantity = quantity;
  }
}
