/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { Field, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { Form, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import MiddleLogo from "../components/MiddleLogo";

const validationSchema = Yup.object({
  firstname: Yup.string().required("First name is required"),
  lastname: Yup.string().required("Last name is required"),
  phone: Yup.string()
    .matches(/^\d{10,}$/, "Invalid phone number format")
    .required("Phone number is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  country: Yup.string().required("Country is required"),
  oldPassword: Yup.string(),
  newPassword: Yup.string().when("oldPassword", {
    is: (oldPassword: string) => !!oldPassword,
    then: Yup.string().required("New password is required"),
    otherwise: Yup.string().notRequired(),
  } as any),
  confirmNewPassword: Yup.string().when("newPassword", {
    is: (newPassword: string) => !!newPassword,
    then: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm new password is required"),
    otherwise: Yup.string().notRequired(),
  } as any),
});

const ProfilePage = () => {
  const navigate = useNavigate();
  const cookieValue = Cookies.get("token");

  const initialValues = {
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    country: "",
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };

  const handleSubmit = (values) => {
    const updatedProfileData = {
      firstname: values.firstname,
      lastname: values.lastname,
      phone: values.phone,
      country: values.country,
      email: values.email,
      currentPassword: values.oldPassword,
      password: values.newPassword,
    };

    axios
      .patch("https://api.badenn.me/auth/me", updatedProfileData, {
        headers: { Authorization: `Bearer ${cookieValue}` },
      })
      .then((response) => {
        toast.success(response.data.message);
      })
      .catch((response) => {
        toast.error(response.data.message);
      });
  };

  const handleDeleteCookies = () => {
    Cookies.remove("token");
    navigate("/login");
    toast.success("Logout successful");
  };

  return cookieValue ? (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <div className="flex items-center justify-center gap-20">
          <MiddleLogo
            srcImg="https://www.aman.com/themes/custom/aman/logo.svg"
            width={300}
          />
          <Form className="flex font-body flex-col w-[500px] items-start justify-start gap-10 text-xl font-light">
            <div className="flex">
              <div className="w-[200px]">First Name :</div>
              <Field
                className={`p-2 border-[1px] ${
                  formik.errors.firstname && formik.touched.firstname
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                name="firstname"
                value={formik.values.firstname}
                onChange={formik.handleChange}
              />
              {formik.errors.firstname && formik.touched.firstname && (
                <span className="text-red-500">
                  {formik.errors.firstname.toString()}
                </span>
              )}
            </div>
            <div className="flex">
              <div className="w-[200px]">LastName:</div>
              <Field
                className={`p-2 border-[1px] ${
                  formik.errors.lastname && formik.touched.lastname
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                name="lastname"
                value={formik.values.lastname}
                onChange={formik.handleChange}
              />
              {formik.errors.lastname && formik.touched.lastname && (
                <div className="text-red-500">
                  {formik.errors.lastname.toString()}
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-[200px]">Phone :</div>
              <Field
                className={`p-2 border-[1px] ${
                  formik.errors.phone && formik.touched.phone
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                name="phone"
                value={formik.values.phone}
                onChange={formik.handleChange}
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className="text-red-500">
                  {formik.errors.phone.toString()}
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-[200px]">Country:</div>
              <Field
                className={`p-2 border-[1px] ${
                  formik.errors.country && formik.touched.country
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
              />
              {formik.errors.country && formik.touched.country && (
                <div className="text-red-500">
                  {formik.errors.country.toString()}
                </div>
              )}
            </div>
            <div className="flex">
              <div className="w-[200px]">First Name :</div>
              <Field
                className={`p-2 border-[1px] ${
                  formik.errors.email && formik.touched.email
                    ? "border-red-500"
                    : "border-gray-400"
                }`}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="text-red-500">{formik.errors.email.}</div>
              )}
            </div>

            <div className="flex items-center justify-center gap-10">
              <button
                type="button"
                onClick={handleDeleteCookies}
                className="px-5 py-2 border font-thin bg-[#E6E2DB]"
              >
                Đăng xuất
              </button>
              <button
                type="submit"
                className="px-5 py-2 border font-thin bg-[#E6E2DB]"
              >
                Xác nhận
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  ) : (
    <div className="">fail</div>
  );
};

export default ProfilePage;
