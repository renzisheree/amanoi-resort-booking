import Calendar from "./Calendar";

const BookingCalendar = () => {
  return (
    <div className="bg-white w-[80vw] m-auto pt-10">
      <div className="text-3xl italic text-center font-body">
        ĐẶT PHÒNG NGAY
      </div>
      <div className="flex justify-center ">
        <Calendar />
      </div>
    </div>
  );
};

export default BookingCalendar;
