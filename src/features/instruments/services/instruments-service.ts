import { apiClient } from '../../../services/api-client';
import { Instrument, InstrumentResponse } from '../../../types/instrument';
import { mapInstruments } from '../utils/map-instruments';

export const fetchInstruments = async (): Promise<Instrument[]> => {
  const response = await apiClient.get<InstrumentResponse[]>('/instruments');
  return mapInstruments(response.data);
};
