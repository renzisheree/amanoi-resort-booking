import dayjs, { Dayjs } from "dayjs";

export const generateDate = (
  month: number = dayjs().month(),
  year: number = dayjs().year()
): [Dayjs, Dayjs] => {
  const firstDayOfMonth: Dayjs = dayjs()
    .year(year)
    .month(month)
    .startOf("month");
  const endDayOfMonth: Dayjs = dayjs().year(year).month(month).endOf("month");

  return [firstDayOfMonth, endDayOfMonth];
};
