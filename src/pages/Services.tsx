import React from "react";
import { ServicesComponent } from "../components/ServicesComponent";
import NavLinks from "../components/NavLinks";
import { AiOutlineMobile } from "react-icons/ai";
import { MdWeb } from "react-icons/md";
import { RiDatabaseLine } from "react-icons/ri";

const Services = () => {
  return (
    <React.Fragment>
      {/* <NavLinks
        navDiv="nav-div"
        linkDiv="nav-links"
        logo="logo"
        menu="text-gray-700"
      /> */}
      <h1 className="  xl:mb-8 xl:text-5xl mt-48 xl:ml-96 text-gray-600">Services</h1>
      <div className=" mx-auto  xl:-ml-24 ">
        <div className=" xl:container xl:flex">
          <div className=" m-4">
            <ServicesComponent
              icon={
                <AiOutlineMobile
                  className=" text-gray-400 mx-auto mb-4"
                  size={60}
                />
              }
              title="Mobile Apps"
              description={`Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
            />
          </div>
          <div className=" m-4">
            <ServicesComponent
              icon={<MdWeb className=" text-gray-400 mx-auto mb-4" size={60} />}
              title="Web-Apps / Sites"
              description={`Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
            />
          </div>
          <div className=" m-4">
            <ServicesComponent
              icon={
                <RiDatabaseLine
                  className=" text-gray-400 mx-auto mb-4"
                  size={60}
                />
              }
              title="Backend"
              description={`Far far away, behind the word  mountains, far from the countries Vokalia and Consonantia, there live the blind texts.`}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Services;
