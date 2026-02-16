export class Order {
  shipping_address: string;
  status: string;
  total_amount: number;
  user_id: number;

  constructor(
    user_id: number,
    total_amount: number,
    status: string,
    shipping_address: string,
  ) {
    this.shipping_address = shipping_address;
    this.status = status;
    this.total_amount = total_amount;
    this.user_id = user_id;
  }
}
