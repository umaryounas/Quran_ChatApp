import {
  differenceInSeconds,
  differenceInMinutes,
  differenceInYears,
  endOfMonth,
  format,
  isAfter,
  startOfMonth,
  isSunday,
  isWeekend,
  eachDayOfInterval,
  nextDay,
  getMonth,
  getYear,
  addHours,
  subMinutes,
} from 'date-fns';
import moment from 'moment-timezone';
export class DateUtil {
  private static _instance: DateUtil;

  private _undefinedDate = 'N/A';
  private _apiDateFormat = "yyyy-MM-dd'T'HH:mm:ss";
  private _newFormat = 'yyyy-MM-dd HH:mm:ss';

  private _appDateFormat = 'MMM dd, yyyy';
  private _appTimeFormat = 'HH:mm:ss';
  private _timeFormat = 'HH:mm';
  private _appOnlyDateFormatFirebae = 'd-MMM-yyyy';
  private _appOnlyTimeFormatFirebae = 'hh:mm a';
  private _appDateTimeFormatFirebae = 'd-MMM-yyyy hh:mm a';
  private _appDateTimeFormat = 'yyyy-MM-dd HH:mm a';
  private _appDateTimeFormatMail = 'HH:mm a, yyyy-MM-dd';

  private _appTimeFormatDay = 'dd';
  private _scheduleApiDateFormat = 'yyyy-MM-dd';
  private _newApiDateFormat = 'MM/dd/yyyy';
  private _newOneApiDateFormat = 'yyyy/MM/dd';
  private _messageChangeFormat = 'dd-MM-yyyy';
  private _scheduleApiTimeFormat = 'hh:mm a  d-MMM-yyyy';
  private _tier2blastTimeFormat = 'MM/dd/yyyy, hh:mm:ss a';

  private constructor() {}
  public static getInstance = () => {
    if (!this._instance) {
      this._instance = new DateUtil();
    }
    return this._instance;
  };
  public getTimeZoneAbbreviation = (timeZone: string): string => {
    return moment.tz(timeZone).format('z'); // Get the abbreviation of the time zone
  };
  public isWeekend = (date?: string) => {
    if (!date) return -1;
    return isWeekend(new Date(date));
  };
  public parseApiDate = (date?: string) => {
    if (!date) return -1;
    new Date(date).getMilliseconds();
  };

