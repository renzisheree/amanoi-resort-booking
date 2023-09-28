import { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";

const NavigationBar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <div className={`${isSticky ? "sticky" : ""} top-0  bg-primary z-50`}>
      <div
        className={`navigation-bar-wrapper flex items-center text-center align-middle  justify-center  gap-x-10 my-10 border-gray-400 border-b-[1px] h-[60px] w-[80vw] mx-auto text-[13px]`}
      >
        <NavigationItem path="home">Amanoi</NavigationItem>
        <NavigationItem>Thư viện ảnh</NavigationItem>
        <NavigationItem>Phòng ở</NavigationItem>
        <NavigationItem>Các trải nghiệm</NavigationItem>
        <NavigationItem>Ẩm thực</NavigationItem>
        <NavigationItem>Chăm sóc sức khoẻ</NavigationItem>
        <NavigationItem>Lễ kỉ niệm</NavigationItem>
        <NavigationItem>Ưu đãi độc quyền</NavigationItem>
        <NavigationItem>Getting here</NavigationItem>
        <NavigationItem>Liên hệ</NavigationItem>
      </div>
    </div>
  );
};

export default NavigationBar;
