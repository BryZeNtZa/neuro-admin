import { Period } from '@entity/Period';
import { ReportType } from '@entity/ReportType';

export interface Report {
    id: number;
    title: string;
    fiscalYear: number;
    period: Period;
    type: ReportType;
    dateCreation: string;
    dateModification: string;
}