  public formatForApiDate = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._newApiDateFormat);
  };
  public formatForNewApiDate = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._newOneApiDateFormat);
  };
  public formatNew = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._newFormat);
  };
  public formatAppDateToApiDate = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._apiDateFormat);
  };

  public formatMillisToAppDate = (millis?: number) => {
    if (!millis) return this._undefinedDate;
    return format(new Date(millis), this._appDateFormat);
  };

  public formatMillisToAppTime = (millis?: number) => {
    if (!millis) return this._undefinedDate;
    return format(new Date(millis), this._appTimeFormat);
  };

  public formatScheduleTime = (date?: string | Date | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._scheduleApiTimeFormat);
  };

  public formatApiDateToAppDate = (date?: string | Date) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appDateFormat);
  };

  public formatApiDateToAppTime = (date?: string | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appTimeFormat);
  };
  public formatApiDateToTime = (date?: string | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._timeFormat);
  };
  public formatApiDateToTimeZone = (dateString: Date) => {
    const date = new Date(dateString);
    // Extract hours and minutes, and format to "HH:mm"
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    return `${hours}:${minutes}`;
  };
  formatDateToTimeZone = (dateString: Date): string => {
    const date = new Date(dateString);

    // Extract month, day, year, hours, and minutes
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth returns 0-based month
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');

    // Return formatted date as "MM/DD/YYYY HH:mm"
    return `${month}/${day}/${year} ${hours}:${minutes}`;
  };
  public formatApiDateToAppOnlyDateFirebase = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appOnlyDateFormatFirebae);
  };

  public formatApiDateToAppOnlyTimeFirebase = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appOnlyTimeFormatFirebae);
  };

  public formatApiDateToAppDateTimeFirebase = (date?: string | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appDateTimeFormatFirebae);
  };

  public formatApiDateToAppDateTimeMail = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appDateTimeFormatMail);
  };

  public formatApiDateToAppTimeDay = (date?: string) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appTimeFormatDay);
  };

  public formatApiDateToAppDateTime = (date?: string | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._appDateTimeFormat);
  };

  public formatDateForCalendar = (date?: Date | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._scheduleApiDateFormat);
  };

  public formatDateForMessageChange = (date?: Date | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._messageChangeFormat);
  };

  public formatTier2blastTimeChange = (date?: string | number) => {
    if (!date) return this._undefinedDate;
    return format(new Date(date), this._tier2blastTimeFormat);
  };
  public formatSameTimeZone = (date?: Date) => {
    if (!date) return this._undefinedDate;
    const year = date.getUTCFullYear();
    const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getUTCDate()).padStart(2, '0');
    const hours = String(date.getUTCHours()).padStart(2, '0');
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  public startOfMonth = (date?: Date | number) => {
    if (!date) return this._undefinedDate;
    return format(startOfMonth(date), this._scheduleApiDateFormat);
  };

  public endOfMonth = (date?: Date | number) => {
    if (!date) return this._undefinedDate;
    return format(endOfMonth(date), this._scheduleApiDateFormat);
  };

  public fullMonthdays = (
    year: string,
    month: string,
    date?: Date | number,
  ) => {
    // if (!date) return this._undefinedDate;
    return eachDayOfInterval({
      start: startOfMonth(new Date(parseInt(year), parseInt(month) - 1, 1)),
      end: endOfMonth(new Date(parseInt(year), parseInt(month) - 1, 1)),
    }).map(date => format(date, this._scheduleApiDateFormat));
  };

  public getAge = (date?: string) => {
    if (!date) return -1;
    return differenceInYears(new Date(), new Date(date));
  };

  public getMintDiff = (firstDate: Date, secDate: Date) => {
    if (!firstDate || !secDate) return -1;
    return differenceInMinutes(firstDate, secDate);
  };
  public getSecondDiff = (date: Date | number) => {
    if (!date) return -1;
    return differenceInSeconds(new Date().getTime(), date);
  };
  public getMonth = (date: Date | number) => {
    if (!date) return -1;
    return getMonth(date) + 1;
  };
  public getYear = (date: Date | number) => {
    if (!date) return -1;
    return getYear(date);
  };

  public subMinutes = (date: Date | undefined, min: number) => {
    if (!date) return undefined;
    return subMinutes(date, min);
  };
  public addHours = (date: Date | undefined, hours: number) => {
    if (!date) return undefined;
    return addHours(date, hours);
  };
  public addHoursDiffMin = (
    date: Date | undefined,
    hours: number,
    mins: number,
  ) => {
    if (!date) return undefined;
    const newDate = addHours(date, hours);
    return subMinutes(newDate, mins);
  };
  public isAfterDate = (date: Date | number) => {
    if (!date) return -1;
    return isAfter(new Date(), date);
  };

  public getIsAfterDate = (messageDate: Date | number) => {
    if (!messageDate) return -1;
    return isAfter(messageDate, new Date(2022, 11, 6, 0, 0, 0));
  };
  public getMonthName = (monthIndex: number) => {
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    return month[monthIndex];
  };

  public getCurrentTimeInTimeZone = (timeZone: string) => {
    try {
      const date = new Date();
      if (timeZone == 'Etc/UTC' || timeZone == 'Etc/GMT-12') {
        return new Date().toISOString();
      }
      const localTime = date.toLocaleString('en-CA', {
        timeZone,
        hour12: false, // Ensures 24-hour format
      });

      const [datePart, timePart] = localTime.split(', ');
      const milliseconds = String(date.getMilliseconds()).padStart(3, '0');
      return `${datePart}T${timePart}.${milliseconds}Z`;
    } catch (error) {
      return `Invalid time zone: ${timeZone}`;
    }
  };

  public convertServerDateToLocal(dateInput: any) {
    // EST - UTC offset: 5 hours
    var offset = 5.0,
      /*
      - calculate the difference between the server date and UTC
      - the value returned by the getTime method is the number of milliseconds since 1 January 1970 00:00:00 UTC.
      - the time-zone offset is the difference, in minutes, between UTC and local time
      - 60000 milliseconds = 60 seconds = 1 minute
      */
      serverDate = new Date(dateInput),
      utc = serverDate.getTime() - serverDate.getTimezoneOffset() * 60000,
      /*
      - apply the offset between UTC and EST (5 hours)
      - 3600000 milliseconds = 3600 seconds = 60 minutes = 1 hour
      */
      clientDate = new Date(utc + 3600000 * offset);
    return clientDate.toLocaleString();
  }
}
