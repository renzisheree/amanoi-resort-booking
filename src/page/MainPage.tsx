import VideoAutoplay from "../components/VideoAutoplay";
import ResortList from "../components/ResortList";
import ViewCard from "../components/ViewCard";
import { useEffect, useState } from "react";
import NearbyResortList from "../components/NearbyResortList";
import { useNavigate } from "react-router-dom";
import AOS from "aos";

const MainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
  });
  const [isShow, setShow] = useState(false);
  const localBooking = localStorage.getItem("bookingData");
  const bookingData = localBooking ? JSON.parse(localBooking) : "";
  const room = localStorage.getItem("rooms");
  const rooms = localBooking ? JSON.parse(room) : "";
  console.log(rooms);
  return (
    <>
      <section className="z-50 text-center ">
        {rooms.length != 0 && bookingData != null && (
          <div className="fixed bottom-0  r w-[96%] z-10  flex justify-between  items-center bg-white px-20 py-2  border-gray-300 border-2 rounded-lg m-5 italic ">
            <div className="">
              <h1>DESTINATION</h1>

              <span>Aman, Ninh Thuan, Vietnam</span>
            </div>

            <div className="flex flex-col">
              <span>Check in / Check out</span>
              <span>
                {bookingData.startDate} / {bookingData.endDate}
              </span>
            </div>
            <div className="">
              <h1>ROOMS & GUESTS</h1>
              <span>
                Adult : {bookingData.adult} / Children : {bookingData.children}{" "}
                / Rooms : {bookingData.room}
              </span>
            </div>
            <div
              onClick={() => {
                navigate("/reservations");
              }}
              className="bg-[#3B504C] rounded-full p-3 text-white"
            >
              <button>Check</button>
            </div>
          </div>
        )}
        <div data-aos="fade-up" className="">
          <VideoAutoplay></VideoAutoplay>
        </div>
        <div
          data-aos="fade-up"
          className=" mx-auto w-[80vw] my-10 flex flex-col justify-center items-center gap-y-4"
        >
          <h3 className="font-medium text-[25px] italic">
            TỈNH NINH THUẬN, VIỆT NAM
          </h3>
          <h1 className="font-thin italic text-[25px]">Amanoi</h1>
          <p className="font-light text-[15px] italic">
            Với dải bờ biển trải dài tuyệt đẹp của Việt Nam và được ôm trọn bởi
            Vườn Quốc gia Núi Chúa, nhìn từ xa Amanoi như một thiên đường tự
            nhiên nhìn ra Vịnh Vĩnh Hy. Từ các nhà hàng và hồ bơi trên đỉnh vách
            đá, đến Aman Spa bên hồ và bãi biển cát trắng riêng, khu nghỉ dưỡng
            mang đến các cơ hội không giới hạn cho các hoạt động khám phá ngoài
            trời, trải nghiệm văn hóa và thư giãn
          </p>
        </div>
      </section>
      <hr className=" border-gray-400 border-b-5 py-5 w-[80vw] mx-auto" />
      <section data-aos="fade-up" className="page-container bg-[#]">
        <ResortList></ResortList>
      </section>
      <hr className=" border-gray-400 border-b-5 my-16 w-[80vw] mx-auto" />

      <section
        data-aos="fade-up"
        className="flex flex-col items-center justify-center p-10 "
      >
        <div className="flex items-center justify-center my-20 mt-20 gap-x-20">
          {" "}
          <ViewCard
            cardImg="https://images.unsplash.com/photo-1695048987437-488232574ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            cardType="Resort"
            cardTitle="The season's essentials"
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
            button={false}
          ></ViewCard>
          <ViewCard
            cardImg="https://images.unsplash.com/photo-1695048987437-488232574ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            button={false}
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          ></ViewCard>
        </div>
        <a
          href="#"
          className="all:unset flex flex-col items-center w-[12vw] justify-center text-gray-500  hover:text-black  "
        >
          <p
            onClick={() => {
              navigate("/roomlists");
            }}
          >
            Xem tất cả phòng ở
          </p>
          <hr className="w-full py-4 mx-auto border-gray-400 border-b-5" />
        </a>
      </section>

      <section data-aos="fade-up" className="p-20 bg-white">
        <div className="flex items-center justify-center gap-10">
          <ViewCard
            data-aos="fade-right"
            cardImg="https://www.aman.com/sites/default/files/styles/slider_cards_equals_large/public/2021-03/Pavilions%2C-Amanoi%2C-Vietnam.jpg?itok=HbL_JBsB"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
            center={false}
          ></ViewCard>
          <ViewCard
            data-aos="fade-up"
            cardImg="https://images.unsplash.com/photo-1695048987437-488232574ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            center={false}
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
          ></ViewCard>
          <ViewCard
            data-aos="fade-left"
            cardImg="https://www.aman.com/sites/default/files/styles/slider_cards_equals_large/public/2021-03/Pavilions%2C-Amanoi%2C-Vietnam.jpg?itok=HbL_JBsB"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            center={false}
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, magni. Commodi saepe necessitatibus quaerat corporis, sequi facilis alias magnam natus. Fugit alias nam natus commodi.    products for the season ahead."
          ></ViewCard>
        </div>
        <div
          data-aos="fade-up"
          className="flex items-center justify-center gap-10 mt-10"
        >
          <ViewCard
            data-aos="fade-right"
            cardImg="https://images.unsplash.com/photo-1695048987437-488232574ac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            center={false}
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
            slide={2}
          ></ViewCard>
          <ViewCard
            data-aos="fade-left"
            cardImg="https://www.aman.com/sites/default/files/styles/slider_cards_equals_large/public/2021-03/Pavilions%2C-Amanoi%2C-Vietnam.jpg?itok=HbL_JBsB"
            cardType="HomeStay"
            cardTitle="The season's essentials"
            center={false}
            cardParagraph="Formulated with the world’s most inspiring destinations in mind, the Aman Essentials collection is yours to discover. Inviting moments of reflection and self-care, shop our most coveted products for the season ahead."
            slide={1.5}
          ></ViewCard>
        </div>
      </section>
      <hr className=" py-4 w-[80vw]   mx-auto" />

      <section data-aos="fade-up" className="p-10">
        <div
          className={`bg-white flex flex-col justify-center items-center h-full pb-[20vh] pt-20 `}
        >
          <img
            src={`${
              isShow
                ? "https://www.aman.com/sites/default/files/styles/property_map_extra_large/public/2021-09/aman-map-south-east-asia1.jpg?itok=78dZVhlQ"
                : "https://www.aman.com/sites/default/files/styles/property_map_extra_large/public/2021-09/aman-map-south-east-asia1.jpg?itok=78dZVhlQ"
            }`}
            alt=""
            className=" object-cover rounded-lg mb-5 w-[1100px] h-[650px] "
          />
          <div className="">
            {!isShow ? (
              <svg
                className="relative top-0"
                width="30px"
                height="30px"
                onClick={() => setShow(!isShow)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 15.5L13.6213 13.6213M13.6213 13.6213C14.1642 13.0784 14.5 12.3284 14.5 11.5C14.5 9.84315 13.1569 8.5 11.5 8.5C9.84315 8.5 8.5 9.84315 8.5 11.5C8.5 13.1569 9.84315 14.5 11.5 14.5C12.3284 14.5 13.0784 14.1642 13.6213 13.6213ZM21 12C21 16.9706 16.9706 21 12 21C9.96359 21 3.00072 21 3.00072 21C3.00072 21 4.55992 17.2561 3.93591 16.0008C3.33685 14.7956 3 13.4372 3 12C3 7.02944 7.02943 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg
                width="30px"
                height="30px"
                onClick={() => setShow(!isShow)}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 8L14 12M14 8L10 12M19 10.2C19 14.1764 15.5 17.4 12 21C8.5 17.4 5 14.1764 5 10.2C5 6.22355 8.13401 3 12 3C15.866 3 19 6.22355 19 10.2Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </div>

          <div className="mt-5 font-mono italic ">
            <span className="flex justify-center gap-2">
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="flex flex-col font-light">
                <span>Thôn Vĩnh Hy</span>
                <span>Xã Vĩnh Hải</span>
                <span>Ninh Thuận</span>
                <span>Việt Nam</span>
              </span>
              <span className="ml-[10vw]">
                <span className="flex items-center justify-center gap-3 mb-5 gap-y-2">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/s vg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"
                    />
                  </svg>

                  <span>CXR - Cam Ranh</span>
                </span>
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="w-6 h-6 text-gray-800 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m7.164 3.805-4.475.38L.327 6.546a1.114 1.114 0 0 0 .63 1.89l3.2.375 3.007-5.006ZM11.092 15.9l.472 3.14a1.114 1.114 0 0 0 1.89.63l2.36-2.362.38-4.475-5.102 3.067Zm8.617-14.283A1.613 1.613 0 0 0 18.383.291c-1.913-.33-5.811-.736-7.556 1.01-1.98 1.98-6.172 9.491-7.477 11.869a1.1 1.1 0 0 0 .193 1.316l.986.985.985.986a1.1 1.1 0 0 0 1.316.193c2.378-1.3 9.889-5.5 11.869-7.477 1.746-1.745 1.34-5.643 1.01-7.556Zm-3.873 6.268a2.63 2.63 0 1 1-3.72-3.72 2.63 2.63 0 0 1 3.72 3.72Z" />
                  </svg>
                  <span>50mins transfer</span>
                </span>
              </span>
            </span>
          </div>
        </div>
      </section>
      <section data-aos="fade-up" className="page-container">
        <h1 className="z-10 pb-5 text-3xl font-bold text-center">
          Nearby Resorts
        </h1>
        <div className="">
          {" "}
          <NearbyResortList></NearbyResortList>
        </div>
      </section>
    </>
  );
};

export default MainPage;
