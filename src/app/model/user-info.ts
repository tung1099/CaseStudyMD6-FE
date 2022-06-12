import {User} from "./user";

export interface UserInfo {
  id?: number;
  name?: string,
  avatar?: string,
  phoneNumber?: string,
  birthDay?: string,
  address?: string,
  user?: User;
}
