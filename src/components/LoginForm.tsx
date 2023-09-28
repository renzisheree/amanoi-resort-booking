import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
import CheckboxForm from "./CheckboxForm";

const LoginForm = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Formik
        initialValues={{
          email: "",
          password: "",
          remember: false,
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
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
            resetForm();
          }, 5000);
        }}
      >
        {(formik) => {
          return (
            <form
              onSubmit={formik.handleSubmit}
              className=" my-10"
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

              <CheckboxForm name="remember">Remember password</CheckboxForm>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="w-full p-5 mt-5 font-semibold text-white bg-blue-500 rounded-lg"
              >
                {formik.isSubmitting ? (
                  <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                ) : (
                  "Submit"
                )}
              </button>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default LoginForm;
