import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "./InputForm";
// import RadioForm from "./RadioForm.";
import axios from "axios";
// import CheckboxForm from "./CheckboxForm";
import MiddleLogo from "./MiddleLogo";
import contryData from "../data/countryList.json";
import DropdownFormik from "./DropdownFormik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface RegisterProps {
  firstname: string;
  lastname: string;

  phone: string;
  email: string;
  country: string;
  password: string;
}

const RegisterForm = () => {
  const navigate = useNavigate();
  const handleSubmit = (values: RegisterProps) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/auth/register",
      data: values,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(function (res) {
        if (res.data.code == 200) {
          toast.success("Đăng ký thành công");
          navigate("/login");
        }
      })
      .catch(function (res) {
        toast.error(res.data.message);
      });
  };
  return (
    <div className="flex items-center justify-around gap-20">
      <div className="">
        <MiddleLogo width={400}></MiddleLogo>
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
            firstname: yup.string().required("Nhập họ của bạn"),

            lastname: yup.string().required("Nhập tên của bạn"),

            email: yup
              .string()
              .email("Email không hợp lệ")
              .required("Hãy nhập email của bạn"),
            password: yup
              .string()
              .min(8, "Mật khẩu phải trên 8 kí tự")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                {
                  message:
                    "Mật khẩu phải bao gồm 1 chữ thường, 1 chữ hoa và 1 ký tự đặc biệt",
                }
              )
              .required("Vui lòng nhập mật khẩu"),
            country: yup.string().required("Hãy chọn đất nước của bạn"),
            // gender: yup
            //   .string()
            //   .required("Please select your gender")
            //   .oneOf(
            //     ["male", "female", "other"],
            //     "You can only select male or female or other"
            //   ),

            phone: yup.number().required("Hãy nhập số điện thoại"),
            // term: yup
            //   .boolean()
            //   .oneOf([true], "Please check the term and conditions"),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleSubmit(values);
            setTimeout(() => {
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
                  placeholder="Nhập họ của bạn"
                  id="firstname"
                  label="Họ"
                  type="text"
                ></InputForm>
                <InputForm
                  name="lastname"
                  placeholder="Nhập tên của bạn"
                  id="lastname"
                  label="Tên"
                  type="text"
                ></InputForm>
                <InputForm
                  name="email"
                  placeholder="Nhập email của bạn"
                  id="email"
                  label="Email address"
                  type="email"
                ></InputForm>

                <InputForm
                  name="phone"
                  placeholder="Nhập số điện thoại"
                  id="phone"
                  label="Số điện thoại"
                  type="text"
                ></InputForm>
                <InputForm
                  name="password"
                  placeholder="Nhập mật khẩu của bạn"
                  id="password"
                  label="Mật khẩu"
                  type="password"
                ></InputForm>
                <DropdownFormik
                  labelText="Country"
                  data={contryData}
                  dropdownLabel="Chọn đất nước của bạn"
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
                <div className="bg-[#3B504C] rounded-full">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full p-5  font-semibold text-white bg-[#293A37] rounded-lg"
                  >
                    {formik.isSubmitting ? (
                      <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    ) : (
                      "Đăng Ký"
                    )}
                  </button>
                </div>
              </form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterForm;
