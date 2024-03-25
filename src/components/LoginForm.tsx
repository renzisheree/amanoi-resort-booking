import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface loginProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (values: loginProps) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/login/v2",
      data: values,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(function (res) {
        if (res.data.error != null) {
          toast.error(res.data.error);
        } else if (res.data.access_token == null) {
          navigate("/login-2fa");
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
          navigate("/");
        }
        // console.log(res);
        // if (res.data.access_token == null) {
        //   navigate("/login-2fa");
        // } else if (res.data.error != null) {
        //   const { data } = res;

        //   if (!data.access_token) {
        //     toast.error(res.data.error);
        //     return;
        //   }
        //   document.cookie = `token=${data.access_token};expires=${new Date(
        //     Date.now() + 86400 * 1000
        //   ).toUTCString()}`;

        //   toast.success("Login successful");
        //   navigate("/");
        // } else {
        //   toast.error(res.data.error);
        // }
      })
      .catch(function (e) {
        toast.error(e);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Formik
        initialValues={{
          email: "",
          password: "",
          // remember: false,
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Please enter valid email address")
            .required("Please enter your email address"),
          password: yup
            .string()
            .min(8, "Your password must be at least 8 characters or greater")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              {
                message:
                  "Your password must have at least 1 uppercase, 1 lowercase, 1 special character",
              }
            )
            .required("Please enter your password"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);

            handleSubmit(values);
            resetForm();
          }, 1000);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className=" my-10 w-[60%]"
              autoComplete="off"
            >
              <InputForm
                name="email"
                placeholder="Enter your email"
                id="email"
                label="Email address"
                type="email"
              ></InputForm>
              <InputForm
                name="password"
                placeholder="Enter your password"
                id="password"
                label="Password"
                type="password"
              ></InputForm>

              {/* <CheckboxForm name="remember">Remember password</CheckboxForm> */}
              <div className="bg-[#3B504C] rounded-full">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full p-5  font-semibold text-white bg-[#54524F] rounded-lg"
                >
                  {formik.isSubmitting ? (
                    <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  ) : (
                    "Login"
                  )}
                </button>
              </div>

              <div
                className="w-full p-5 mt-5 font-semibold text-black bg-white rounded-full"
                onClick={() => {
                  window.location.href = "http://localhost:3000/auth/google";
                }}
              >
                <div className="flex items-center justify-center gap-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-google"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                  </svg>{" "}
                  Login with Google
                </div>
              </div>

              <h1>
                Bạn chưa có tài khoản?{" "}
                <span
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="text-lg underline"
                >
                  Đăng ký
                </span>
              </h1>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
