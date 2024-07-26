import React, { useEffect } from "react";
import HealthCareCard from "../components/HealthCareCard";
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from "aos";
import healthData from "../data/healthCareData.json";

const HealthCarePage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col gap-10 p-20">
      <h1 data-aos="fade-up" className="text-3xl italic text-center ">
        Chăm sóc sức khỏe & Tập luyện thể hình tại Amanoi
      </h1>
      <ul
        data-aos="fade-up"
        className="flex items-center justify-center gap-10 mb-5 underline "
      >
        <li>Tổng quan</li>
        <li>Wellness Villas</li>
      </ul>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-10"
      >
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {healthData.length > 0 &&
            healthData.map((item) => (
              <SwiperSlide key={item.id}>
                <img key={item.id} src={item.src} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>

        <p className="italic text-sm w-[50vw]">
          Tọa lạc bên hồ sen thanh tịnh, Aman Spa là nơi cân bằng tâm trí và cơ
          thể, nơi các chuyên gia thiết kế các chương trình chăm sóc sức khỏe cá
          nhân và cung cấp các liệu pháp Việt Nam và quốc tế trong khung cảnh
          thiên nhiên thanh bình và tuyệt đẹp. Hai Wellness Villa biệt lập đóng
          vai trò là phần mở rộng hoàn toàn riêng tư của Spa.
        </p>
      </div>
      <div
        data-aos="fade-up"
        className="flex items-start justify-center gap-10 text-sm italic"
      >
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_x_wide/public/2021-02/Forest%20Wellness%20Pool%20Villa%2C%20Amanoi%2C%20Vietnam_3.jpg?itok=SpOK15QR"
          alt=""
        />
        <div className="">
          {" "}
          <span>
            <h1 className="text-lg font-medium">
              Các Chương trình Spa của Amanoi
            </h1>

            <p>
              Các chương trình trị liệu spa nửa ngày hoặc cả ngày của Amanoi
              được thiết kế để thúc đẩy sự thay đổi sâu sắc cho cơ thể và tâm
              trí bạn. Để đảm bảo kết quả có thể thấy rõ và mang lại cảm giác
              tĩnh tâm, các chương trình được cá nhân hoá để thúc đẩy sự cân
              bằng bên trong và cải thiện sức khoẻ tổng thể để sức khoẻ được duy
              trì tốt hơn.
            </p>
          </span>
          <span>
            <h1 className="text-lg font-medium">
              Các Chương trình Spa của Amanoi
            </h1>

            <p>
              Các chương trình trị liệu spa nửa ngày hoặc cả ngày của Amanoi
              được thiết kế để thúc đẩy sự thay đổi sâu sắc cho cơ thể và tâm
              trí bạn. Để đảm bảo kết quả có thể thấy rõ và mang lại cảm giác
              tĩnh tâm, các chương trình được cá nhân hoá để thúc đẩy sự cân
              bằng bên trong và cải thiện sức khoẻ tổng thể để sức khoẻ được duy
              trì tốt hơn.
            </p>
          </span>
          <span>
            <h1 className="text-lg font-medium">
              Các Chương trình Spa của Amanoi
            </h1>

            <p>
              Các chương trình trị liệu spa nửa ngày hoặc cả ngày của Amanoi
              được thiết kế để thúc đẩy sự thay đổi sâu sắc cho cơ thể và tâm
              trí bạn. Để đảm bảo kết quả có thể thấy rõ và mang lại cảm giác
              tĩnh tâm, các chương trình được cá nhân hoá để thúc đẩy sự cân
              bằng bên trong và cải thiện sức khoẻ tổng thể để sức khoẻ được duy
              trì tốt hơn.
            </p>
          </span>
        </div>
      </div>
      <div data-aos="fade-up" className="flex items-end justify-start gap-10">
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-03/Amanoi_Wellness-Overview_3.jpg?itok=kPBB5OHK"
          alt=""
        />
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2021-03/Amanoi_Wellness-Overview_2.jpg?itok=fteFhJHP"
          alt=""
        />
        <a href="" className="underline hover:text-blue-600">
          Xem thêm
        </a>
      </div>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center"
      >
        <h1 className="p-20 text-3xl italic ">Các cơ sở khác</h1>

        <ul className="grid grid-cols-3 gap-20 p-20 list-disc bg-white">
          <li>
            Hai phòng thủy liệu pháp được trang bị bàn trị liệu đá nóng, phòng
            xông hơi, bể sục jacuzzi, hồ ngâm lạnh và sân hiên
          </li>
          <li>
            Spa menu phong phú bao gồm các liệu trình đặc trưng của Aman, chăm
            sóc tóc và massage Việt Nam truyền thống
          </li>

          <li>Không gian phòng tập chuyên dụng dành cho Pilates và yoga</li>
          <li>Phòng tập gym và các thiết bị thể dục hiện đại</li>

          <li>Sân tennis ngoài trời trong khuôn viên khu nghỉ dưỡng</li>

          <li>Các lựa chọn chỗ ở tại 2 Wellness Pool Villa</li>
        </ul>
      </div>
      {/* <div className="">
        <img
          src="https://www.aman.com/sites/default/files/styles/tablet_1024_1/public/2023-07/amanoi_vietnam_-_spa.jpg?itok=BSsHK-ZP"
          alt=""
        />
        <span>
          <h1>Movement & body work</h1>
          <p>
            The serene movement facilities at Amanoi have been designed with
            both physical and mental wellbeing in mind. The light-filled Pilated
            Studio is equipped with Allegro Reformers and other Pilates specific
            equipment, while stepped terraces lead to the the lake and outdoor
            Yoga Pavilion. Offering the latest in cardiovascular and weight
            training machinery, the spacious Gymnasium features floor-to-ceiling
            windows that overlook the lake.
          </p>
          <a href="" className="underline">
            Make an enquiry
          </a>
        </span>
      </div> */}
      <HealthCareCard
        data-aos="fade-up"
        title="Movement & body work
"
        paragraph="Các cơ sở vận động thanh thản tại Amanoi được thiết kế chú trọng đến sức khỏe thể chất và tinh thần. Studio Pilates tràn ngập ánh sáng được trang bị Allegro Reformers và các thiết bị dành riêng cho Pilates khác, trong khi các sân hiên có bậc thang dẫn ra hồ và Nhà tập Yoga ngoài trời. Cung cấp máy móc tập tạ và tim mạch mới nhất, Phòng tập thể dục rộng rãi có cửa sổ kính suốt từ trần đến sàn nhìn ra hồ.

"
        link="Make an enquiry"
        style={true}
      ></HealthCareCard>
      <HealthCareCard
        data-aos="fade-up"
        title="Aman Advanced Facial
"
        paragraph="Được sản xuất tại Nhật Bản, dòng sản phẩm chăm sóc da chức năng mới của Aman, Essential Skin, được bổ sung chiết xuất cám gạo và chàm mạnh mẽ, để mang lại làn da rạng rỡ hơn, được nâng lên rõ rệt. Kết hợp các sản phẩm từ dòng Essentials Skin với kỹ thuật tẩy da chết và nâng cơ bằng tay, Aman Advanced Facial kích thích cơ mặt để cải thiện kết cấu tổng thể của da.

Quá trình điều trị bắt đầu bằng việc chà siêu âm để nới lỏng và loại bỏ dầu và cặn bẩn khỏi lỗ chân lông. Được hỗ trợ bằng cách kích thích điện cơ và massage để làm săn chắc, và sử dụng bóng đèn cryo để loại bỏ bọng mắt, làn da trông sáng hơn và săn chắc hơn. Quá trình điều trị tiếp tục với việc áp dụng mặt nạ khoáng biển để dưỡng ẩm sâu, tiếp theo là mặt nạ hydrogel Aman x 111Skin Nourishing Gold Algae để đạt được làn da sáng đặc biệt. Để có một quá trình trẻ hóa hoàn toàn, liệu pháp chăm sóc da mặt có thể được mở rộng bằng cách kết hợp massage da đầu trong 15 phút.
"
        link="Make an enquiry"
        // style={true}
        bgWhite={true}
      ></HealthCareCard>
      <HealthCareCard
        data-aos="fade-up"
        title="AMAN SHOP

"
        paragraph="Trong những năm gần đây, Aman đã phát triển để mang đến lối sống đáng mơ ước vượt ra ngoài những giới hạn của thiên đường. Aman Skincare và Sva bổ sung khai thác các thành phần tự nhiên mạnh mẽ để mang lại sự cân bằng và sức khỏe tối ưu bên trong và bên ngoài, trong khi các sản phẩm Aman Fine Fragrance mang tinh thần Aman vào sự thoải mái như ở nhà.
"
        link="Discover more..."
        style={true}
        bgWhite={true}
      ></HealthCareCard>
    </div>
  );
};

export default HealthCarePage;
