import React from "react";

interface Resort {
  name: string;
  path: string;
  // Add other properties of a resort here
}

interface ResortCardProps {
  resortItem: Resort;
}

const ResortCard: React.FC<ResortCardProps> = ({ resortItem }) => {
  return (
    <div className="resort-card flex flex-col flex-1  z-0">
      <h2>{resortItem.name}</h2>
      <img src={resortItem.path} alt="" />
    </div>
  );
};

export default ResortCard;
