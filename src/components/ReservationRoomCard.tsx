import React, { useEffect, useState } from "react";
import ReservationForm from "./ReservationForm";

interface RRProps {
  _id: string;
  index: number;
  imageCover: string;
  name: string;
}

const ReservationRoomCard: React.FC<RRProps> = ({
  _id,
  index,
  imageCover,
  name,
}) => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const localBooking = localStorage.getItem("bookingData");
  const bookingData = localBooking ? JSON.parse(localBooking) : "";

  return (
    <div className="flex border-b-4 shadow-xl p-5 min-w-[700px] bg-white rounded-md   flex-col gap-10 justify-center items-center">
      <div className="flex items-center w-full gap-5 p-5 shadow-md ">
        {" "}
        <img src={imageCover} alt="" className="w-[120px] h-[100px]" />
        <div className="w-[60%]">
          <h1>Phòng {index + 1}</h1>
          <span
            onClick={() => {
              setIsFormVisible(!isFormVisible);
            }}
            className="float-right cursor-pointer"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
                fill="#000000"
              />
            </svg>
          </span>
          <h1>{name}</h1>
          <h1>Standard Daily Date</h1>

          <span>
            {bookingData.startDate} - {bookingData.endDate}
          </span>
          <hr className="p-[2px] w-full bg-slate-500" />
        </div>
      </div>
      <div
        className={`w-full reservation-form-wrapper ${
          isFormVisible ? "slide-in" : "hidden"
        }`}
      >
        {" "}
        <ReservationForm _id={_id} />
      </div>
    </div>
  );
};

export default ReservationRoomCard;
