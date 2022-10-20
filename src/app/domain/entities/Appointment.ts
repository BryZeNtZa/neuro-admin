import { AppUtils } from '@shared/helpers/app.utils';
import { Patient, PatientUtils } from './Patient';
import { Therapist, TherapistUtils } from './Therapist';

export enum Timeslot {
  Morning,
  Afternoon,
  Evening,
  Night,
}

export enum AppointmentStatus {
  Pending,
  Inprogress,
  Closed,
}

export interface Appointment {
  _id?: string;
  date?: Date;
  timeslot?: Timeslot;
  patient: Patient;
  therapist: Therapist;
  status?: AppointmentStatus;
  start?: Date;
  end?: Date;
  next_id?: string;
  previous_id?: string;
  note_id?: string;
}

export type CreateEditAppointmentDto = Appointment;

export class AppointmentUtils {
  public static getEmpty(): Appointment {
    return {
      _id: '',
      date: new Date,
      timeslot: Timeslot.Morning,
      patient: PatientUtils.getEmpty(),
      therapist: TherapistUtils.getEmpty(),
      status: AppointmentStatus.Pending,
      start: new Date,
      end: new Date,
      next_id: '',
      previous_id: '',
      note_id: ''
    }
  }

  public static getFromData(data: any|string): Appointment {
    if(AppUtils.isString(data)) {
      const json:any = JSON.parse(data);
      return this.getFromJSON(json);
    }
    return this.getFromJSON(data);
  }

  public static getFromJSON(jsonData: any): Appointment {
    return {
      _id: jsonData._id ?? '',
      date: jsonData.date ?? new Date,
      timeslot: jsonData.timeslot ?? Timeslot.Morning,
      patient: jsonData.patient ?? PatientUtils.getEmpty(),
      therapist: jsonData.therapist ?? TherapistUtils.getEmpty(),
      status: jsonData.status ?? AppointmentStatus.Pending,
      start: jsonData.start ?? new Date,
      end: jsonData.end ?? new Date,
      next_id: jsonData.next_id ?? '',
      previous_id: jsonData.previous_id ?? '',
      note_id: jsonData.note_id ?? ''
    };
  }

  public static isEmptyOrNull(appointment: Appointment): boolean {
    if(appointment._id === '') {
      return true;
    }
    return false;
  }

}
