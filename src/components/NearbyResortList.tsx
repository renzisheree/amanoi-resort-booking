import { Swiper, SwiperSlide } from "swiper/react";

import ListResort from "../data/nearbyResortList.json";
import NearbyResortCard from "./NearbyResortCard";

const NearbyResortList = () => {
  return (
    <div className="swiper-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {ListResort.length > 0 &&
          ListResort.map((item) => (
            <SwiperSlide key={item.id}>
              <NearbyResortCard nearbyResortItem={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default NearbyResortList;
