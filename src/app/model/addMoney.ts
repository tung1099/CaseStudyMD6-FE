import {Wallet} from './wallet';

export interface AddMoney {
  id?: number;
  money?: number;
  date?: string;
  wallet?: Wallet;
}
