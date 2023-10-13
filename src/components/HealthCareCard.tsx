import React from "react";

type HealthCareProps = {
  style?: boolean;
  bgWhite?: boolean;

  title: string;
  paragraph: string;
  link: string;
};
const HealthCareCard: React.FC<HealthCareProps> = ({
  style = false,

  bgWhite = false,
  title,
  paragraph,
  link,
}) => {
  return (
    <div className="">
      {style ? (
        <div
          className={` flex items-start justify-center gap-10 ${
            bgWhite ? "bg-white" : ""
          }`}
        >
          <img
            src="https://www.aman.com/sites/default/files/styles/tablet_1024_1/public/2023-07/amanoi_vietnam_-_spa.jpg?itok=BSsHK-ZP"
            alt=""
          />

          <span className="flex flex-col gap-5 italic text-sm p-10">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <a href="" className="underline">
              {link}
            </a>
          </span>
        </div>
      ) : (
        <div
          className={` flex items-start justify-center gap-10 ${
            bgWhite ? "bg-white" : ""
          }`}
        >
          <span className=" flex flex-col gap-5 italic text-sm p-10">
            <h1>{title}</h1>
            <p>{paragraph}</p>
            <a href="" className="underline">
              {link}
            </a>
          </span>
          <img
            src="https://www.aman.com/sites/default/files/styles/tablet_1024_1/public/2023-07/amanoi_vietnam_-_spa.jpg?itok=BSsHK-ZP"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default HealthCareCard;
