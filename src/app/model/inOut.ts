import {Wallet} from './wallet';

export interface InOut {
  id?: number;
  year?: number;
  month?: number;
  inFlow?: number;
  outFlow?: number;
  wallet?: Wallet;
}
