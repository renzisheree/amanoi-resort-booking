import { Fragment } from "react";
import Header from "./Header";
import NavigationBar from "../components/NavigationBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
// import Footer from "./Footer";

const Main = () => {
  return (
    <Fragment>
      <Header></Header>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </Fragment>
  );
};

export default Main;
