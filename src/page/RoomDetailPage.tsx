import { Swiper, SwiperSlide } from "swiper/react";
import listImage from "../data/listImage.json";
import { useNavigate } from "react-router-dom";
import ViewCard from "../components/ViewCard";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";

interface amenProps {
  name: string;
  path: string;
}
const RoomDetailPage = () => {
  const { path, slug } = useParams();
  const navigate = useNavigate();

  const { data, loading } = useAxios(
    `http://localhost:3000/rooms/${path}/${slug}`
  );
  if (!data) return null;
  console.log(data);
  const { imageThumbnail, imageCover, description, amenities, roomType } = data;

  const { inclusion } = roomType;
  return (
    <div className="p-10">
      {loading && (
        <div className=" flex flex-col justify-center items-center gap-10">
          <div className="w-10 h-10 rounded-full border-4 border-red-500 border-t-transparent border-t-4 mx-auto animate-spin mb-10 mt-20"></div>

          <LoadingSkeleton
            height="5vh"
            width="80vw"
            radius="20px"
          ></LoadingSkeleton>
          <LoadingSkeleton
            height="50vh"
            width="80vw"
            radius="20px"
          ></LoadingSkeleton>
        </div>
      )}
      <h1 className="text-3xl italic text-center py-10">{data.name}</h1>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {imageThumbnail.length > 0 &&
          imageThumbnail.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <img className="w-[90vw] mx-auto" src={item} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className=" flex justify-start items-center gap-10 p-10">
        <img src={imageCover[0]} alt="" />
        <img src={imageCover[1]} alt="" />

        <span className="flex flex-col gap-20">
          <p className="text-sm italic">{description}</p>

          <a
            href=""
            onClick={() => {
              navigate("/booking");
            }}
            className="italic text-sm underline"
          >
            Đặt phòng
          </a>
        </span>
      </div>

      <div className="">
        <h1 className="text-3xl text-center italic">
          {" "}
          Gói lưu chú của bạn bao gồm
        </h1>

        <ul className="grid grid-cols-3 gap-10 list-disc	p-20  mt-10 bg-white ">
          {" "}
          {inclusion.map((item: amenProps, index: number) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
      <div className=" mt-10">
        <h1 className="text-3xl text-center italic"> Tiện nghi</h1>

        <ul className="grid grid-cols-3 gap-10 list-disc	p-20  mt-10 bg-white ">
          {amenities.map((item: amenProps, index: number) => (
            <li key={index}> {item.name}</li>
          ))}
        </ul>
      </div>
      <div className="">
        {" "}
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {listImage.length > 0 &&
            listImage.map((item) => (
              <SwiperSlide key={item.id}>
                <ViewCard
                  cardImg="https://images.unsplash.com/photo-1695048987437-488232574ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
                  cardType="Resort"
                  cardTitle="Biệt thự 4 phòng ngủ"
                  button={false}
                  slide={3}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default RoomDetailPage;
