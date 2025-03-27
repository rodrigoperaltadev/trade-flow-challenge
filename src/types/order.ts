export type OrderResponseStatus = 'PENDING' | 'REJECTED' | 'FILLED';

export interface OrderResponse {
  id: number;
  status: OrderResponseStatus;
}

export type OrderType = 'BUY' | 'SELL';
export type OrderMode = 'MARKET' | 'LIMIT';

export interface OrderRequest {
  instrument_id: number;
  side: OrderType;
  type: OrderMode;
  quantity: number;
  price?: number;
}
