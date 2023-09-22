import React from "react";

interface NavItemProps {
  children: React.ReactNode;
}

const NavigationItem: React.FC<NavItemProps> = (props) => {
  return (
    <div className="w-full h-full cursor-pointer py-2 hover:text-blue-600 hover:border-blue-600 hover:border-b-2">
      <h2>{props.children}</h2>
    </div>
  );
};

export default NavigationItem;
