/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import AbstractFormHandler from "./AbtractFormHandler";
import { useNavigate } from "react-router-dom";
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
interface foundObjectProps {
  price: number;
  _id: string;
}

class ReservationFormHandler extends AbstractFormHandler<bookingProps> {
  private cookieProfile: string | undefined;
  private bookingData: bookingProps;
  private _id: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private foundObject: any;
  navigate = useNavigate();

  constructor(_id: string) {
    super();
    this.cookieProfile = Cookies.get("token");
    this.bookingData = localStorage.getItem("bookingData")
      ? JSON.parse(localStorage.getItem("bookingData")!)
      : "";
    this._id = _id;
    this.foundObject = this.getObjectById(_id);
  }
  handleSubmit(values: bookingProps) {
    values.rooms = this._id;
    values.startDate = this.bookingData.startDate;
    values.endDate = this.bookingData.endDate;
    values.adult = this.bookingData.adult;
    values.children = this.bookingData.children;
    values.fee = this.foundObject.price * this.getRange() * 0.08;
    values.totalPrice = this.foundObject.price * this.getRange() + values.fee;
    const changeRoom = [values.rooms];

    const rawData1 = {
      rooms: [changeRoom],
      totalPrice: values.totalPrice,
      fee: values.fee,
      children: values.children,
      adults: values.adult,
      start: values.startDate,
      end: values.endDate,
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

    this.postRawData(rawData1, values);
  }

  private getObjectById(id: string) {
    const localStorageData = localStorage.getItem("rooms");

    const data = localStorageData ? JSON.parse(localStorageData) : [];

    const foundObject = Object.values(data)?.find(
      (item: foundObjectProps) => item._id === id
    );
    return foundObject;
  }

  private getRange() {
    const dateStr = this.bookingData.startDate;
    const [day, month, year] = dateStr.split("-");
    const newStartDate = `${month}-${day}-${year}`;

    const dateStr1 = this.bookingData.endDate;
    const [day1, month1, year1] = dateStr1.split("-");
    const newEndDate = `${month1}-${day1}-${year1}`;

    return dayjs(newEndDate).diff(newStartDate, "day");
  }

  private postRawData(rawData1, values: bookingProps) {
    axios
      .post("http://localhost:3000/bookings/", rawData1, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${this.cookieProfile}`,
        },
      })
      .then((response) => {
        response;
        const rooms: [] = JSON.parse(localStorage.getItem("rooms") || "[]");

        // Remove the booked room from localStorage
        const updatedRooms = Object.values(rooms).filter(
          (r: any) => r._id !== values.rooms
        );
        localStorage.setItem("rooms", JSON.stringify(updatedRooms));
        const rooms1: [] = JSON.parse(localStorage.getItem("rooms") || "[]");
        if (rooms1.length === 0) {
          this.navigate("/thanks");
        }
        toast.success("Đặt phòng thành công!!");
      })
      .catch((error) => {
        toast.error(error);
      });
  }
}
export default ReservationFormHandler;
