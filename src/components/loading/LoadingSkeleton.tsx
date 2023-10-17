import React from "react";

interface LoadingSkeletonProps {
  className?: string;
  height: number | string;
  width?: number | string;
  radius?: number | string;
}

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className,
  height,
  width = "100%",
  radius,
}) => {
  return (
    <div
      className={`skeleton ${className}`}
      style={{
        height,
        width,
        borderRadius: radius,
      }}
    />
  );
};

export default LoadingSkeleton;
