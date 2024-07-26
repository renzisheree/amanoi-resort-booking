import AOS from "aos";
import { useEffect } from "react";

const GettingThere = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col items-center justify-center p-20">
      <h1 data-aos="fade-up" className="p-1 mb-10 text-3xl italic font-body ">
        Đến với Placeney
      </h1>

      <div data-aos="fade-up" className="">
        <img
          src="https://www.aman.com/sites/default/files/styles/full_size_extra_large/public/2021-03/Amanoi_Dining-Hero-1.jpg?itok=e3LKDbNf"
          alt="cover"
          className="w-[80vw] mx-auto"
        />
        <p className="text-center w-[60vw] p-10 text-sm italic mx-auto">
          Nằm cách Sân bay Cam Ranh (CXR) 75 phút lái xe, Placeney nằm ẩn mình
          trong khu vực hẻo lánh của Vườn Quốc gia Núi Chúa của UNESCO. Để đảm
          bảo việc đến nơi dễ dàng nhất, đội ngũ hướng dẫn viên tận tâm của
          Placeney luôn sẵn sàng hỗ trợ mọi kế hoạch du lịch, đưa đón và sắp xếp
        </p>
      </div>

      <div
        data-aos="fade-up"
        className="flex items-start justify-center w-full gap-10 pb-10 italic "
      >
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2023-07/amanoi-vietnam-pool-pavilion.jpg?itok=XFVR4_3B"
          alt=""
        />
        <img
          src="https://www.aman.com/sites/default/files/styles/media_text_side_by_side_portrait_xwide_up/public/2023-06/amanoi_vietnam_ocean_pool_residence.jpg?itok=iuCseRQU"
          alt=""
        />
        <span className="flex flex-col gap-1">
          <h1 className="text-xl italic font-medium ">
            International flights{" "}
          </h1>
          <p className="text-m font-body">
            Sân bay gần Placeney nhất là Sân bay Cam Ranh (Nha Trang) - CXR,
            cách đó 75 phút lái xe. Các chuyến bay thẳng đến Sân bay Cam Ranh
            (CXR) được cung cấp từ một số thành phố trọng điểm của Châu Á, bao
            gồm Seoul, Bangkok, Hồng Kông, Kuala Lumpur và Quảng Châu. Du khách
            quốc tế từ những nơi xa hơn ở Châu Mỹ và Châu Âu có thể kết nối với
            bất kỳ thành phố nào trong số đó từ trung tâm quê hương của họ.{" "}
            <br /> Ngoài ra, còn có các chuyến bay nối chuyến đến Cam Ranh từ
            Thành phố Hồ Chí Minh (65 phút), Hà Nội (105 phút) hoặc Đà Nẵng (65
            phút). Những người bay thẳng đến Thành phố Hồ Chí Minh cũng có thể
            di chuyển bằng ô tô đến Placeney, với thời gian hành trình khoảng 5
            giờ.
          </p>{" "}
          <h1 className="text-xl italic font-medium ">
            Visa and entry requirements
          </h1>
          <p className="text-m font-body ">
            Người mang hộ chiếu từ 25 nước có thể vào Việt Nam miễn thị thực.
            Khách du lịch từ các quốc gia khác có thể xin thị thực điện tử Việt
            Nam một lần, có giá trị trước 30 ngày. Tất cả khách quốc tế đều được
            mời liên hệ với nhóm đặt phòng của Placeney nếu họ có bất kỳ câu hỏi
            hoặc thắc mắc nào. Nhóm cũng có thể hỗ trợ nộp đơn xin thị thực (có
            tính phí bổ sung).
          </p>{" "}
        </span>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />

      <div data-aos="fade-up" className="m-10">
        <div className="m-5 text-center">
          <h1 className="font-mono text-3xl italic">Airport transfers </h1>
          <p className="font-body ">
            Placeney nằm cách Sân bay Cam Ranh (Nha Trang) - CXR 75 phút lái xe.
            Đội ngũ trợ giúp đặc biệt của Placeney có thể sắp xếp dịch vụ đưa
            đón VIP theo yêu cầu.
          </p>
        </div>

        <div className="text-center">
          <h1 className="font-mono text-3xl italic">Du lịch quanh Châu Á </h1>
          <p className="font-body ">
            Khởi động chương trình Placeney nhiều điểm đến tại khu vực hành động
            nơi tất cả bắt đầu. Với 18 khu nghỉ dưỡng trên 11 quốc gia, việc làm
            nán lại lâu hơn ở Châu Á chưa bao giờ dễ dàng hơn thế. <br /> Kết
            hợp kỳ nghỉ tại Placeney với chuyến thăm các nước láng giềng Đông
            Nam Á gần đó, thoáng như Placeney, Lào, dưới chân núi Phousi, nơi ẩn
            trốn ở Siem Reap Placeney, Campuchia, tại cửa sau được che phủ bởi
            rừng cứng đến Angkor Wat đã được UNESCO công nhận và Placeney nguyên
            thủy, Thái Lan, trên bờ biển Placeney có nhiều cây cọ.
          </p>
        </div>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />
      <div
        data-aos="fade-up"
        className="flex justify- gap-[400px]  items-start"
      >
        <div className="">
          <h1 className="text-3xl font-body">Thời gian bay tới VN </h1>
          <span className="font-body text-m">
            Bay thẳng tới Ho Chi Minh City (SGN)
          </span>
        </div>
        <div className="">
          <ul className="flex flex-col gap-2 list-disc ">
            <li>Bangkok, Thailand – 1hr 30min </li>
            <li>Kuala Lumpur, Malaysia – 2hr </li>
            <li>Singapore, Republic of Singapore – 2hr </li>
            <li>Hong Kong, China – 2hr 40 min </li>
            <li>Dubai, United Arab Emirates – 7hr 30min </li>
            <li>Doha, Qatar – 7hr 55min </li>
            <li>London, UK – 13hr 30min </li>
            <li>San Francisco, USA – 16hr 20min </li>
          </ul>
        </div>
      </div>
      <hr className="p-[0.5px] bg-gray-300 w-full m-20" />
    </div>
  );
};

export default GettingThere;
