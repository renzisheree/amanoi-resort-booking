import React from "react";
interface CardRoomProps {
  startDate: string;
  endDate: string;
  children: number;
  adult: number;
  roomName: string;
  range: number;
  price: number;
  fee: number;
  _id: string;
}

const CardRoom: React.FC<CardRoomProps> = ({
  startDate,
  endDate,
  adult,
  children,
  roomName,
  range,
  price,
  fee,
  _id,
}) => {
  const handleDelete = (_id: string) => {
    const localStorageData = localStorage.getItem("rooms");
    const data = localStorageData
      ? Object.values(JSON.parse(localStorageData))
      : [];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const updatedData = data.filter((item: any) => item._id !== _id);

    localStorage.setItem("rooms", JSON.stringify(updatedData));
    window.location.reload();
  };
  return (
    <div className="p-5 shadow-md">
      <h1>YOUR ROOM</h1>
      <div className="flex flex-col items-center justify-center">
        <span>
          {startDate} - {endDate}
        </span>
        <span>
          {adult} adult - {children} children
        </span>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          {" "}
          <span className="text-2xl font-medium">{roomName}</span>
          <span>Standard Daily Rate</span>
        </div>
        <div className="">{price}$ - day</div>
      </div>
      <div className="">{range} night(s)</div>
      <div className="flex justify-between">
        <span>Taxes and Fees</span>
        <span className="font-medium">
          {fee} {price * range * 0.08}$
        </span>
      </div>{" "}
      <div className="flex justify-between">
        <span>Total : </span>
        <span className="font-bold">
          {price * range - price * range * 0.08}$
        </span>
      </div>
      <button
        className="flex items-center gap-1"
        onClick={() => {
          handleDelete(_id);
        }}
      >
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M23 4C23 2.34315 21.6569 1 20 1H4C2.34315 1 1 2.34315 1 4V20C1 21.6569 2.34315 23 4 23H20C21.6569 23 23 21.6569 23 20V4ZM21 4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V4Z"
            fill="#0F0F0F"
          />
          <path
            d="M16 11C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H8C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11H16Z"
            fill="#0F0F0F"
          />
        </svg>
        Xoá
      </button>
    </div>
  );
};

export default CardRoom;
