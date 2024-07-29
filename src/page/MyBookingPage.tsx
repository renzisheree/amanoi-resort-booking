import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import dayjs from "dayjs";

const MyBookingPage = () => {
  const cookieValue = Cookies.get("token");
  const [BookingData, setBookingData] = useState([]);

  useEffect(() => {
    if (cookieValue) {
      axios
        .get(`http://localhost:3000/auth/me`, {
          headers: {
            Authorization: `Bearer ${cookieValue}`,
          },
        })
        .then((res) => {
          console.log(res);
          setBookingData(res.data.booked);
        });
    }
  }, []);

  const handleVNPAY = (price, id, name) => {
    const strPrice = price.toString();
    const data = {
      vnp_Amount: strPrice * 24252,
      vnp_OrderInfo: name,
      booking_id: id,
    };

    axios({
      method: "POST",
      url: "http://localhost:3000/bookings/payment/url",
      data: data,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((response) => {
        if (response && response.data && response.data.url) {
          const newWindow = window.open(response.data.url.toString(), "_blank");
          if (newWindow) {
            newWindow.focus();
          }
        }
      })
      .catch((error) => {
        toast.error(error);
      });
  };

  return (
    <div>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Họ
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Tên
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              SĐT
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Ngày vào
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Ngày ra
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Giá phòng
            </th>
            <th className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
              Trạng thái thanh toán
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {BookingData.map((items) => (
            <tr key={items._id}>
              <td className="px-6 py-4 whitespace-nowrap">{items.firstName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{items.lastName}</td>
              <td className="px-6 py-4 whitespace-nowrap">{items.phone}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {dayjs(items.start).format("DD/MM/YYYY") + " 14:00 PM"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {dayjs(items.end).format("DD/MM/YYYY") + " 12:00 AM"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {items.totalPrice}$
              </td>
              <td
                onClick={() => {
                  items.payment_status != "Đã thanh toán"
                    ? handleVNPAY(
                        items.totalPrice,
                        items._id,
                        `${items.firstName} ${items.lastName}`
                      )
                    : "";
                }}
                className="px-6 py-4 cursor-pointer whitespace-nowrap"
              >
                {items.payment_status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBookingPage;
