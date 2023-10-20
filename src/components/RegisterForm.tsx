import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
// import RadioForm from "./RadioForm.";
import axios from "axios";
// import CheckboxForm from "./CheckboxForm";
import MiddleLogo from "./MiddleLogo";
import contryData from "../data/countryList.json";
import DropdownFormik from "./DropdownFormik";

const newUser = {
  firstname: "le",
  lastname: "quang",
  phone: "0913464425",
  country: "Indo",
  email: "thanhquang.5@gmail.com",
  password: "imluongz@123aA",
};
interface RegisterProps {
  firstname: string;
  lastname: string;

  phone: string;
  email: string;
  country: string;
  password: string;
}

const RegisterForm = () => {
  console.log(newUser);
  const handleSubmit = (values: RegisterProps) => {
    console.log(values);
    const data = JSON.stringify(values);
    console.log(data);
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      data: values,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(function (res) {
        console.log(res);
        alert("Successfully signed up!");
      })
      .catch(function (res) {
        console.log(res);
      });
  };
  return (
    <div className="flex items-center justify-around gap-20">
      <div className="">
        <MiddleLogo
          srcImg="https://www.aman.com/themes/custom/aman/logo.svg"
          width={400}
        ></MiddleLogo>
      </div>
      <div className="w-[80vw] mx-auto py-5 ">
        <Formik
          initialValues={{
            firstname: "",
            lastname: "",
            country: "vietnam",
            phone: "",
            email: "",
            password: "",
          }}
          validationSchema={yup.object({
            firstname: yup.string().required("Please enter your firstName"),

            lastname: yup.string().required("Please enter your lastName"),

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
            country: yup.string().required("Please select your country"),
            // gender: yup
            //   .string()
            //   .required("Please select your gender")
            //   .oneOf(
            //     ["male", "female", "other"],
            //     "You can only select male or female or other"
            //   ),

            phone: yup.number().required("Please enter your phone number"),
            // term: yup
            //   .boolean()
            //   .oneOf([true], "Please check the term and conditions"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setTimeout(() => {
              console.log(JSON.stringify(values, null, 2));

              setSubmitting(false);
              resetForm();
            }, 5000);
          }}
        >
          {(formik) => {
            // const watchGender = formik.values.gender;

            return (
              <form
                onSubmit={formik.handleSubmit}
                className=" max-w-[700px] mx-auto my-10"
                autoComplete="off"
              >
                <InputForm
                  name="firstname"
                  placeholder="Enter your FirstName"
                  id="firstname"
                  label="FirstName"
                  type="text"
                ></InputForm>
                <InputForm
                  name="lastname"
                  placeholder="Enter your LastName"
                  id="lastname"
                  label="LastName"
                  type="text"
                ></InputForm>
                <InputForm
                  name="email"
                  placeholder="Enter your email"
                  id="email"
                  label="Email address"
                  type="email"
                ></InputForm>

                <InputForm
                  name="phone"
                  placeholder="Enter your phone number"
                  id="phone"
                  label="Phone number"
                  type="text"
                ></InputForm>
                <InputForm
                  name="password"
                  placeholder="Enter your password"
                  id="password"
                  label="Password"
                  type="password"
                ></InputForm>
                <DropdownFormik
                  labelText="Country"
                  data={contryData}
                  dropdownLabel="Select your country"
                  name="country"
                  setValue={formik.setFieldValue}
                ></DropdownFormik>
                {/* <div className="flex flex-col gap-3 mb-5">
                  <label className="cursor-pointer">Gender</label>
                  <div className="flex items-center gap-5">
                    <RadioForm
                      name="gender"
                      value="male"
                      checked={watchGender === "male"}
                      content="Male"
                    ></RadioForm>
                    <RadioForm
                      name="gender"
                      value="female"
                      checked={watchGender === "female"}
                      content="Female"
                    ></RadioForm>
                    <RadioForm
                      name="gender"
                      value="other"
                      checked={watchGender === "other"}
                      content="Other"
                    ></RadioForm>
                  </div>
                </div> */}

                {/* <CheckboxForm name="term">
                  I accept the terms and conditions
                </CheckboxForm> */}
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
    </div>
  );
};

export default RegisterForm;
