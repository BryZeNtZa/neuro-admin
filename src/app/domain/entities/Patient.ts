import { AppUtils } from '@shared/helpers/app.utils';
import { User, UserUtils, RegisterDto } from './User';

export type Patient = User & { user_id?: string, age?: number };
export type CreateEditPatientDto = RegisterDto & { user_id?: string, age?: number };

export class PatientUtils {
  public static getEmpty(): Patient {
    return Object.assign({}, UserUtils.getEmpty(), { user_id: '', age: 0 });
  }

  public static getFromData(data: any|string):Patient {
    if(AppUtils.isString(data)) {
      const json:any = JSON.parse(data);
      return this.getFromJSON(json);
    }
    return this.getFromJSON(data);
  }

  public static getFromJSON(jsonData: any): Patient {
    return Object.assign({},
      UserUtils.getFromJSON(jsonData),
      { user_id: jsonData.user_id ?? '', age: jsonData.age ?? 0 }
    );
  }

  public static isEmptyOrNull(patient: Patient) {
    if(UserUtils.isEmptyOrNull(patient) || patient.user_id === '') {
      return true;
    }
    return false;
  }

  public static getEmptyPatientDto(): CreateEditPatientDto {
    const userCreateDto = UserUtils.getEmptyRegisterDto();
    const patientSpecifics = { user_id: '', age: 0 };
    return {...userCreateDto, ...patientSpecifics};
  }
}
