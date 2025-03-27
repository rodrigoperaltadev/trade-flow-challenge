import { useQuery } from '@tanstack/react-query';
import { fetchPortfolio } from '../services/porfolio-service';

export const usePortfolio = () => {
  return useQuery({
    queryKey: ['portfolio'],
    queryFn: fetchPortfolio
  });
};
