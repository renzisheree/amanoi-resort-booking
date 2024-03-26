import { DateFactoryImpl } from "./dateFactoryImpl";
import dayjs, { Dayjs } from "dayjs";

export class DayJsDateFactory extends DateFactoryImpl {
  createDate(year: number, month: number, date: number): Dayjs {
    return dayjs(new Date(year, month, date));
  }
}
