import "./index.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from "react-router-dom";

import MainPage from "./page/MainPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
import ImagePage from "./page/ImagePage";
import BookingPage from "./page/BookingPage";
import Main from "./layout/Main";
import FoodPage from "./page/FoodPage";
import RoomDetailPage from "./page/RoomDetailPage";
import RoomListPage from "./page/RoomListPage";
import HealthCarePage from "./page/HealthCarePage";
import EventPage from "./page/EventPage";
import AdvanturePage from "./page/AdvanturePage";
import ReservationPage from "./page/ReservationPage";
import ProfilePage from "./page/ProfilePage";
import BookingStep2 from "./page/BookingStep2";
import { ToastContainer } from "react-toastify";
import ExclusiveOffer from "./page/ExclusiveOfferPage";
import "react-toastify/dist/ReactToastify.css";
import GettingThere from "./page/GettingThere";
import ThanksPage from "./page/ThanksPage";
import "aos/dist/aos.css";
import Login2FA from "./page/Login2FA";
import MyBookingPage from "./page/MyBookingPage";
import PaymentSuccessPage from "./page/PaymentSuccesPage";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <MainPage></MainPage>
              </>
            }
          ></Route>
          <Route
            path="/booking"
            element={
              <>
                <BookingPage></BookingPage>
              </>
            }
          ></Route>
          <Route
            path="/foods"
            element={
              <>
                <FoodPage></FoodPage>
              </>
            }
          ></Route>
          <Route
            path="/my-order"
            element={
              <>
                <MyBookingPage></MyBookingPage>
              </>
            }
          ></Route>
          <Route
            path="/payment/success"
            element={
              <>
                <PaymentSuccessPage></PaymentSuccessPage>
              </>
            }
          ></Route>
          <Route
            path="/login-2fa"
            element={
              <>
                <Login2FA></Login2FA>
              </>
            }
          ></Route>
          <Route
            path="/booking/step-2"
            element={
              <>
                <BookingStep2></BookingStep2>
              </>
            }
          ></Route>{" "}
          <Route
            path="/details/:path/:slug"
            element={
              <>
                <RoomDetailPage></RoomDetailPage>
              </>
            }
          ></Route>
          <Route
            path="/adventure"
            element={
              <>
                <AdvanturePage></AdvanturePage>
              </>
            }
          ></Route>
          <Route
            path="/events"
            element={
              <>
                <EventPage></EventPage>
              </>
            }
          ></Route>
          <Route
            path="/thanks"
            element={
              <>
                <ThanksPage></ThanksPage>
              </>
            }
          ></Route>
          <Route
            path="/images"
            element={
              <>
                <ImagePage></ImagePage>
              </>
            }
          ></Route>
          <Route
            path="/roomlists"
            element={
              <>
                <RoomListPage></RoomListPage>
              </>
            }
          ></Route>
          <Route
            path="/reservations"
            element={
              <>
                <ReservationPage></ReservationPage>
              </>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <>
                <ProfilePage></ProfilePage>
              </>
            }
          ></Route>
          <Route
            path="/booking/reservation"
            element={
              <>
                <ReservationPage></ReservationPage>
              </>
            }
          ></Route>
          <Route
            path="/login"
            element={
              <>
                <LoginPage></LoginPage>
              </>
            }
          ></Route>
          <Route
            path="/healthcare"
            element={
              <>
                <HealthCarePage></HealthCarePage>
              </>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <>
                <RegisterPage></RegisterPage>
              </>
            }
          ></Route>
          <Route
            path="/exclusive-offers-amanoi"
            element={
              <>
                <ExclusiveOffer></ExclusiveOffer>
              </>
            }
          ></Route>
          <Route
            path="/getting-there"
            element={
              <>
                <GettingThere></GettingThere>
              </>
            }
          ></Route>
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
