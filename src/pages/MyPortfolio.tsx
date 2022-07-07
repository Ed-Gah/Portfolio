import React from "react";
import NavLinks from "../components/NavLinks";
import { PortfolioLinks } from "../components/PortfolioLinks";
import { Galary } from "../components/Galary";

const MyPortfolio = () => {
  return (
    <React.Fragment>
      {/* <NavLinks
        navDiv="nav-div"
        linkDiv="nav-links"
        logo="logo"
        menu="text-gray-700"
      /> */}
      <div className="mt-48 xl:-ml-16">
        <div className=" mt-4">
          <PortfolioLinks />
        </div>
        <div>
          <Galary />
        </div>
      </div>
    </React.Fragment>
  );
};

export default MyPortfolio;
