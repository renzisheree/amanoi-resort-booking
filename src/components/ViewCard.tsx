type ViewCardProps = {
  cardImg: string;
  cardType?: string;
  cardTitle?: string;
  flexCol?: boolean;
  cardParagraph?: string;
  center?: boolean;
  button?: boolean;
  slide?: number;
  bgWhite?: boolean;
};
const ViewCard: React.FC<ViewCardProps> = ({
  cardImg,
  cardType,
  cardTitle,
  cardParagraph,
  flexCol = true,
  center = true,
  button = true,
  slide = 3,
  bgWhite = false,
}) => {
  return (
    <div
      className={`${center ? "text-center items-center" : ""} flex ${
        flexCol ? "flex-col " : ""
      } justify-between gap-y-3 p-10 w-full italic  ${
        bgWhite ? "bg-white" : ""
      } my-10  pb-5`}
    >
      <img src={cardImg} alt="" className={`w-[${100 / slide - 5}%] `} />
      <h3 className="font-light">{cardType}</h3>
      <h1 className="text-[25px]">{cardTitle}</h1>
      <p className="font-extralight italic">{cardParagraph}</p>
      {button && (
        <a className={`text-gray-600 hover:text-black underline`}>
          {" "}
          Tìm hiểu thêm{" "}
        </a>
      )}
    </div>
  );
};

export default ViewCard;
