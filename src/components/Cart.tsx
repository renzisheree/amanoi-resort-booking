import CardRoom from "./CardRoom";
import dayjs from "dayjs";

interface cartProps {
  startDate: string;
  endDate: string;
  children: number;
  adult: number;
}

interface roomProps {
  _id: string;
  name: string;
  range: number;
  price: number;
  fee: number;
}

const Cart: React.FC<cartProps> = ({ startDate, endDate, children, adult }) => {
  const localStorageData = localStorage.getItem("rooms");
  const data = localStorageData
    ? Object.values(JSON.parse(localStorageData))
    : [];
  console.log(data);
  const dateStr = startDate;
  const [day, month, year] = dateStr.split("-");

  const newStartDate = `${month}-${day}-${year}`;

  const dateStr1 = endDate;
  const [day1, month1, year1] = dateStr1.split("-");

  const newEndDate = `${month1}-${day1}-${year1}`;

  const range = dayjs(newEndDate).diff(newStartDate, "day");

  return (
    <div className="flex ">
      <div className="">
        <div className="">
          <h1>Thông tin lưu trú của bạn</h1>

          <div className="">
            <span>
              Nhận phòng <br />
              Sau 15:00
            </span>
            <span>
              Trả phòng <br />
              Sau 12:00
            </span>
          </div>
          <hr />
        </div>
        {data.map((item: roomProps, index: number) => (
          <div key={index} className="shadow-lg mt-3">
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
      <button>Thanh toán</button>
    </div>
  );
};

export default Cart;
