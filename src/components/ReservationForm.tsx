import { Formik } from "formik";
import * as yup from "yup";
import InputForm from "../components/InputForm";
import TextAreaFormik from "../components/TextAreaFormik";
import DropdownFormik from "./DropdownFormik";
import countryList from "../data/countryList.json";
import ReservationFormHandler from "../utils/templateMethodForm/ReservationFormHandle";

interface reserProps {
  _id: string;
}
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
  rooms: string;
}
const ReservationForm: React.FC<reserProps> = ({ _id }) => {
  const formHandler = new ReservationFormHandler(_id);
  return (
    <div className="py-5 mx-auto ">
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
          firstname: yup.string().required("Hãy điền họ của bạn"),
          note: yup.string().required("Bạn có yêu cầu gì không?"),

          lastname: yup.string().required("Nhập tên của bạn"),
          address: yup.string().required("Nhập địa chỉ của bạn"),
          city: yup.string().required("Điền thành phố của bạn"),
          country: yup.string().required("Chọn quốc gia của bạn"),
          zipcode: yup.number().required("Hãy điền zipcode"),
          email: yup
            .string()
            .email("Hãy nhập mail hợp lệ")
            .required("Hãy điền email"),

          phone: yup.number().required("Hãy nhập số điện thoại của bạn"),
        })}
        onSubmit={(values: bookingProps, { setSubmitting, resetForm }) => {
          formHandler.processForm(values, () => {
            setTimeout(() => {
              setSubmitting(false);
              window.location.reload();
              resetForm();
            }, 3000);
          });
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
                    placeholder="Nhập tên của bạn"
                    id="firstname"
                    label="Họ của bạn"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="lastname"
                    placeholder="Nhập họ của bạn"
                    id="lastname"
                    label="Tên của bạn"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="email"
                    placeholder="Nhập mail của bạn"
                    id="email"
                    label="Email của bạn"
                    type="email"
                  ></InputForm>

                  <InputForm
                    name="phone"
                    placeholder="Hãy nhập số điện thoại của bạn"
                    id="phone"
                    label="Số điện thoại"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="address"
                    placeholder="Nhập địa chỉ của bạn"
                    id="address"
                    label="Địa chỉ của bạn"
                    type="text"
                  ></InputForm>
                  <InputForm
                    name="zipcode"
                    placeholder="Zipcode"
                    id="zipcode"
                    label="Zipcode"
                    type="number"
                  ></InputForm>
                  <InputForm
                    name="city"
                    placeholder="Thành phố"
                    id="city"
                    label="City"
                    type="text"
                  ></InputForm>
                  <DropdownFormik
                    labelText="Thành phố của bạn"
                    data={countryList}
                    dropdownLabel="Chọn thành phố"
                    name="country"
                    setValue={formik.setFieldValue}
                  ></DropdownFormik>
                </div>

                <div className="">
                  <TextAreaFormik
                    name="note"
                    placeholder="Bạn có lời nhắn gì không"
                    id="note"
                    label="Lời nhắn"
                  ></TextAreaFormik>
                </div>
                <div className="bg-[#3B504C] rounded-full ">
                  {" "}
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="w-full p-5  font-semibold text-white bg-gray-500] rounded-lg"
                  >
                    {formik.isSubmitting ? (
                      <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    ) : (
                      "Đặt ngay"
                    )}
                  </button>
                </div>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ReservationForm;
