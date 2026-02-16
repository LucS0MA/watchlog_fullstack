export interface OrderPublic {
  created_at: Date;
  id: number;
  shipping_address: string;
  status: string;
  total_amount: number;
  user_id: number;
}

export interface OrderRow {
  created_at: Date;
  id: number;
  shipping_address: string;
  status: string;
  total_amount: number;
  user_id: number;
}
