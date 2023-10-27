import eventData from "../data/eventData.json";
import { Swiper, SwiperSlide } from "swiper/react";
const EventPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center flex-col">
        <h1 className="">Tiệc cưới và sự kiện tại Amanoi</h1>

        <div className="w-full flex flex-col items-center  ">
          <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
            {eventData.length > 0 &&
              eventData.map((item) => (
                <SwiperSlide key={item.id}>
                  <img src={item.src} alt="img" />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className="w-[40%] text-center">
          <h1 className="text-3xl italic">
            Lựa chọn tuyệt vời cho sự kiện của bạn
          </h1>

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

        <div className=" flex items-start gap-10 justify-center w-full italic pb-10">
          <img
            src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-03/Amanoi_Gallery_18.jpg?itok=3vbmL2Xp"
            alt=""
          />
          <img
            src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2022-07/Amanoi_Restaurant_Portrait.jpg?itok=D-KnTP5b"
            alt=""
          />
          <span className="flex flex-col gap-1">
            <h1 className="text-xl font-medium italic ">Nhà hàng chính</h1>
            <p className="text-sm ">
              Tọa lạc trên đỉnh đồi, nhà hàng chính phục vụ ba bữa ăn hàng ngày
              với cả ẩm thực Việt Nam và quốc tế. Với thực đơn tận dụng tối đa
              các nguyên liệu có sẵn theo mùa và hải sản đánh bắt tươi sống từ
              các tàu đánh cá địa phương. Nhà hàng chính bao gồm cả khu vực
              trong nhà và khu vực ngoài trời với tầm nhìn bao quát vịnh biển
              tuyệt đẹp.
            </p>{" "}
            <h1 className="text-xl font-medium italic ">Nhà hàng Beach Club</h1>
            <p className="text-sm ">
              Tọa lạc ngay bên bờ cát trắng và chỉ cách biển vài bước chân, nhà
              hàng Beach Club được bao quanh bởi những tảng đá granit lớn với
              khu vực dùng bữa thoáng đãng cạnh sân hiên nhìn ra hồ bơi. Nhà
              hàng mở cửa phục vụ bữa trưa cũng như đồ uống và đồ ăn nhẹ bên hồ
              bơi ban ngày, với các món hải sản đặc biệt tươi ngon rất đáng để
              thưởng thức.
            </p>{" "}
            <h1 className="text-xl font-medium italic ">Quầy Bar</h1>
            <p className="text-sm ">
              Nhìn ra Vườn Quốc gia Núi Chúa và thuộc khu sảnh chính Central
              Pavilion, quầy bar tại Amanoi là không gian thư giãn lấy cảm hứng
              thiết kế từ các quán trà truyền thống của Việt Nam. Được trang trí
              với những bức hình nghệ thuật và hướng nhìn ra các ngọn núi xa
              xăm, đây là không gian để thư giãn và ngắm cảnh trên những chiếc
              ghế tựa sofa bọc da và nhâm nhi những ly cocktail.
            </p>{" "}
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventPage;
