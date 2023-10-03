import "./index.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
// import BookingPage from "./page/BookingPage";
import MainPage from "./page/MainPage";
// import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import LoginPage from "./page/LoginPage";
// import Calendar from "./components/Canendar";
import BookingPage from "./page/BookingPage";
import Test1 from "./components/Test1";

function App() {
  return (
    <>
      <Header />
      <NavigationBar></NavigationBar>
      <Router>
        <Routes>
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
        </Routes>
      </Router>

      <Footer />
    </>
  );
}

export default App;
