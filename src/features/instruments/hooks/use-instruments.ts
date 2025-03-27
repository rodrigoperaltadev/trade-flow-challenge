import { useQuery } from '@tanstack/react-query';
import { fetchInstruments } from '../services/instruments-service';

export const useInstruments = () => {
  return useQuery({
    queryKey: ['instruments'],
    queryFn: fetchInstruments
  });
};
