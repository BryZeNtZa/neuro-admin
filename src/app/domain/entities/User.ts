import { AppUtils } from "@shared/helpers/app.utils";

export interface User {
    id?: number;
    username?: string;
    password?: string;
    first_name: string;
    last_name: string;
    email?: string;
    token?: string;
}

export type RegisterDto = User & { password_confirm: string };

export class UserUtils {
  public static getEmpty() {
    return {
      id: 0,
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
      token: ''
    }
  }

  public static getFromData(data: any|string):User {
    if(AppUtils.isString(data)) {
      const jsonUser:any = JSON.parse(data);
      return this.getFromJSON(jsonUser);
    }
    return this.getFromJSON(data);
  }

  public static getFromJSON(jsonData: any): User {
    return {
      id: jsonData.id ?? 0,
      username: jsonData.username ?? '',
      password: jsonData.password ?? '',
      first_name: jsonData.first_name ?? '',
      last_name: jsonData.last_name ?? '',
      email: jsonData.email ?? '',
      token: jsonData.token ?? ''
    }
  }

  public static isEmptyOrNull(user: User) {
    if(user.token === '') {
      return true;
    }
    return false;
  }

  public static getEmptyRegisterDto():RegisterDto {
    const user = UserUtils.getEmpty();
    const pwd_cfm = { password_confirm: '' };
    return {...user, ...pwd_cfm};
  }
}
