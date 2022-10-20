import { AppUtils } from '@shared/helpers/app.utils';
import { User, UserUtils, RegisterDto as RegisterUserDto } from './User';


export interface Specialization {
  _id: string;
  name: string;
}

export interface TherapistSpecifics {
  user_id?: string;
  availability_id?: string;
  specializations?: Specialization [];
  insurance_id?: string;
  approve?: boolean;
  bio?: string;
  fee?: number;
}

export type Therapist = User & TherapistSpecifics;
export type CreateEditTherapistDto = RegisterUserDto & TherapistSpecifics;

export class TherapistSpecificsUtils {
  public static getEmpty(): TherapistSpecifics {
    return {
      user_id: '',
      availability_id: '',
      specializations: [],
      insurance_id: '',
      approve: false,
      bio: '',
      fee: 0,
    }
  }

  public static getFromJSON(jsonData: any): TherapistSpecifics {
    return {
      user_id: jsonData.user_id ?? '',
      availability_id: jsonData.availability_id ?? '',
      specializations: jsonData.specializations ?? [],
      insurance_id: jsonData.insurance_id ?? '',
      approve: jsonData.approve ?? false,
      bio: jsonData.bio ?? '',
      fee:jsonData.fee ??  0,
    }
  }
}

export class TherapistUtils {
  public static getEmpty(): Therapist {
    return  Object.assign({}, UserUtils.getEmpty(), TherapistSpecificsUtils.getEmpty());
  }

  public static getFromData(data: any|string): Therapist {
    if(AppUtils.isString(data)) {
      const json:any = JSON.parse(data);
      return this.getFromJSON(json);
    }
    return this.getFromJSON(data);
  }

  public static getFromJSON(jsonData: any): Therapist {
    return Object.assign({},
      UserUtils.getFromJSON(jsonData),
      TherapistSpecificsUtils.getFromJSON(jsonData)
    );
  }

  public static isEmptyOrNull(therapist: Therapist): boolean {
    if(UserUtils.isEmptyOrNull(therapist) || therapist.user_id === '') {
      return true;
    }
    return false;
  }

  public static getEmptyTherapistDto(): CreateEditTherapistDto {
    const userCreateDto = UserUtils.getEmptyRegisterDto();
    const therapistSpecifics = TherapistSpecificsUtils.getEmpty();
    return {...userCreateDto, ...therapistSpecifics};
  }
}
