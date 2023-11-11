import Cart from "../components/Cart";
import ReservationRoomCard from "../components/ReservationRoomCard";
import { TEInput } from "tw-elements-react";

const ReservationPage = () => {
  const localStorageData = localStorage.getItem("rooms");
  const roomData = localStorageData
    ? Object.values(JSON.parse(localStorageData))
    : [];
  console.log(roomData);
  const localBooking = localStorage.getItem("bookingData");
  const bookingData = localBooking ? JSON.parse(localBooking) : "";
  console.log(bookingData);
  return (
    <div className="flex items-start justify-around">
      <div className="">
        {roomData.map((item, index) => (
          <ReservationRoomCard
            key={index}
            _id={item._id}
            index={index}
            imageCover={item.imageCover[0]}
            name={item.name}
          ></ReservationRoomCard>
        ))}
        <Payment></Payment>
        <Policy></Policy>
      </div>
      <div className="">
        <Cart
          startDate={bookingData.startDate}
          endDate={bookingData.endDate}
          adult={bookingData.adult}
          children={bookingData.children}
        />
      </div>
    </div>
  );
};

export default ReservationPage;

function Payment() {
  return (
    <div className=" flex flex-col gap-5 mt-5 bg-white p-5 shadow-xl rounded-lg">
      <h1>THÔNG TIN THANH TOÁN</h1>

      <div className="flex justify-start gap-10">
        <img
          src="https://reservations.aman.com/public/images/Visa.png"
          alt=""
          className="w-[50px] h-[30px]"
        />
        <img
          src="https://reservations.aman.com/public/images/MasterCard.png"
          alt=""
          className="w-[50px] h-[30px]"
        />
        <img
          src="https://reservations.aman.com/public/images/Amex.png"
          alt=""
          className="w-[50px] h-[30px]"
        />
        <img
          src="https://reservations.aman.com/public/images/JCB.png"
          alt=""
          className="w-[50px] h-[30px]"
        />
      </div>
      <div className=" w-[55%] flex flex-col gap-3">
        <TEInput size="lg" type="text" label="Số thẻ"></TEInput>
        <div className="flex w-full ">
          <TEInput size="lg" type="text" label="Ngày hết hạn(MM/YY)"></TEInput>
          <TEInput size="lg" type="text" label="CVV"></TEInput>
        </div>

        <TEInput size="lg" type="text" label="Tên trên thẻ"></TEInput>
      </div>
    </div>
  );
}

function Policy() {
  return (
    <div className="flex flex-col justify-start bg-white p-5 mt-5 shadow-xl rounded-lg gap-2">
      <h1 className="text-2xl">Chính sách:</h1>
      <div className="flex gap-10">
        <div className="">
          <span className="font-bold">Nhận phòng</span> <br />
          Sau 15:00
        </div>
        <div className="">
          <span className="font-bold"> Trả phòng </span>
          <br />
          Trước 12:00
        </div>
      </div>
      <div className="">
        <h1> CHÍNH SÁCH BẢO ĐẢM</h1>
        <span>Full prepayment is required 15 days prior to arrival.</span>
      </div>
      <div className="">
        <h1>CHÍNH SÁCH HỦY PHÒNG</h1>
        <span>
          Cancel within 15 days prior to arrival, early departure or no show
          will incur 2 night room charge penalty plus tax. .
        </span>
      </div>
    </div>
  );
}
