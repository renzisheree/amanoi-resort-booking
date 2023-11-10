import "./index.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from "react-router-dom";

import MainPage from "./hooks/page/MainPage";
import RegisterPage from "./hooks/page/RegisterPage";
import LoginPage from "./hooks/page/LoginPage";
import ImagePage from "./hooks/page/ImagePage";
import BookingPage from "./hooks/page/BookingPage";
import Main from "./layout/Main";
import FoodPage from "./hooks/page/FoodPage";
import RoomDetailPage from "./hooks/page/RoomDetailPage";
import RoomListPage from "./hooks/page/RoomListPage";
import HealthCarePage from "./hooks/page/HealthCarePage";
import EventPage from "./hooks/page/EventPage";
import AdvanturePage from "./hooks/page/AdvanturePage";
import ReservationPage from "./hooks/page/ReservationPage";
import ProfilePage from "./hooks/page/ProfilePage";
import BookingStep2 from "./hooks/page/BookingStep2";
import ReservationRoomCard from "./components/ReservationRoomCard";

function App() {
  return (
    <>
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
            path="/test"
            element={
              <>
                <ReservationRoomCard></ReservationRoomCard>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;
