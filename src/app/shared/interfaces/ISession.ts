import { User } from "@entity/User";

export interface ISession {
  user: User | null,
}
