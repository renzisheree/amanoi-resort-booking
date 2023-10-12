import { useState } from "react";
import list from "../data/listLanguage.json";

import { useNavigate } from "react-router-dom";

const LangChooser = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" flex w-[350px]   items-center justify-between  align-middle   rounded-sm ">
      <button
        onClick={() => {
          console.log(list);
          setOpen(!isOpen);
        }}
        className=" relative flex items-center justify-around bg-primary px-5 py-2  border-b-2  border-gray-500 "
      >
        <p className="mr-5 text-sm">Choose Language</p>
        <div className="">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-down"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-caret-up"
              viewBox="0 0 16 16"
            >
              <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
            </svg>
          )}

          {isOpen ? (
            <div className="bg-primary absolute top-10  mt-1 left-3 w-full p-3  rounded-lg ">
              {" "}
              {list.map((item) => (
                <div className="flex w-full text-[15px] font-normal justify-between p-2 hover:bg-blue-300 cursor-pointer rounded-r-lg border-l-transparent">
                  <h1>{item.language}</h1>
                </div>
              ))}{" "}
            </div>
          ) : null}
        </div>
      </button>

      <button
        className="px-6 py-2  border-black border-[0.5px] rounded-sm bg-[#E6E2DB] hover:opacity-80"
        onClick={() => {
          navigate("/booking");
        }}
      >
        Reserve
      </button>
    </div>
  );
};

export default LangChooser;
