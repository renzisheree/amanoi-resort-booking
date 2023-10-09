// import { Dayjs } from "dayjs";
import Calendar from "./Calendar";
// import { useState } from "react";

// interface DateRange {
//   startDate: Dayjs | null;
//   endDate: Dayjs | null;
// }

const BookingCalendar = () => {
  // const [range, setRange] = useState<DateRange>({
  //   startDate: null,
  //   endDate: null,
  // });

  return (
    <div className="flex justify-center  bg-white">
      <Calendar />
      {/* <Calendar /> */}
    </div>
  );
};

// function BookingForm() {
//   return <div></div>;
// }
export default BookingCalendar;
