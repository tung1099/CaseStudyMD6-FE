import {MoneyType} from './money-type';
import {Icon} from './icon';

export interface Wallet {
  id?: number;
  icon?: Icon;
  name?: string;
  total?: number;
  balance?: number;
  date?: string;
  note?: string;
  moneyType?: MoneyType;
  user?: any;
}
