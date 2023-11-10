import { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import Cookies from "js-cookie";

const NavigationBar = () => {
  const [isSticky, setSticky] = useState(false);

  const token_cookie = Cookies.get("token");

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
    <div className={`${isSticky ? "sticky" : ""}  bg-[#F3EEE7]  top-0   z-50`}>
      <div
        className={`navigation-bar-wrapper flex items-center text-center align-middle  justify-center  gap-x-10 my-10 border-gray-400 border-b-[1px] h-[60px] w-[80vw] mx-auto text-[13px]`}
      >
        <NavigationItem path="">Amanoi</NavigationItem>
        <NavigationItem path="images">Thư viện ảnh</NavigationItem>
        <NavigationItem path="roomlists">Phòng ở</NavigationItem>
        <NavigationItem path="adventure">Các trải nghiệm</NavigationItem>
        <NavigationItem path="foods">Ẩm thực</NavigationItem>
        <NavigationItem path="healthcare">Chăm sóc sức khoẻ</NavigationItem>
        <NavigationItem path="events">Lễ kỉ niệm</NavigationItem>
        <NavigationItem>Ưu đãi độc quyền</NavigationItem>
        <NavigationItem>Getting here</NavigationItem>
        <NavigationItem>Liên hệ</NavigationItem>
        {token_cookie == null ? (
          <NavigationItem path="login">Sign In</NavigationItem>
        ) : (
          <NavigationItem path="profile">Hello Customer</NavigationItem>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
