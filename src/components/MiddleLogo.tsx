import { useNavigate } from "react-router-dom";

const MiddleLogo = ({
  srcImg,
  width = 250,
}: {
  srcImg: string;
  width?: number;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="ml-[15vw]
    "
    >
      <img
        width={width}
        height={250}
        src={srcImg}
        alt=""
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default MiddleLogo;
