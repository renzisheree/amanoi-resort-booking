import MenuBar from "../components/MenuBar";
import MiddleLogo from "../components/MiddleLogo";
import LangChooser from "../components/LangChooser";
const Header = () => {
  return (
    <div className={`pt-5 w-full `}>
      <div
        className="flex items-center justify-around
        align-middle"
      >
        <div className="left-header-bar">
          <MenuBar></MenuBar>
        </div>

        <div className="center-header-bar">
          <MiddleLogo
            srcImg="https://www.aman.com/themes/custom/aman/logo.svg
          "
            width={200}
          ></MiddleLogo>
        </div>
        <div className="right-header-bar">
          <LangChooser></LangChooser>
        </div>
      </div>
    </div>
  );
};

export default Header;
