import {Category} from './category';
import {Wallet} from './wallet';

export interface Transaction {
  id?: number;
  amount?: string;
  date?: string;
  note?: string;
  category?: Category;
  wallet?: Wallet;
}
