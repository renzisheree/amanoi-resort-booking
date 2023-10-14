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
            path="/details/:slug"
            element={
              <>
                <RoomDetailPage></RoomDetailPage>
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
