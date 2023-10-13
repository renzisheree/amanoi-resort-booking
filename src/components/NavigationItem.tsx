import React from "react";
import { useNavigate } from "react-router-dom";

interface NavItemProps {
  children: React.ReactNode;
  path?: string;
}

const NavigationItem: React.FC<NavItemProps> = (props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/${props.path}`);
      }}
      className="w-full h-full py-2 hover:text-gray-600 hover:border-gray-600 hover:border-b-2"
    >
      <h2>{props.children}</h2>
    </div>
  );
};

export default NavigationItem;
