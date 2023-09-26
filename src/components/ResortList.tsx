import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ListResort from "../data/listResort.json";
import ResortCard from "./ResortCard";
import "swiper/scss";

const ResortList: React.FC = () => {
  return (
    <div className="swiper-list">
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {ListResort.length > 0 &&
          ListResort.map((item) => (
            <SwiperSlide key={item.id}>
              <ResortCard resortItem={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default ResortList;
