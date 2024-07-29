import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
import LoginFormHandler from "../utils/templateMethodForm/LoginFormHandle";
import { useNavigate } from "react-router-dom";
const LoginForm = () => {
  const navigate = useNavigate();
  const formHandler = new LoginFormHandler(navigate);
  return (
    <div className="flex flex-col items-center justify-center w-full ">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={yup.object({
          email: yup
            .string()
            .email("Hãy nhập email của bạn")
            .required("Hãy nhập email của bạn"),
          password: yup
            .string()
            .min(8, "Mật khẩu phải chứa ít nhất 8 kí tự")
            .matches(
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
              {
                message:
                  "Mật khẩu cần 1 chữ thường, 1 chữ hoa và 1 ký tự đặc biệt",
              }
            )
            .required("Hãy nhập mật khẩu của bạn"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);

            formHandler.processForm(values, resetForm);
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
                placeholder="Nhập mail của bạn"
                id="email"
                label="Email address"
                type="email"
              ></InputForm>
              <InputForm
                name="password"
                placeholder="Nhập mật khẩu của bạn"
                id="password"
                label="Mật khẩu"
                type="password"
              ></InputForm>

              <div className="bg-[#3B504C] rounded-full">
                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="w-full p-5  font-semibold text-white bg-[#54524F] rounded-lg"
                >
                  {formik.isSubmitting ? (
                    <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                  ) : (
                    "Đăng nhập"
                  )}
                </button>
              </div>

              <div
                className="w-full p-5 mt-5 font-semibold text-black bg-white rounded-full cursor-pointer"
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
                  Đăng nhập với Google
                </div>
              </div>

              <h1 className="p-5">
                Bạn chưa có tài khoản?{" "}
                <span
                  onClick={() => {
                    navigate("/register");
                  }}
                  className="p-3 text-lg bg-white rounded-full cursor-pointer"
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
