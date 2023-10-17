import React from "react";
import eventData from "../data/eventData.json";
import { Swiper, SwiperSlide } from "swiper/react";
const EventPage = () => {
  return (
    <div>
      <div className="">
        <h1>Tiệc cưới và sự kiện tại Amanoi</h1>

        <div className="">
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            {eventData.length > 0 &&
              eventData.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.src} alt="img" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="">
          <h1>Lựa chọn tuyệt vời cho sự kiện của bạn</h1>

          <p>
            Được bao bọc bởi khung cảnh hoang sơ tuyệt đẹp trên đường bờ biển
            tuyệt đẹp, hồ nước phủ đầy sen và những hồ bơi trên đỉnh vách đá,
            Amanoi mang đến những bối cảnh tự nhiên độc đáo cho những đám cưới
            và lễ kỷ niệm có một không hai tại Việt Nam.
          </p>
          <p>
            Lấy cảm hứng từ kiến trúc trang nhã của Việt nam và được thiết kế
            bởi kiến trúc sư tài năng Jean-Michel Gathy, khu nghỉ dưỡng hòa hợp
            hoàn toàn với thiên nhiên, tối đa hóa tầm nhìn ra Biển Đông và Vườn
            Quốc gia Núi Chúa thuộc khu dự trự sinh quyển thế giới được UNESCO
            công nhận. Tọa lạc tại nơi thiên nhiên hùng vĩ nhưng cũng rất tiện
            lợi cho việc di chuyển- chỉ cách Sân bay Quốc tế Cam Ranh 70 phút về
            phía Nam - Amanoi là lựa chọn tuyệt vời để tổ chức các sự kiện với
            thời tiết lý tưởng của vùng biển Ninh Thuận với ánh nắng rực rỡ phần
            lớn thời gian trong năm.
          </p>

          <a href="">Gửi yêu cầu</a>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
