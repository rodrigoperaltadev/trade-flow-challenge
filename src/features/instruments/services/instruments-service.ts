import { apiClient } from '../../../services/api-client';
import { Instrument } from '../../../types/instrument';

export const fetchInstruments = async (): Promise<Instrument[]> => {
  const response = await apiClient.get('/instruments');
  return response.data;
};
