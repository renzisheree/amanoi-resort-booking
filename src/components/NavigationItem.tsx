import React from "react";
// import { useNavigate } from "react-router-dom";

interface NavItemProps {
  children: React.ReactNode;
  path?: string;
}

const NavigationItem: React.FC<NavItemProps> = (props, { path }) => {
  // const navigate = useNavigate();
  return (
    <div
      // onClick={() => {
      //   navigate(`/${path}`);
      // }}
      className="w-full h-full cursor-pointer py-2 hover:text-blue-600 hover:border-blue-600 hover:border-b-2"
    >
      <h2>
        {props.children} {path}
      </h2>
    </div>
  );
};

export default NavigationItem;
