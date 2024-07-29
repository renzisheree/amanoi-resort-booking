import LoginForm from "../components/LoginForm";
import Cookies from "js-cookie";
import { useEffect } from "react";

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const token_cookie = Cookies.get("token");
  useEffect(() => {
    if (token_cookie != null) {
      navigate("/profile");
    }
  });
  return (
    <div>
      <div className="my-5">
        {" "}
        <h1 className="mb-2 text-3xl text-center">
          Khám phá thế giới của Placeney
        </h1>
        <p className="font-thin text-center ">
          Đăng ký ngay để hưởng những ưu đãi tuyệt dzoi
        </p>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
