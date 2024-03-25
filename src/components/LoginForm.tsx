import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
        console.log(res);
        navigate("/login-2fa");
      })
      .catch(function (e) {
        console.log(e);
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
