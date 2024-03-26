import { Swiper, SwiperSlide } from "swiper/react";
import listImage from "../data/listImage.json";
import ViewCard from "../components/ViewCard";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import LoadingSkeleton from "../components/loading/LoadingSkeleton";
import AOS from "aos";
import { Button, Modal } from "antd";

import { ReactNode, useEffect, useState } from "react";
import CalendarModal from "../components/CalendarModal";

interface amenProps {
  name: string;
  path: string;
}

interface RoomDetailDataProps {
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

const RoomDetailPage = () => {
  useEffect(() => {
    AOS.init();
  });
  const [open, setOpen] = useState(false);

  const { path, slug } = useParams();

  const { data, loading } = useAxios(
    `https://api.badenn.me/rooms/${path}/${slug}`
  );
  if (!data) return null;

  const roomDetailData: RoomDetailDataProps = {
    name: data.name,
    _id: data._id,
    amenities: data.amenities,
    imageCover: data.imageCover,
    imageThumbnail: data.imageThumbnail,
    price: data.price,
    path: data.path,
    slug: data.slug,
    roomType: [],
  };
  const { imageThumbnail, imageCover, description, amenities, roomType } = data;

  const { inclusion } = roomType;

  return (
    <div className="p-10">
      {loading && (
        <div
          data-aos="fade-up"
          className="flex flex-col items-center justify-center gap-10 "
        >
          <div className="w-10 h-10 mx-auto mt-20 mb-10 border-4 border-t-4 border-red-500 rounded-full border-t-transparent animate-spin"></div>

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
      <h1 data-aos="fade-up" className="py-10 text-3xl italic text-center">
        {data.name}
      </h1>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {imageThumbnail.length > 0 &&
          imageThumbnail.map((item: string, index: number) => (
            <SwiperSlide key={index}>
              <img
                data-aos="fade-up"
                className="w-[90vw] mx-auto"
                src={item}
                alt=""
              />
            </SwiperSlide>
          ))}
      </Swiper>
      <div
        data-aos="fade-up"
        className="flex items-center justify-start gap-10 p-10 "
      >
        <img src={imageCover[0]} alt="" />
        <img src={imageCover[1]} alt="" />

        <span className="flex flex-col gap-20">
          <p className="text-sm italic">{description}</p>

          <Button
            onClick={() => {
              setOpen(true);
            }}
            className=" rounded-lg mx-auto w-[50%]"
          >
            Đặt phòng
          </Button>
        </span>
      </div>

      <div data-aos="fade-up" className="">
        <h1 className="text-3xl italic text-center">
          {" "}
          Gói lưu chú của bạn bao gồm
        </h1>

        <ul className="grid grid-cols-3 gap-10 p-20 mt-10 list-disc bg-white ">
          {" "}
          {inclusion.map((item: ReactNode, index: number) => (
            <li key={index}> {item}</li>
          ))}
        </ul>
      </div>
      <div data-aos="fade-up" className="mt-10 ">
        <h1 className="text-3xl italic text-center"> Tiện nghi</h1>

        <ul className="grid grid-cols-3 gap-10 p-20 mt-10 list-disc bg-white ">
          {amenities.map((item: amenProps, index: number) => (
            <li key={index}> {item.name}</li>
          ))}
        </ul>
      </div>
      <div data-aos="fade-up" className="">
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
      <Modal
        title="Booking"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1280}
      >
        <CalendarModal roomData={roomDetailData} />
      </Modal>
    </div>
  );
};

export default RoomDetailPage;
