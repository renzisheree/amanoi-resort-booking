import { useEffect, useState } from "react";
import RoomSearchCard from "./RoomSearchCard";
import { useLocation } from "react-router-dom";
interface RoomProps {
  name: string;
  _id: string;
  amenities: string[];

  imageCover: string[];

  imageThumbnail: string[];

  price: number;
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
    window.location.reload();
  }, [addedRooms]);

  const location = useLocation();
  const { data } = location.state;

  if (!data) return null;

  const isRoomAlreadyAdded = (roomId: string) => {
    const existingRooms = localStorage.getItem("rooms");
    if (existingRooms) {
      const parsedRooms = JSON.parse(existingRooms);
      return roomId in parsedRooms;
    }
    return false;
  };

  const handleAdd = (room: RoomProps) => {
    setAddedRooms((prevRooms) => ({
      ...prevRooms,
      [room._id]: room,
    }));
  };

  return (
    <div>
      <div className=" mx-auto max-w-[1200px] p-10  flex flex-col justify-start items-start gap-10  rounded-3xl">
        <h1 className="text-3xl   text-center p-5 italic">
          Here's your best option{" "}
        </h1>
        {data.data.items.map((item: RoomProps, index: number) => (
          <div
            className="flex mt-5   w-full bg-white justify-evenly items-center p-10 gap-5 shadow-lg "
            key={index}
          >
            <div className="max-w-[300px] ">
              <RoomSearchCard
                key={index}
                imageUrl={item.imageThumbnail}
              ></RoomSearchCard>
            </div>
            <div className="flex flex-col justify-center gap-2 items-start">
              <div className="">
                <span>{item.name}</span>
              </div>

              <div className="font-body font-bold">
                <span>{item.price}$</span>
              </div>

              <a href="" className="font-medium">
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
                  <h1 className="font-medium italic">Bao gồm bữa sáng</h1>
                </span>

                <span className="flex justify-center items-center gap-5">
                  <button className="px-5 py-2 bg-[#404040] rounded-lg text-white">
                    Book now
                  </button>
                  <button
                    onClick={() => {
                      handleAdd(item);
                    }}
                    className="px-5 py-2 bg-[#404040] rounded-lg text-white"
                  >
                    {" "}
                    {isRoomAlreadyAdded(item._id) ? (
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.5 12.5L10.167 17L19.5 8"
                          stroke="#000000"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    ) : (
                      "Add"
                    )}
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

export default SelectRoom;
