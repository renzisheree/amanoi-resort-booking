// interface BookingCalendar {
//   id: string;
// }
// const BookingCalendar: React.FC<BookingCalendar>
const BookingCalendar = () => {
  const date = new Date();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const totalDay = new Date(year, month, 0).getDate();
  console.log(totalDay);

  return (
    <div className="w-[450px] h-[450px] border-black border-2">
      <svg
        width="40px"
        height="40px"
        viewBox="0 0 1024 1024"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000000"
          d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        />
        <path
          fill="#000000"
          d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        />
      </svg>
    </div>
  );
};

export default BookingCalendar;
