// utils/dateFactory/dateFactory.ts
import { Dayjs } from "dayjs";

export interface DateFactory {
  createDate(year: number, month: number, date: number): Dayjs;
}

export abstract class DateFactoryImpl implements DateFactory {
  abstract createDate(year: number, month: number, date: number): Dayjs;
}
