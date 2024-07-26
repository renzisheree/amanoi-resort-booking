import React, { useEffect } from "react";
import HealthCareCard from "../components/HealthCareCard";
import advantureData from "../data/advantureData.json";
import { SwiperSlide, Swiper } from "swiper/react";
import AOS from "aos";

const AdvanturePage = () => {
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
        className="flex items-center justify-center gap-10 mb-5 underline pointer "
      >
        <li>Tổng quan</li>
        <li>Hoạt động mới</li>
        <li>Các hoạt động gia đình</li>
      </ul>
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center gap-10"
      >
        <Swiper grabCursor={true} spaceBetween={40} slidesPerView={"auto"}>
          {advantureData.length > 0 &&
            advantureData.map((item) => (
              <SwiperSlide key={item.id}>
                <img key={item.id} src={item.src} alt="" />
              </SwiperSlide>
            ))}
        </Swiper>

        <p data-aos="fade-up" className="italic text-sm w-[50vw]">
          Khám phá vịnh bằng thuyền kayak hoặc thuyền buồm catamaran. Lặn mình
          dưới làn nước trong vắt để chiêm ngưỡng những rặng san hô nhiều sắc
          màu. Khám phá làng chài lân cận và tìm hiểu nền văn hóa lâu đời của
          người Chăm. Tại nơi giao hòa giữa đất và biển, Amanoi mang đến hàng
          loạt những trải nghiệm và hoạt động độc đáo.
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
        <div data-aos="fade-up" className="">
          {" "}
          <span>
            <h1 className="text-lg font-medium">Khám phá thế giới biển</h1>

            <p>
              Hòa mình trong làn nước trong veo của bờ vịnh, một vương quốc san
              hô ẩn mình những con sóng. Khám phá những rạn san hô nguyên sơ
              trong chuyến thám hiểm lặn với ống thở có hướng dẫn viên và khám
              phá hơn 350 loại san hô như san hô sừng, san hô đĩa được tìm thấy
              trong khu bảo tồn của vịnh Vĩnh Hy, cũng như những loài cá nhiệt
              đới đầy màu sắc bao gồm cá cò, cá thiên thần, cá kèn, cá đù và cá
              dơi. Bạn cũng có thể du ngoạn trên Vịnh Vĩnh Hy bằng một trong
              những chiếc thuyền kayak đáy kính của Amanoi. Được làm từ
              polycarbonate bền, nhẹ, chống vỡ, thuyền kayak hoàn toàn trong
              suốt và cho phép bạn nhìn thấy bất kỳ sinh vật biển nào đang bơi
              dưới nước.
            </p>
          </span>
          <span>
            <h1 className="text-lg font-medium">Đi bộ dọc bờ biển</h1>

            <p>
              Được bao quanh bởi những ngọn đồi, Amanoi là cửa ngõ của Vườn Quốc
              gia Núi Chúa với diện tích gần 29.000 ha - thuộc vùng lõi của Khu
              Dự trữ Sinh quyển UNESCO Núi Chúa, một xứ sở thần kỳ với nhiều
              cảnh quan thiên nhiên và đa dạng động vật hoang dã, nơi những nhà
              thám hiểm luôn có thể thưởng ngoạn và khám phá. Từ khu nghỉ dưỡng,
              các cung đường mòn có thể đưa khách đến với những trải nghiệm đi
              bộ thân thiện với gia đình, đến dã ngoại trên những bãi biển bí
              mật, hoặc những chuyến đi bộ và leo núi thử thách hơn đến những
              khối đá độc đáo của Bãi Đá hay khám phá khung cảnh vịnh kỳ vĩ trên
              đỉnh Goga.
            </p>
          </span>
          <span>
            <h1 className="text-lg font-medium">
              Hành trình khám phá vương quốc bị lãng quên
            </h1>
            <p>
              Khám phá di sản lâu đời tại vùng đất của người Chăm, vương quốc
              từng thống trị bờ biển miền Nam Việt Nam, thông qua trải nghiệm
              khám phá những tàn tích của quần thể đền tháp từ thế kỷ 13 Po
              Klong Garai. Tọa lạc ngay ngoại ô trung tâm thành phố Phan Rang,
              đây là một tổ hợp di sản vô cùng quý giá đang được bảo tồn và công
              nhận là một trong những tháp Chăm đẹp nhất tại Việt Nam.
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
        paragraph="The serene movement facilities at Amanoi have been designed with both physical and mental wellbeing in mind. The light-filled Pilated Studio is equipped with Allegro Reformers and other Pilates specific equipment, while stepped terraces lead to the the lake and outdoor Yoga Pavilion. Offering the latest in cardiovascular and weight training machinery, the spacious Gymnasium features floor-to-ceiling windows that overlook the lake.
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
        link="Tìm hiểu thêm..."
        style={true}
        bgWhite={true}
      ></HealthCareCard>
    </div>
  );
};

export default AdvanturePage;
