
/**
 * Utility functions
 * Nb: for date functions, we'll further remove moment js
 * and replace it with ngx-date-fns
 */
export class AppUtils {

    /**
     * Pattern to validate amount
     */
    public static amountPattern = /^\d+(\.\d{0,4})?$/; // /^\$?[0-9]+(\.([0-9])?)?$/;
    /**
     * Pattern to validate quantity
     */
    public static quantityPattern = /^\d+(\.\d{0,4})?$/;// /^\$?[0-9]+(\.([0-9])?)?$/;

    /**
     * Pattern to validate quantity
     */
    public static decimalNumberPattern = /^\d+(\.\d{0,2})?$/;// /^\$?[0-9]+(\.([0-9])?)?$/;

    /**
     * Pattern to validate not empty string
     */
    public static notEmptyStringPattern = /([^\s])/;

    /**
     * Pattern to validate not empty string
     */
    public static emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    /**
     * Pattern to validate not empty string
     */
    public static phonePattern = /^[+0-9]+[0-9 ]+$/;
    // tslint:disable-next-line: max-line-length
    public static regexIso8601 = /^(\d{4}|\+\d{6})(?:-(\d{2})(?:-(\d{2})(?:T(\d{2}):(\d{2}):(\d{2})\.(\d{1,})(Z|([\-+])(\d{2}):(\d{2}))?)?)?)?$/;

    /**
     * Check if it is a string
     */
    public static isString(data: any): data is string {
      return typeof data === 'string';
    }

    /**
     * Check if a string is empty
     */
    public static isStringEmpty(str: string) {
        if (str == null || str === undefined || String(str).trim() === '') { return true; }
        return false;
    }

    // Validate that amountValue is a valid amount
    public static isValidAmount(amountValue: null): boolean {
        if (amountValue == null) { return false ; }
        const isValid = (String(amountValue).trim().match(AppUtils.amountPattern) !== null);
        return isValid;
    }

    // Validate that quantityValue is a valid quantity, according to the pattern
    public static isValidQuantity(quantityValue: null): boolean {
        if (quantityValue == null) { return false ; }
        const isValid = (String(quantityValue).trim().match(AppUtils.quantityPattern) !== null);
        return isValid;
    }

    // Validate that amountValue is a valid amount
    public static isValidAmountSet(amountValue: null): boolean {
        if (amountValue == null) { return true ; }
        const isValid = (String(amountValue).trim().match(AppUtils.amountPattern) !== null);
        return isValid;
    }
   // Validate that value respect pattern
   /*public static isValidWithPattern(value: null, pattern: { [Symbol.match](string: string): RegExpMatchArray | null; } | null): boolean {
        if (value == null && pattern != null) { return false ; }
        const val = String(value).trim();
        const isValid = (val.match(pattern) !== null);
        return isValid;
    }*/

    public static convertBase64ToBlob( base64: string) {
        // convert base64 to raw binary data held in a string
       // if(base64 == null || base64 == "") return "";
        try {
            const byteString = atob(base64);
            // write the bytes of the string to an ArrayBuffer
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);
            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            // write the ArrayBuffer to a blob, and you're done
            const bb = new Blob([ab]);
            return bb;
        } catch (e) {
            console.log(' Utils.convertBase64ToBlob error ', e);
        }
        return null;
    }

    public static generateNumberWithDateTime(date: Date): string {
        let dateAsString = '';
        if (date == null) { return ''; }
        dateAsString = date.toISOString().replace('-', '/').replace('-', '/').replace('T', '_').split('.')[0];
        return dateAsString;
    }

    public static formatDateTime(date: string): string {
        let dateAsString = '';
        /** if (date == null && date.match(date) != null ) return ""; */
        if (date == null) { return ''; }
        const value: Date = new Date(date);
        // value.setTime(date);

        dateAsString = value.toISOString().replace('-', '/').replace('-', '/').replace('T', ' ').split('.')[0];
        // console.log(iso8601.toDate(date));
        // return iso8601.toDate(date);
        return dateAsString;
    }

    public static formatDate(date: any, locale?: string): string {
        let dateAsString = '';
        let format = 'DD/MM/YYYY';
        if (locale === 'en') {
            format = 'YYYY/MM/DD';
        }
        // dateAsString = moment(date).locale(locale ? locale : 'fr').format(format);
        return dateAsString;
    }

  }
