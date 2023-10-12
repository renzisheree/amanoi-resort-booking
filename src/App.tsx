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
            path="/images"
            element={
              <>
                <ImagePage></ImagePage>
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
