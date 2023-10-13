import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import listImage from "../data/listImage.json";
import { useNavigate } from "react-router-dom";
import ViewCard from "../components/ViewCard";

const RoomDetailPage = () => {
  const navigate = useNavigate();
  return (
    <div className="p-10">
      <h1 className="text-3xl italic text-center py-10">Room type</h1>
      <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
        {listImage.length > 0 &&
          listImage.map((item) => (
            <SwiperSlide key={item.id}>
              <img className="w-[90vw] mx-auto" src={item.src} alt="" />
            </SwiperSlide>
          ))}
      </Swiper>
      <div className=" flex justify-start items-center gap-10 p-10">
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-02/Amanoi_5-Bed-Bay-Residence-1.jpg?itok=qp0zNRIk  "
          alt=""
        />
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-02/Amanoi_5-Bed-Bay-Residence-1.jpg?itok=qp0zNRIk"
          alt=""
        />

        <span className="flex flex-col gap-20">
          <p className="text-sm italic">
            Với diện tích trên 1.000 mét vuông (10.764 bộ vuông) với hướng nhìn
            tuyệt đẹp ra Vịnh Vĩnh Hy, Biệt thự năm phòng ngủ hướng vịnh của
            Amanoi tọa lạc ngay gần bãi biển và kết hợp các phòng nghỉ xung
            quanh hồ bơi riêng. Lý tưởng cho các nhóm và gia đình, biệt thự cung
            cấp nhiều không gian và sự thoải mái tuyệt vời, cho phép khách tụ
            họp với nhau ở một địa điểm không thể nào quên. Trong khi hồ bơi vô
            cực là trung tâm của biệt thự, các khu vực để giải trí bao gồm một
            phòng ăn và sàn gỗ rộng. Dịch vụ quản gia 24/7 đảm bảo cho kỳ nghỉ
            suôn sẻ và bao gồm việc chuẩn bị các món ăn Việt Nam hoặc các món Âu
            tươi ngon trong khu bếp riêng. Trong khi được xây dựng dựa trên chủ
            đề là sự kết nối và gắn kết, biệt thự cũng mang đến sự riêng tư, với
            các phòng ngủ cỡ King riêng biệt nằm trong không gian riêng.
          </p>

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
      list-disc
      <div className="">
        <h1 className="text-3xl text-center italic">
          {" "}
          Gói lưu chú của bạn bao gồm
        </h1>

        <ul className="grid grid-cols-3 gap-10 list-disc	p-20  mt-10 bg-white ">
          <li>Quầy bar cá nhân</li>
          <li>Đầu bếp riêng phục vụ cho bữa tối BBQ tại biệt thự</li>

          <li>Xe điện riêng của biệt thự</li>
          <li>
            Các môn thể thao dưới nước miễn phí bao gồm chèo thuyền kayak,
            thuyền Hobie cat, lướt ván đứng SUP, lặn với ống thở và lướt ván
            buồm
          </li>
          <li>
            Xe riêng đưa đón hai chiều giữa sân bay Cam Ranh (CXR) và Amanoi
          </li>
          <li>
            Miễn phí các hoạt động dành cho trẻ em như câu cá, lớp học nấu ăn,
            nghệ thuật và thủ công và chiếu phim buổi tối
          </li>
        </ul>
      </div>
      <div className=" mt-10">
        <h1 className="text-3xl text-center italic"> Tiện nghi</h1>

        <ul className="grid grid-cols-3 gap-10 list-disc	p-20  mt-10 bg-white ">
          <li>Tầm nhìn hướng ra vịnh Vĩnh Hy </li>
          <li>Phòng khách và phòng ăn</li>

          <li>Xe điện riêng của biệt thự</li>
          <li>Hiên tắm nắng bằng gỗ rộng rãi</li>
          <li>Năm phòng ngủ trong các căn pavilion riêng với giường cỡ king</li>
          <li>Dịch vụ quản gia cá nhân 24/7</li>
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
