import "./index.scss";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from "react-router-dom";

// import BookingPage from "./page/BookingPage";
import MainPage from "./page/MainPage";
// import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
// import Calendar from "./components/Canendar";
import ImagePage from "./page/ImagePage";
import BookingPage from "./page/BookingPage";
import Main from "./layout/Main";

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
                {/* <BookingPage></BookingPage> */}
                <BookingPage></BookingPage>
                {/* <Test1></Test1> */}

                {/* <Calendar></Calendar> */}
              </>
            }
          ></Route>

          <Route
            path="/images"
            element={
              <>
                {/* <BookingPage></BookingPage> */}
                <ImagePage></ImagePage>
                {/* <Test1></Test1> */}

                {/* <Calendar></Calendar> */}
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
