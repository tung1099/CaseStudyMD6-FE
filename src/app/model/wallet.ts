import {MoneyType} from './money-type';
import {Icon} from './icon';
import {User} from "./user";

export interface Wallet {
  id?: number;
  icon?: Icon;
  name?: string;
  total?: number;
  balance?: number;
  date?: string;
  note?: string;
  moneyType?: MoneyType;
  user?: User;
}
