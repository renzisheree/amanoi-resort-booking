import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { toast } from "react-toastify";
import AbstractFormHandler from "./AbtractFormHandler";

interface LoginValues {
  email: string;
  password: string;
}

class LoginFormHandler extends AbstractFormHandler<LoginValues> {
  private navigate: NavigateFunction;

  constructor(navigate: NavigateFunction) {
    super();
    this.navigate = navigate;
  }

  handleSubmit(values: LoginValues) {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login/v2",
      data: values,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res);
        if (res.data.error != null) {
          toast.error(res.data.error);
        } else if (res.data.access_token == null) {
          this.navigate("/login-2fa");
        } else {
          const { data } = res;
          if (!data.access_token) {
            toast.error(res.data.error);
            return;
          }
          document.cookie = `token=${data.access_token};expires=${new Date(
            Date.now() + 86400 * 1000
          ).toUTCString()}`;
          toast.success("Login successful");
          this.navigate("/");
        }
      })
      .catch((e) => {
        toast.error(e);
      });
  }
}

export default LoginFormHandler;
