import { useNavigate } from "react-router-dom";

type RoomCardProps = {
  cardImg: string;
  cardType?: string;
  cardTitle?: string;
  flexCol?: boolean;
  cardParagraph?: string;
  center?: boolean;
  button?: boolean;
  slide?: number;
  bgWhite?: boolean;
  slug?: string;
  path?: string;
};
const RoomCard: React.FC<RoomCardProps> = ({
  cardImg,
  cardType,
  cardTitle,
  slug,
  path,
  cardParagraph,
  flexCol = true,
  center = true,
  button = true,
  slide = 3,
  bgWhite = false,
}) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${center ? "text-center items-center" : ""} flex ${
        flexCol ? "flex-col " : ""
      } justify-between gap-y-3 w-full italic  ${
        bgWhite ? "bg-white" : ""
      } my-10 w-[${100 / slide - 5}vw] pb-5`}
      onClick={() => {
        navigate(`/details/${path}/${slug}`);
      }}
    >
      <img src={cardImg} alt="" className={` w-full `} />
      <h3 className="font-light">{cardType}</h3>
      <h1 className="text-[30px]">{cardTitle}</h1>
      <p className="font-extralight">{cardParagraph}</p>
      {button && (
        <a className={`text-gray-600 hover:text-black underline`}>
          {" "}
          Tìm hiểu thêm{" "}
        </a>
      )}
    </div>
  );
};

export default RoomCard;
