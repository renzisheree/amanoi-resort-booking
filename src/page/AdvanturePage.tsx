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
    <div className="p-20 flex flex-col gap-10">
      <h1 data-aos="fade-up" className=" text-center text-3xl italic ">
        Chăm sóc sức khỏe & Tập luyện thể hình tại Amanoi
      </h1>
      <ul
        data-aos="fade-up"
        className="flex items-center justify-center gap-10 underline pointer  mb-5 "
      >
        <li>Tổng quan</li>
        <li>What's on</li>
        <li>Các hoạt động gia đình</li>
      </ul>
      <div
        data-aos="fade-up"
        className="flex flex-col gap-10 justify-center items-center"
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
        className="flex justify-center items-start text-sm italic gap-10"
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
        className="flex flex-col justify-center items-center"
      >
        <h1 className="text-3xl italic p-20 ">Các cơ sở khác</h1>

        <ul className="grid grid-cols-3 gap-20  list-disc	 bg-white p-20">
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
        paragraph="Made in Japan, Aman’s new functional skincare line, Essential Skin, is infused with powerful rice bran and indigo extracts, to achieve noticeably lifted, more radiant skin. Combining products from the Essentials Skin line with exfoliation and manual lifting techniques, the Aman Advanced Facial stimulates face muscles to improve the skin’s overall texture.

The treatment begins with ultrasonic scrubbing to loosen and remove oil and debris from the pores. Supported by electric muscle stimulation and massage to firm, and cryo bulbs to eliminate puffiness, the complexion appears brighter and tighter. The treatment continues with the application of a marine mineral mask to deeply hydrate, followed by Aman x 111Skin Nourishing Gold Algae hydrogel face and eye masks to achieve an exceptional glow. For a wholly rejuvenation process, the facial can be extended to incorporate a 15-minute scalp massage.
"
        link="Make an enquiry"
        // style={true}
        bgWhite={true}
      ></HealthCareCard>
      <HealthCareCard
        data-aos="fade-up"
        title="AMAN SHOP

"
        paragraph="In recent years, Aman has grown to offer its coveted lifestyle beyond the parameters of its havens. Aman Skincare and Sva supplements harness powerful natural ingredients to provide balance and optimal wellbeing within and without, while Aman Fine Fragrance products bring the spirit of Aman into the comfort of home.


"
        link="Discover more..."
        style={true}
        bgWhite={true}
      ></HealthCareCard>
    </div>
  );
};

export default AdvanturePage;
