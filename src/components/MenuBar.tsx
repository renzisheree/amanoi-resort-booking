import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuBar = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className={`backdrop ${isOpen ? "visible" : ""}`}
        onClick={() => setOpen(false)}
      />
      <div
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <div
          className={`navigation fixed z-[999] flex items-center align-center gap-3 cursor-pointer top-0 left-[-35%] w-[30%] ${
            isOpen ? "left-0" : ""
          } duration-500`}
        >
          <div className="button fixed block top-[5%] right-[95%] w-[40px] h-[40px] hover:scale-105 translate-y-[-50%] border-0 z-[1000]">
            <div
              className={`top-[3px] bg-gray-700 w-full h-1 transition-all duration-300 ease-in mb-[1.5px] ${
                isOpen
                  ? "bg-red-500 rotate-45 translate-x-1.5 translate-y-[5px]"
                  : ""
              } `}
            ></div>
            <div
              className={`top-[11px] bg-gray-700 h-1 transition-all duration-300 ease-in ${
                isOpen ? "bg-transparent" : ""
              }`}
            ></div>
            <div
              className={`top-[19px] bg-gray-700 w-full h-1 transition-all duration-300 ease-in mt-[1.5px] ${
                isOpen
                  ? "bg-red-500 -rotate-45 translate-x-1.5 translate-y-[-5px]"
                  : ""
              }`}
            ></div>
          </div>

          <nav
            className={`side absolute bg-white w-full pt-20P left-0 top-0 h-screen ${
              isOpen ? "z-[999]" : ""
            }`}
          >
            <ul>
              <li
                onClick={() => {
                  navigate("/");
                }}
              >
                <a href="">Home</a>
              </li>
              <li
                onClick={() => {
                  navigate("/booking");
                }}
              >
                <a href="">Booking</a>
              </li>
              <li
                onClick={() => {
                  navigate("/profile");
                }}
              >
                <a href="">Profile</a>
              </li>
              <li
                onClick={() => {
                  navigate("/getting-there");
                }}
              >
                <a href="">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MenuBar;
