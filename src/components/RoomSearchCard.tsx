import { Swiper, SwiperSlide } from "swiper/react";

interface RoomSearchCardProps {
  imageUrl: string[];
}

const RoomSearchCard: React.FC<RoomSearchCardProps> = ({
  imageUrl,
}: RoomSearchCardProps) => {
  return (
    <div className="shadow-xl rounded-3xl">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {imageUrl.map((thumbnailUrl, i) => (
          <SwiperSlide key={`img-${i}`}>
            <img src={thumbnailUrl} alt="" className="rounded-3xl " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default RoomSearchCard;
