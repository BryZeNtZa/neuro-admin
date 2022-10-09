export interface Period {
    id: number;
    start?: string;
    end?: string;
}

export class PeriodUtils {
    /**
     * Return a new JSON instance of the class up
     */
    public static get(): Period {
        return {
            id: 0,
            start: '',
            end: ''
        };
    }
}
