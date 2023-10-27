import { useState, useEffect } from "react";
// import ViewCard from "../components/ViewCard";
// import { useNavigate } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import useAxiosSecond from "../hooks/useAxiosSecond";
import RoomCard from "../components/RoomCard";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";

interface Item {
  id: string;
  name: string;
  path: string;
}
interface DataSecond {
  id: string;
  name: string;
  path: string;
  description: string;
  slug: string;

  imageThumbnail: string[];
}
const RoomListPage = () => {
  // const navigate = useNavigate();

  const [pathURL, setPath] = useState("residencies");

  const [url, setUrl] = useState(`http://localhost:3000/rooms/${pathURL}`);
  const { data, loading, error } = useAxios(
    "http://localhost:3000/room-types/all"
  );
  const { dataSecond, loadingSecond } = useAxiosSecond(url);
  useEffect(() => {
    setUrl(`http://localhost:3000/rooms/${pathURL}`);
  }, [pathURL]);
  if (!dataSecond) return null;
  const { rooms } = dataSecond;

  const { path } = dataSecond;

  console.log(data);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!data) return null;

  const { items } = data;

  return (
    <div className="p-10">
      {loadingSecond && (
        <div className="w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent border-t-4 mx-auto animate-spin mb-10 mt-20"></div>
      )}
      {loadingSecond && (
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

        <div className="">
          <ul className="roomlist flex items-center justify-center gap-10 cursor-pointer">
            {items.map((item: Item) => (
              <li
                key={item.id}
                onClick={() => {
                  setPath(item.path);
                  console.log(item.path);
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

      <div className="grid grid-cols-2 gap-20">
        {rooms.map((dataSecond: DataSecond) => (
          <RoomCard
            cardImg={dataSecond.imageThumbnail[0]}
            cardTitle={dataSecond.name}
            button={false}
            cardParagraph={dataSecond.description}
            slug={dataSecond.slug}
            path={path}
          ></RoomCard>
        ))}
      </div>
    </div>
  );
};

export default RoomListPage;
