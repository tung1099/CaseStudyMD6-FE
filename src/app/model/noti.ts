import {User} from "./user";

export interface Noti {
  id?: number;
  content: string;
  user1: User,
  user2: User,
}
