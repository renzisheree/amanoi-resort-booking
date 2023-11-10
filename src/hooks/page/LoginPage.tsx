import LoginForm from "../../components/LoginForm";
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
        <h1 className="text-3xl text-center mb-2">
          Discover the world of Aman
        </h1>
        <p className="text-center font-thin ">
          Join our mailing list for exclusive offers and the latest news from
          Aman Group
        </p>
      </div>
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;
