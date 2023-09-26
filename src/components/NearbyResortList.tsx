import { Swiper, SwiperSlide } from "swiper/react";

import ListResort from "../data/nearbyResortList.json";
import NearbyResortCard from "./NearbyResortCard";

const NearbyResortList = () => {
  return (
    <div className="swiper-list2">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {ListResort.length > 0 &&
          ListResort.map((item) => (
            <SwiperSlide key={item.id}>
              <NearbyResortCard nearbyResortItem={item} />
            </SwiperSlide>
          ))}
      </Swiper>
      <hr className=" border-gray-500 border-b-1 w-[80vw] mx-auto mt-10 " />
    </div>
  );
};

export default NearbyResortList;
