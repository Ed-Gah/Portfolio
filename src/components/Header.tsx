import React from "react";
import NavLinks from "./NavLinks";
// import { Menu } from "@mui/icons-material";

const Header = (props: any) => {
  const [scroll, setScroll] = React.useState(false);
  const toggle = () => {
    scroll === true ? setScroll(false) : setScroll(true);
  };

  let reIm = require("../assets/images/image1.jpg");
  return (
    <div>
      <button
        className=" bg-blue-700 text-gray-200 p-3 rounded-lg mt-2 ml-3"
        onClick={toggle}
      >
        Click Me
      </button>
      {scroll ? (
        <NavLinks navDiv="nav-div" linkDiv="nav-links" logo="logo" menu="text-gray-700" />
      ) : (
        <div className="back-im">
          <NavLinks
            navDiv="nav-home-div"
            linkDiv="nav-home-links"
            logo="logo"
            logoText="text-gray-100"
            menu="text-gray-100"
          />
          <div>
            <h1 className=" xl:text-6xl xl:mt-48 main-text">
              I'm Edwin Gah
            </h1>
            <h1 className=" xl:text-6xl text-9xl text-gray-50 font-sans text-center pb-32">
              A Front-end Developer
            </h1>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
