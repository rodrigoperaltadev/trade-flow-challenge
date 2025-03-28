export interface InstrumentResponse {
  id: number;
  name: string;
  ticker: string;
  last_price: number;
  close_price: number;
}

export interface Instrument extends InstrumentResponse {
  return_percentage: number;
}
