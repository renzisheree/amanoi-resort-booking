import offerData from "../data/offerData.json";
import ViewCard from "../components/ViewCard";
import AOS from "aos";
import { useEffect } from "react";

const ExclusiveOfferPage = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className="flex flex-col items-center gap-10">
      <div data-aos="fade-up" className="flex flex-col items-center gap-3">
        <h1 className="text-3xl italic">Ưu đãi độc quyền tại Amanoi</h1>
        <span className=" italic text-center w-[60%]">
          Sở hữu dải bờ biển trải dài tuyệt đẹp của Việt Nam, Amanoi mang đến
          không gian nghỉ dưỡng độc đáo giữa Vườn Quốc gia Núi Chúa với các
          chương trình nghỉ dưỡng được thiết kế để giúp khách tận dụng tối đa kỳ
          nghỉ của mình
        </span>
        <a className="underline font-body" href="">
          Gửi yêu cầu
        </a>
      </div>
      <div data-aos="fade-up" className="grid grid-cols-3 gap-10 p-20 bg">
        {offerData &&
          offerData.map((item) => (
            <ViewCard
              key={item.id}
              cardImg={item.img}
              cardTitle={item.title}
              cardParagraph={item.paragraph}
              bgWhite={true}
              button={true}
              center={false}
            ></ViewCard>
          ))}
      </div>
    </div>
  );
};

export default ExclusiveOfferPage;
