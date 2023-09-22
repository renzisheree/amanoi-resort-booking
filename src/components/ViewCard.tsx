type ViewCardProps = {
  cardImg: string;
  cardType: string;
  cardTitle: string;
  cardParagraph: string;
  center?: boolean;
  button?: boolean;
  slide?: number;
};
const ViewCard: React.FC<ViewCardProps> = ({
  cardImg,
  cardType,
  cardTitle,
  cardParagraph,
  center = true,
  button = true,
  slide = 3,
}) => {
  return (
    <div
      className={`${
        center ? "text-center items-center" : ""
      } flex flex-col  justify-between gap-y-3 w-[${
        100 / slide - 10
      }vw] italic`}
    >
      <img src={cardImg} alt="" className="mx-auto  w-full h-[350px]" />
      <h3 className="font-light">{cardType}</h3>
      <h1 className="text-[30px]">{cardTitle}</h1>
      <p className="font-extralight">{cardParagraph}</p>
      {button && (
        <a className="text-gray-600 hover:text-black underline ">
          {" "}
          Tìm hiểu thêm{" "}
        </a>
      )}
    </div>
  );
};

export default ViewCard;
