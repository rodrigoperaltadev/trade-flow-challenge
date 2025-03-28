import { Instrument, InstrumentResponse } from '../../../types/instrument';
import { calculateReturnPercentage } from './calculate-return-percentage';

export function mapInstruments(data: InstrumentResponse[]): Instrument[] {
  return data.map((item) => ({
    ...item,
    return_percentage: calculateReturnPercentage(
      item.last_price,
      item.close_price
    )
  }));
}
