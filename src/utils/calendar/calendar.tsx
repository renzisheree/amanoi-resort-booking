// import dayjs, { Dayjs } from "dayjs";

// interface DateInfo {
//   currentMonth: boolean;
//   date: Dayjs;
//   today?: boolean;
// }

// export const months = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// export const generateDate = (
//   month: number = dayjs().month(),
//   year: number = dayjs().year()
// ): DateInfo[] => {
//   const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
//   const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

//   const dates: DateInfo[] = [];

//   // Create prefill dates
//   for (let i = 0; i < firstDateOfMonth.day(); i++) {
//     const date = firstDateOfMonth.day(i) as Dayjs;

//     dates.push({
//       currentMonth: false,
//       date,
//     });
//   }

//   // Generate current month dates
//   for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
//     const date = firstDateOfMonth.date(i) as Dayjs;

//     dates.push({
//       currentMonth: true,
//       date,
//       today: date.toDate().toDateString() === dayjs().toDate().toDateString(),
//     });
//   }

//   // Create remaining dates
//   const remaining = 42 - dates.length;

//   for (
//     let i = lastDateOfMonth.date() + 1;
//     i <= lastDateOfMonth.date() + remaining;
//     i++
//   ) {
//     const date = lastDateOfMonth.date(i) as Dayjs;

//     dates.push({
//       currentMonth: false,
//       date,
//     });
//   }

//   return dates;
// };
