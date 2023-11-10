import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "../components/InputForm";
import TextAreaFormik from "../components/TextAreaFormik";
import DropdownFormik from "./DropdownFormik";
import countryList from "../data/countryList.json";
import { useEffect } from "react";
import dayjs from "dayjs";
import axios from "axios";
interface bookingProps {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  city: string;
  country: string;
  note: string;
  zipcode: number;
  address: string;
  startDate: string;
  endDate: string;
  adult: string;
  fee: number;
  totalPrice: number;
  children: string;
  rooms: string[];
}

interface reserProps {
  _id: string;
}
const ReservationForm: React.FC<reserProps> = ({ _id }) => {
  const localBooking = localStorage.getItem("bookingData");
  const bookingData = localBooking ? JSON.parse(localBooking) : "";
  const getObjectById = (id: string) => {
    const localStorageData = localStorage.getItem("rooms");
    const data = localStorageData ? JSON.parse(localStorageData) : [];

    const foundObject = data.find((item: any) => item._id === id);
    return foundObject;
  };
  const desiredId = _id;
  const foundObject = getObjectById(desiredId);

  if (foundObject) {
    console.log(foundObject);
  } else {
    console.log("Object not found in localStorage");
  }

  const postRawData = async (rawData1: bookingProps) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/bookings/",
        rawData1,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data); // Handle the response data
    } catch (error) {
      console.error(error); // Handle any error that occurred during the request
    }
  };

  const dateStr = bookingData.startDate;
  const [day, month, year] = dateStr.split("-");

  const newStartDate = `${month}-${day}-${year}`;

  const dateStr1 = bookingData.endDate;
  const [day1, month1, year1] = dateStr1.split("-");

  const newEndDate = `${month1}-${day1}-${year1}`;

  const range = dayjs(newEndDate).diff(newStartDate, "day");

  // const handleSubmit = (values: bookingProps) => {
  //   values.startDate = foundObject.startDate;
  //   values.endDate = foundObject.endDate;
  //   values.adult = foundObject.adult;
  //   values.children = foundObject.children;

  //   const data = JSON.stringify(values);
  //   console.log(data);
  // };
  return (
    <div className="mx-auto py-5 ">
      <div className="text-2xl">Thông tin liên hệ</div>
      <Formik
        initialValues={{
          rooms: "",
          firstname: "",
          lastname: "",
          city: "",
          phone: "",
          zipcode: 0,
          address: "",
          country: "",
          fee: 0,
          children: "",
          adult: "",
          startDate: "",
          endDate: "",
          totalPrice: 0,
          note: "",
          email: "",
        }}
        validationSchema={yup.object({
          firstname: yup.string().required("Please enter your firstName"),
          note: yup.string().required("Do you have any additional?"),

          lastname: yup.string().required("Please enter your lastName"),
          address: yup.string().required("Please enter your address"),
          city: yup.string().required("Please enter your city"),
          country: yup.string().required("Please select your country"),
          zipcode: yup.number().required("Please enter your zipcode"),
          email: yup
            .string()
            .email("Please enter valid email address")
            .required("Please enter your email address"),

          phone: yup.number().required("Please enter your phone number"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          values.rooms = _id;
          values.startDate = bookingData.startDate;
          values.endDate = bookingData.endDate;
          values.adult = bookingData.adult;
          values.children = bookingData.children;
          values.fee = foundObject.price * range * 0.08;
          values.totalPrice = foundObject.price * range;

          // const rawData = {
          //   rooms: values.rooms,
          //   totalPrice: values.totalPrice,
          //   fee: values.fee,
          //   children: values.children,
          //   adults: values.adult,
          //   start: values.startDate,
          //   end: values.endDate,
          //   note: values.note,
          //   zipCode: values.zipcode,
          //   city: values.city,
          //   address: values.address,
          //   country: values.country,
          //   email: values.email,
          //   phone: values.phone,
          //   lastName: values.lastname,
          //   firstName: values.firstname,
          // };
          const changeRoom = [values.rooms];

          const rawData1 = {
            rooms: changeRoom,
            totalPrice: values.totalPrice,
            fee: values.fee,
            children: bookingData.children,
            adults: bookingData.adult,
            start: bookingData.startDate,
            end: bookingData.endDate,
            note: values.note,
            zipCode: values.zipcode,
            city: values.city,
            address: values.address,
            country: values.country,
            email: values.email,
            phone: values.phone,
            lastName: values.lastname,
            firstName: values.firstname,
          };

          postRawData(rawData1);

          const data = JSON.stringify(values);
          console.log(data);
          setTimeout(() => {
            console.log(JSON.stringify(values));

            setSubmitting(false);
            resetForm();
          }, 5000);
        }}
      >
        {(formik) => {
          // const watchGender = formik.values.gender;

          return (
            <form onSubmit={formik.handleSubmit} autoComplete="off">
              <div className="">
                <div className="grid w-full grid-cols-2 gap-5">
                  <InputForm
                    name="firstname"
                    placeholder="Enter your FirstName"
                    id="firstname"
                    label="First Name"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="lastname"
                    placeholder="Enter your LastName"
                    id="lastname"
                    label="Last Name"
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
                    name="address"
                    placeholder="Enter your address"
                    id="address"
                    label="Address"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="zipcode"
                    placeholder="Enter your zipcode"
                    id="zipcode"
                    label="Zipcode"
                    type="number"
                  ></InputForm>
                  <InputForm
                    name="city"
                    placeholder="Enter your city"
                    id="city"
                    label="City"
                    type="text"
                  ></InputForm>
                  <DropdownFormik
                    labelText="Your country"
                    data={countryList}
                    dropdownLabel="Select your country"
                    name="country"
                    setValue={formik.setFieldValue}
                  ></DropdownFormik>
                </div>

                <div className="">
                  <TextAreaFormik
                    name="note"
                    placeholder="What's your additional"
                    id="note"
                    label="Additional"
                  ></TextAreaFormik>
                </div>
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
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ReservationForm;