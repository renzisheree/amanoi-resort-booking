// interface BookingCalendar {
//   id: string;
// }

import Calendar from "./Calendar";

// const BookingCalendar: React.FC<BookingCalendar>
const BookingCalendar = () => {
  return (
    <div className="flex justify-center items-center w-[70vw] bg-white">
      <Calendar></Calendar>
      <Calendar></Calendar>
    </div>
  );
};

export default BookingCalendar;
