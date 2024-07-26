import { useNavigate } from "react-router-dom";
import placenoi from "../assets/PlaceNoi.png";
const MiddleLogo = ({ width = 250 }: { width?: number }) => {
  const navigate = useNavigate();
  return (
    <div
      className="ml-[15vw]
    "
    >
      <img src="" alt="" />
      <img
        width={width}
        height={250}
        src={placenoi}
        alt="logo"
        onClick={() => {
          navigate("/");
        }}
      />
    </div>
  );
};

export default MiddleLogo;
