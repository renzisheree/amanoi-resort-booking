import { Formik } from "formik";
import * as yup from "yup";

// import RadioForm from "./RadioForm.";
import axios from "axios";
// import CheckboxForm from "./CheckboxForm";
import InputForm from "../components/InputForm";

interface RegisterProps {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  country: string;
}
const ReservationPage = () => {
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
        <div className="w-[80vw] mx-auto py-5 ">
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              country: "vietnam",
              phone: "",
              email: "",
            }}
            validationSchema={yup.object({
              firstname: yup.string().required("Please enter your firstName"),

              lastname: yup.string().required("Please enter your lastName"),

              email: yup
                .string()
                .email("Please enter valid email address")
                .required("Please enter your email address"),

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
                  className=" max-w-[700px] grid grid-cols-2 gap-10"
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
    </div>
  );
};

export default ReservationPage;
