import { useLocation, useNavigate } from "react-router-dom";
import BookingBar from "../components/BookingBar";
import dayjs from "dayjs";
import { useState, useEffect } from "react";
import RoomSearchCard from "../components/RoomSearchCard";
import CardRoom from "../components/CardRoom";

const BookingStep2 = () => {
  const location = useLocation();
  const { values } = location.state;
  console.log(values);

  return (
    <div>
      <div className="fixed"> </div>
      <section className=" w-[100%]  relative flex flex-col h-[350px] bg-[url('https://be-cms-api.synxis.com/assets/chain/16840/hotel/62469/fileStorage/image/BE_Amanoi.png')] bg-cover bg-no-repeat bg-center">
        <div className="flex-grow"></div>
        <div className="w-[40%] flex flex-col gap-3 h-[200px]  bottom-0 left-0 overflow-hidden opacity-70 bg-[#DEDFDB] p-5">
          <span className="text-xl ">Amanoi</span>
          <span className="flex gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 7H7M6 10H7M11 10H12M11 13H12M6 13H7M11 7H12M7 21V18C7 16.8954 7.89543 16 9 16C10.1046 16 11 16.8954 11 18V21H7ZM7 21H3V4.6C3 4.03995 3 3.75992 3.10899 3.54601C3.20487 3.35785 3.35785 3.20487 3.54601 3.10899C3.75992 3 4.03995 3 4.6 3H13.4C13.9601 3 14.2401 3 14.454 3.10899C14.6422 3.20487 14.7951 3.35785 14.891 3.54601C15 3.75992 15 4.03995 15 4.6V9M19.7 13.5C19.7 14.3284 19.0284 15 18.2 15C17.3716 15 16.7 14.3284 16.7 13.5C16.7 12.6716 17.3716 12 18.2 12C19.0284 12 19.7 12.6716 19.7 13.5ZM21.5 21V20.5C21.5 19.1193 20.3807 18 19 18H17.5C16.1193 18 15 19.1193 15 20.5V21H21.5Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Vinh Hy Village, Vinh Hai Commune, Ninh Hai District, Ninh Thuan
            Province, Việt Nam, 00000
          </span>
          <span className="flex gap-1">
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
                d="M6.00745 3.40686C7.68752 1.72679 10.5227 1.85451 11.6925 3.95063L12.3415 5.11356C13.1054 6.48238 12.7799 8.20946 11.6616 9.34143C11.6467 9.36184 11.5677 9.47677 11.5579 9.67758C11.5454 9.93391 11.6364 10.5267 12.5548 11.4451C13.4729 12.3632 14.0656 12.4545 14.3221 12.442C14.5231 12.4322 14.6381 12.3533 14.6585 12.3383C15.7905 11.2201 17.5176 10.8945 18.8864 11.6584L20.0493 12.3075C22.1454 13.4773 22.2731 16.3124 20.5931 17.9925C19.6944 18.8911 18.4995 19.6896 17.0953 19.7429C15.0144 19.8218 11.5591 19.2844 8.13735 15.8626C4.71556 12.4408 4.17818 8.98556 4.25706 6.90463C4.3103 5.50044 5.10879 4.30552 6.00745 3.40686ZM10.3827 4.68163C9.78363 3.60828 8.17394 3.36169 7.06811 4.46752C6.29276 5.24287 5.7887 6.09868 5.75599 6.96146C5.6902 8.6968 6.11864 11.7226 9.19801 14.8019C12.2774 17.8813 15.3031 18.3097 17.0385 18.2439C17.9013 18.2112 18.7571 17.7072 19.5324 16.9318C20.6382 15.826 20.3916 14.2163 19.3183 13.6173L18.1554 12.9683C17.432 12.5645 16.4158 12.7023 15.7025 13.4156L15.7023 13.4158C15.6322 13.4858 15.1864 13.9018 14.395 13.9403C13.5847 13.9797 12.604 13.6156 11.4942 12.5058C10.384 11.3956 10.02 10.4146 10.0597 9.60423C10.0985 8.81271 10.5147 8.36711 10.5843 8.29746L10.5844 8.29743C11.2977 7.58411 11.4354 6.56797 11.0317 5.84456L10.3827 4.68163Z"
                fill="#1C274C"
              />
            </svg>{" "}
            84-259-3770777
          </span>
          <span className="flex gap-1">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.0498 7.0498H7.0598M10.5118 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V10.5118C3 11.2455 3 11.6124 3.08289 11.9577C3.15638 12.2638 3.27759 12.5564 3.44208 12.8249C3.6276 13.1276 3.88703 13.387 4.40589 13.9059L9.10589 18.6059C10.2939 19.7939 10.888 20.388 11.5729 20.6105C12.1755 20.8063 12.8245 20.8063 13.4271 20.6105C14.112 20.388 14.7061 19.7939 15.8941 18.6059L18.6059 15.8941C19.7939 14.7061 20.388 14.112 20.6105 13.4271C20.8063 12.8245 20.8063 12.1755 20.6105 11.5729C20.388 10.888 19.7939 10.2939 18.6059 9.10589L13.9059 4.40589C13.387 3.88703 13.1276 3.6276 12.8249 3.44208C12.5564 3.27759 12.2638 3.15638 11.9577 3.08289C11.6124 3 11.2455 3 10.5118 3ZM7.5498 7.0498C7.5498 7.32595 7.32595 7.5498 7.0498 7.5498C6.77366 7.5498 6.5498 7.32595 6.5498 7.0498C6.5498 6.77366 6.77366 6.5498 7.0498 6.5498C7.32595 6.5498 7.5498 6.77366 7.5498 7.0498Z"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            https://www.aman.com/resorts/amanoi
          </span>
        </div>
      </section>
      <hr />
      <BookingBar></BookingBar>

      <div className="w-[100%] flex">
        <div className="w-[70%]">
          <SelectRoom />
        </div>
        <div className="w-[30%] bg-white p-10 m-10">
          {" "}
          <Cart
            startDate={values.startDate}
            endDate={values.endDate}
            adult={values.adult}
            children={values.children}
          />
        </div>
      </div>
    </div>
  );
};

