import { useState, useEffect } from "react";

// import useAxios from "../hooks/useAxios";
// import useAxiosSecond from "../hooks/useAxiosSecond";
import RoomCard from "../components/RoomCard";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";
import useDebounce from "../hooks/useDebound";
import axios from "axios";
import useAxios from "../hooks/useAxios";

// interface Item {
//   id: string;
//   name: string;
//   path: string;
// }

const RoomListPage = () => {
  const [filter, setFilter] = useState("");
  const filterDebound = useDebounce(filter, 700);
  const [data1, setData1] = useState();
  const [pathURL, setPath] = useState("residencies");

  const { data } = useAxios("http://localhost:3000/room-types/all");
  useEffect(() => {
    axios
      .post(`http://localhost:3000/rooms/search?name=${filterDebound}`)
      .then((response) => {
        setData1(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [filterDebound]);

  const loading = !data1;
  if (!data) return;

  const { items: item1 } = data;
  if (!data1) return;

  const { items: rooms } = data1;

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };
  // const [url, setUrl] = useState(`http://localhost:3000/rooms/${pathURL}`);
  // useEffect(() => {
  //   if (filterDebound) {
  //     setUrl(`http://localhost:3000/rooms/search?name=${filterDebound}`);
  //   }
  // }, [filterDebound]);

  // if (!dataSecond) return null;
  // const { rooms } = dataSecond;

  // const { path } = dataSecond;
  // const roomsByType = {};

  // rooms.forEach((room) => {
  //   const { path } = room.roomType;

  //   if (!roomsByType[path]) {
  //     roomsByType[path] = [];
  //   }

  //   roomsByType[path].push(room);
  // });
  return (
    <div className="p-10">
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent border-t-4 mx-auto animate-spin mb-10 mt-20"></div>
      )}
      {loading && (
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex items-center justify-center gap-10">
            {" "}
            <LoadingSkeleton
              width="45vw"
              height="400px"
              radius="8px"
              className="mt-5"
            />
            <LoadingSkeleton
              width="45vw"
              height="400px"
              radius="8px"
              className="mt-5"
            />
          </div>

          <div className="flex items-center justify-center gap-10">
            {" "}
            <LoadingSkeleton width="45vw" height="30px" radius="8px" />
            <LoadingSkeleton width="45vw" height="30px" radius="8px" />
          </div>

          <div className="flex items-center justify-center gap-10">
            {" "}
            <LoadingSkeleton width="45vw" height="100px" radius="8px" />
            <LoadingSkeleton width="45vw" height="100px" radius="8px" />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-10 items-center justify-center">
        <h1 className="text-3xl text-center italic">Phòng ở Amanoi</h1>
        {/* <div>
          {Object.entries(roomsByType).map(([type, rooms]) => (
            <div key={type}>
              <h2>{type}</h2>

              <div className="grid grid-cols-2 gap-20">
                {rooms.map((room) => (
                  <RoomCard
                    cardImg={room.imageThumbnail[0]}
                    cardTitle={room.name}
                    button={false}
                    cardParagraph={room.description}
                    slug={room.slug}
                    path={room.roomType.path}
                  />
                ))}
              </div>
            </div>
          ))}
        </div> */}
        <div className="">
          <ul className="roomlist flex items-center justify-center gap-10 cursor-pointer">
            {item1.map((item: Item) => (
              <li
                key={item.id}
                onClick={() => {
                  setPath(item.path);
                }}
                style={{
                  fontWeight: pathURL === item.path ? "bold" : "normal",
                }}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm italic text-center w-[60vw]">
          Được thiết kế từ những mái nhà uốn lượn ẩn hiện trong rừng cây và
          những chất liệu thân thiện với tự nhiên, các Pavilion và Villa của
          Amanoi hòa mình giữa khung cảnh thiên nhiên tuyệt đẹp. Với việc tiếp
          cận các liệu trình trị liệu toàn diện của Việt Nam, tất cả tạo nên nét
          duyên dáng và giản đơn đầy nghệ thuật của phong cách thiết kế Việt
          Nam, bao quanh bởi rừng rậm nguyên sơ và làn nước trong vắt của Vịnh
          Vĩnh Hy, chỉ chờ bạn khám phá.
        </p>
      </div>

      <div className="flex my-10 bg-white">
        <div className="flex-1 ">
          <input
            type="text"
            className="w-full p-4 bg-transparent outline-none border-2"
            placeholder="Type here to search.."
            onChange={handleSearchChange}
          />
        </div>
        <button className="p-4 bg-primary text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-2 gap-20">
        {rooms.map((dataSecond) => {
          if (pathURL === dataSecond.roomType.path) {
            return (
              <RoomCard
                cardImg={dataSecond.imageThumbnail[0]}
                cardTitle={dataSecond.name}
                button={false}
                cardParagraph={dataSecond.description}
                slug={dataSecond.slug}
                path={dataSecond.roomType.path}
              ></RoomCard>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RoomListPage;
