import Calendar from "./Calendar";

const BookingCalendar = () => {
  return (
    <div className="bg-white w-[80vw] m-auto pt-10">
      <div className="text-3xl italic font-body text-center">
        SELECT THE DATE
      </div>
      <div className="flex justify-center ">
        <Calendar />
      </div>
    </div>
  );
};

export default BookingCalendar;
