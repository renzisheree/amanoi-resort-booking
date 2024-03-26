import CardRoom from "./CardRoom";
import dayjs from "dayjs";

interface cartProps {
  startDate: string;
  endDate: string;
  children: number;
  adult: number;
}
interface RoomProps {
  name: string;
  _id: string;
  amenities: string[];
  imageCover: string[];
  imageThumbnail: string[];
  price: number;
  path: string;
  slug: string;
  roomType: [];
  fee: number;
}

const Cart: React.FC<cartProps> = ({ startDate, endDate, children, adult }) => {
  const localStorageData = localStorage.getItem("rooms");
  const data = localStorageData
    ? Object.values(JSON.parse(localStorageData))
    : [];
  const dateStr = startDate;
  const [day, month, year] = dateStr.split("-");

  const newStartDate = `${month}-${day}-${year}`;

  const dateStr1 = endDate;
  const [day1, month1, year1] = dateStr1.split("-");

  const newEndDate = `${month1}-${day1}-${year1}`;

  const range = dayjs(newEndDate).diff(newStartDate, "day");

  return (
    <div className="flex flex-col border-[1px] shadow-md border-gray-300 p-5 ">
      <div className="">
        <div className="flex flex-col gap-3">
          <h1 className="text-lg">Thông tin lưu trú của bạn</h1>

          <div className="flex gap-10">
            <div className="">
              {" "}
              <span className="font-bold">Nhận phòng </span> <br />
              Sau 15:00
            </div>
            <div className="">
              {" "}
              <span className="font-bold">Trả phòng </span>
              <br />
              Sau 12:00
            </div>
          </div>
          <hr />
        </div>
        {data.map((item: RoomProps, index: number) => (
          <div key={index} className="mt-3 shadow-lg">
            <CardRoom
              key={index}
              startDate={startDate}
              endDate={endDate}
              children={children}
              adult={adult}
              roomName={item.name}
              range={range}
              price={item.price}
              fee={item.fee}
              _id={item._id}
            ></CardRoom>
          </div>
        ))}
      </div>{" "}
      <button className="bg-[#3B504C] rounded-full p-2 text-white mt-2">
        Thanh toán
      </button>
    </div>
  );
};

export default Cart;
