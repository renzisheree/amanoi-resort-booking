import { useLocation, useNavigate } from "react-router-dom";

const BookingBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { values } = location.state;

  return (
    <div
      className="flex italic font-light justify-between items-center rounded-sm bg-[#efefef] w-[60%] mx-auto border border-gray-400 my-10
    "
    >
      <div
        className="flex flex-col px-10 border"
        onClick={() => {
          navigate("/booking");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-arrow-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
          />
        </svg>
        <span>EDIT</span>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="font-mediumP">Placeney</span>
        <div className="flex items-center justify-center gap-5">
          <span>Ngày vào : {values.startDate}</span>
          <span>Ngày ra : {values.endDate}</span>
          <span>Người lớn : {values.adult}</span>
          <span>Trẻ eim : {values.children}</span>
        </div>
      </div>

      <div className="px-10">Chào bạn nhé!</div>
    </div>
  );
};
export default BookingBar;
