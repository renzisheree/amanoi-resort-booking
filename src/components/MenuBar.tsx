import { useState } from "react";

const MenuBar = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {" "}
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
          className={`navigation   flex items-center align-center gap-3 bg-primary cursor-pointer top-0 fixed right-[-500px] w-[30vw] ${
            isOpen ? "left-0" : ""
          } h-full   z-[9999] transition-all duration-500`}
        >
          <div className="fixed block top-[5%] right-[95%] w-[40px] h-[40px]  translate-y-[-50%] border-0">
            <div
              className={`top-[3px] bg-gray-700 w-full h-1 transition-all duration-300 ease-in	mb-[1.5px] ${
                isOpen
                  ? "bg-red-500 rotate-45 translate-x-1.5 translate-y-[5px]"
                  : ""
              } `}
            ></div>
            <div
              className={`top-[11px] bg-gray-700 w-full h-1 transition-all duration-300 ease-in  ${
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

          <nav className="absolute w-[250px] left-[50px] top-[100px]">
            {" "}
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
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
