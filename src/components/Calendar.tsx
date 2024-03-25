import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { generateDate, months } from "../utils/calendar/calendarF";
import { DayJsDateFactory } from "../utils/dateFactory/DayJsDateFactory";
import cn from "../utils/calendar/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import isBetween from "dayjs/plugin/isBetween";
import DropDownData from "../data/dropdownData.json";
import * as yup from "yup";
import countData from "../data/countData.json";
import { Formik, useField } from "formik";
import DropdownFormik from "./DropdownFormik";
import { useNavigate } from "react-router-dom";
import dropdownChil from "../data/dropdownChild.json";
import BookingFacade from "../utils/facade/BookingFacade";
useField;
dayjs.extend(isBetween);

interface DateRange {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}
export default function Calendar() {
  const navigate = useNavigate();
  const dateFactory = new DayJsDateFactory();

  const [data, setData1] = useState({});
  const days = ["S", "M", "T", "W", "T", "F", "S"];
  const currentDate = dayjs();

  const [range, setRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });

  const [today, setToday] = useState(currentDate);
  const selectDateHandler = (date: Dayjs) => {
    const { startDate, endDate } = range;

    if (date.isBefore(dayjs()) && date.date() != dayjs().date()) return;

    if (startDate && date.isBefore(startDate)) {
      setRange({
        startDate: date,
        endDate: startDate,
      });
      return;
    }

    if (!startDate) {
      setRange({
        startDate: date,
        endDate: null,
      });
    } else if (!endDate) {
      setRange({
        startDate,
        endDate: date,
      });
    } else {
      if (date.isBefore(startDate)) {
        setRange({
          endDate: startDate,
          startDate: date,
        });
      } else {
        setRange({
          startDate,
          endDate: date,
        });
      }
    }
  };

  function isDateInRange(date: Dayjs) {
    if (!range.startDate || !range.endDate) return false;

    return date.isBetween(range.startDate, range.endDate);
  }

  function isPastDate(date: Dayjs) {
    return date.isBefore(dayjs(), "day");
  }
  const handleFormSubmit = (values) => {
    const bookingFacade = BookingFacade.getInstance();

    values.startDate = range.startDate
      ? dayjs(range.startDate).format("DD-MM-YYYY")
      : "";
    values.endDate = range.endDate
      ? dayjs(range.endDate).format("DD-MM-YYYY")
      : "";

    localStorage.setItem("bookingData", JSON.stringify(values));

    bookingFacade
      .searchRooms(
        values.startDate,
        values.endDate,
        values.adult,
        values.children
      )
      .then((response) => {
        setData1(response);
        navigate("/booking/step-2", {
          state: { data: response, values },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex gap-[10vw] sm:divide-x justify-center   mx-auto w-screen  h-screen items-center sm:flex-row flex-col">
      <div className="">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-semibold select-none">
            {months[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-10 ">
            <GrFormPrevious
              className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 transition-all cursor-pointer hover:scale-105"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-7 ">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="grid text-sm font-bold text-center text-gray-500 select-none h-14 w-14 place-content-center"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className="grid grid-cols-7 ">
          {generateDate(today.month(), today.year(), dateFactory).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="grid p-2 text-sm text-center border-t h-14 place-content-center"
                >
                  <h1
                    className={cn(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-[#a32828] opacity-50 text-white" : "",
                      range.startDate &&
                        range.startDate?.toDate().toDateString() ===
                          date.toDate().toDateString()
                        ? "bg-[#aeaca8] text-white hover:clear-both"
                        : "",
                      isDateInRange(date) ? "bg-[#313131] text-white" : "",

                      isPastDate(date) ? "opacity-30 hover:clear-both" : "",
                      range.endDate &&
                        range.endDate?.toDate().toDateString() ===
                          date.toDate().toDateString()
                        ? "bg-[#aeaca8] text-white hover:clear-both"
                        : "",
                      "h-10 w-10 rounded-sm grid  place-content-center hover:bg-gray-500 hover:text-white transition-all cursor-pointer select-none"
                    )}
                    onClick={() => {
                      selectDateHandler(date);
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="form w-[30vw]">
        <div className="flex items-center justify-center p-5 border-2 border-black">
          <div className="w-full p-5 border-r-4 border-black">
            <b>Checkin:</b> <br />
            {range.startDate?.toDate().toDateString()}
          </div>
          <div className="w-full p-5 ">
            <b>Checkout</b> <br />
            {range.endDate?.toDate().toDateString()}
          </div>
        </div>

        <Formik
          initialValues={{
            room: "",
            adult: "",
            children: "",
            startDate: "",
            endDate: "",
          }}
          validationSchema={yup.object({
            room: yup.number().required("Please choose number of room(s)"),

            children: yup
              .string()
              .required("Please choose number of children(s)"),

            adult: yup
              .number()

              .required("Please enter number of adult(s)"),
          })}
          onSubmit={handleFormSubmit}
        >
          {(formik) => {
            return (
              <form
                onSubmit={formik.handleSubmit}
                className="my-10 ml-10 "
                autoComplete="off"
              >
                <DropdownFormik
                  labelText="Select room "
                  data={DropDownData}
                  dropdownLabel="Select room"
                  name="room"
                  setValue={formik.setFieldValue}
                ></DropdownFormik>{" "}
                <DropdownFormik
                  labelText="Number of adults"
                  data={countData}
                  dropdownLabel="Number of adults"
                  name="adult"
                  setValue={formik.setFieldValue}
                ></DropdownFormik>{" "}
                <DropdownFormik
                  labelText="Number of children"
                  data={dropdownChil}
                  dropdownLabel="Number of childrens"
                  name="children"
                  setValue={formik.setFieldValue}
                ></DropdownFormik>
                <div className="flex w-full "></div>
                <div className="bg-[#3B504C] rounded-full">
                  <button
                    type="submit"
                    disabled={formik.isSubmitting}
                    className="smtbtn w-full p-5 font-semibold text-white bg-[#54524F] rounded-lg"
                  >
                    {formik.isSubmitting ? (
                      <div className="w-5 h-5 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin"></div>
                    ) : (
                      "Search"
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
}
