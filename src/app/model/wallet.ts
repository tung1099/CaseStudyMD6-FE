import {MoneyType} from './money-type';

export interface Wallet {
  id?: number;
  icon?: any;
  name?: string;
  total?: number;
  balance?: number;
  date?: string;
  note?: string;
  moneyType?: MoneyType;
  user?: any;
}
