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
          Discover the world of Placeney
        </h1>
        <p className="font-thin text-center ">
          Join our mailing list for exclusive offers and the latest news from
          Placeney Group
        </p>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
