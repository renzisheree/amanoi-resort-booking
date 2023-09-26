import "./index.scss";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import BookingPage from "./page/BookingPage";
import MainPage from "./page/MainPage";
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