interface cartProps {
  startDate: string;
  endDate: string;
  children: number;
  adult: number;
}

interface roomProps {
  name: string;
  range: number;
  price: number;
  fee: number;
  _id: string;
}

const Cart: React.FC<cartProps> = ({ startDate, endDate, children, adult }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/reservations", { replace: true });
  };
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
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="">
        <div className="">
          <h1 className="text-xl ">Thông tin lưu trú của bạn</h1>

          <div className="flex justify-start gap-10">
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
          <div key={index} className="mt-3 shadow-lg">
            <CardRoom
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
      </div>
      {data != null && (
        <button
          onClick={() => {
            // handleAdd(item);
            handleNavigation();
          }}
          className="px-5 py-2 bg-[#F3EEE7] rounded-full "
        >
          Book now
        </button>
      )}
    </div>
  );
};
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
}

const SelectRoom = () => {
  const [addedRooms, setAddedRooms] = useState<{ [key: string]: RoomProps }>(
    {}
  );
  useEffect(() => {
    const rooms = localStorage.getItem("rooms");
    if (rooms) {
      setAddedRooms(JSON.parse(rooms));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("rooms", JSON.stringify(addedRooms));
  }, [addedRooms]);

  const location = useLocation();
  const { data } = location.state;
  const navigate = useNavigate();

  if (!data) return null;
  const handleAdd = (room: RoomProps) => {
    setAddedRooms((prevRooms) => ({
      ...prevRooms,
      [room._id]: room,
    }));
  };
  return (
    <div>
      <div className=" mx-auto max-w-[1200px] p-10  flex flex-col justify-start items-start gap-10  rounded-3xl">
        <h1 className="p-5 text-3xl italic text-center">
          Here's your best option{" "}
        </h1>
        {data.data.items.map((item: RoomProps, index: number) => (
          <div
            className="flex items-center w-full gap-5 p-10 mt-5 bg-white shadow-lg justify-evenly "
            key={index}
          >
            <div className="max-w-[400px] ">
              <RoomSearchCard
                key={index}
                imageUrl={item.imageThumbnail}
              ></RoomSearchCard>
            </div>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="">
                <span className="text-2xl font-medium">{item.name}</span>
              </div>

              <div className="font-bold font-body">
                <span>{item.price}$</span>
              </div>

              <a
                href=""
                className="underline"
                onClick={() => {
                  navigate(`/details/${item.roomType.path}/${item.slug}`);
                }}
              >
                Chi tiết phòng :
              </a>

              <h1> Standard Daily Rate</h1>

              <div className="flex items-center justify-around gap-5 p-5">
                <span className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-cup-hot"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M.5 6a.5.5 0 0 0-.488.608l1.652 7.434A2.5 2.5 0 0 0 4.104 16h5.792a2.5 2.5 0 0 0 2.44-1.958l.131-.59a3 3 0 0 0 1.3-5.854l.221-.99A.5.5 0 0 0 13.5 6H.5ZM13 12.5a2.01 2.01 0 0 1-.316-.025l.867-3.898A2.001 2.001 0 0 1 13 12.5ZM2.64 13.825 1.123 7h11.754l-1.517 6.825A1.5 1.5 0 0 1 9.896 15H4.104a1.5 1.5 0 0 1-1.464-1.175Z"
                    />
                    <path d="m4.4.8-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 3.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 3.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 3 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 4.4.8Zm3 0-.003.004-.014.019a4.167 4.167 0 0 0-.204.31 2.327 2.327 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.31 3.31 0 0 1-.202.388 5.444 5.444 0 0 1-.253.382l-.018.025-.005.008-.002.002A.5.5 0 0 1 6.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 6.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 6 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 7.4.8Zm3 0-.003.004-.014.019a4.077 4.077 0 0 0-.204.31 2.337 2.337 0 0 0-.141.267c-.026.06-.034.092-.037.103v.004a.593.593 0 0 0 .091.248c.075.133.178.272.308.445l.01.012c.118.158.26.347.37.543.112.2.22.455.22.745 0 .188-.065.368-.119.494a3.198 3.198 0 0 1-.202.388 5.385 5.385 0 0 1-.252.382l-.019.025-.005.008-.002.002A.5.5 0 0 1 9.6 4.2l.003-.004.014-.019a4.149 4.149 0 0 0 .204-.31 2.06 2.06 0 0 0 .141-.267c.026-.06.034-.092.037-.103a.593.593 0 0 0-.09-.252A4.334 4.334 0 0 0 9.6 2.8l-.01-.012a5.099 5.099 0 0 1-.37-.543A1.53 1.53 0 0 1 9 1.5c0-.188.065-.368.119-.494.059-.138.134-.274.202-.388a5.446 5.446 0 0 1 .253-.382l.025-.035A.5.5 0 0 1 10.4.8Z" />
                  </svg>
                  <h1 className="italic font-medium">Bao gồm bữa sáng</h1>
                </span>

                <span className="flex items-center justify-center gap-5">
                  <button
                    onClick={() => {
                      handleAdd(item);
                      window.location.reload();
                    }}
                    className="px-10 py-2 bg-[#3B504C] rounded-full text-white"
                  >
                    Add
                  </button>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingStep2;
