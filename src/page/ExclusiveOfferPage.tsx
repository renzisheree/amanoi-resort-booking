import offerData from "../data/offerData.json";
import ViewCard from "../components/ViewCard";

const ExclusiveOfferPage = () => {
  return (
    <div className="flex flex-col gap-10 items-center">
      <div className="flex flex-col gap-3 items-center">
        <h1 className="text-3xl italic">Ưu đãi độc quyền tại Amanoi</h1>
        <span className="font-mono text-center w-[60%]">
          Sở hữu dải bờ biển trải dài tuyệt đẹp của Việt Nam, Amanoi mang đến
          không gian nghỉ dưỡng độc đáo giữa Vườn Quốc gia Núi Chúa với các
          chương trình nghỉ dưỡng được thiết kế để giúp khách tận dụng tối đa kỳ
          nghỉ của mình
        </span>
        <a className="underline font-body" href="">
          Gửi yêu cầu
        </a>
      </div>
      <div className="grid grid-cols-3 gap-10 p-20 bg">
        {offerData &&
          offerData.map((item) => (
            <ViewCard
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
