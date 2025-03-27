import { apiClient } from '../../../services/api-client';
import { OrderRequest, OrderResponse } from '../../../types/order';

export const postOrder = async (
  order: OrderRequest
): Promise<OrderResponse> => {
  const response = await apiClient.post('/orders', order);
  return response.data;
};
