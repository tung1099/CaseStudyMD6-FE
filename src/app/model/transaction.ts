import {Wallet} from './wallet';

export interface Transaction {
  id?: number;
  amount?: string;
  date?: string;
  note?: string;
  category?: any;
  wallet?: Wallet;
}
