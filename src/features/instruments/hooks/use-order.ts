import { useMutation } from '@tanstack/react-query';
import { postOrder } from '../services/order-service';
import { OrderRequest, OrderResponse } from '../../../types/order';

export const useOrder = () => {
  return useMutation<OrderResponse, Error, OrderRequest>({
    mutationFn: postOrder
  });
};
