import dayjs from "dayjs";
import { DateFactory } from "../dateFactory/dateFactory";

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export function generateDate(
  month: number,
  year: number,
  dateFactory: DateFactory
) {
  const dates = [];
  const lastDay = dateFactory.createDate(year, month + 1, 0).date();

  for (let date = 1; date <= lastDay; date++) {
    const currentDate = dateFactory.createDate(year, month, date);
    const today = dateFactory.createDate(
      dayjs().year(),
      dayjs().month(),
      dayjs().date()
    );

    dates.push({
      date: currentDate,
      currentMonth: currentDate.month() === month,
      today: today.isSame(currentDate, "day"),
    });
  }

  return dates;
}
