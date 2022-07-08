import React from "react";
import { ResumerSection } from "../components/ResumerSection";
import { AiFillSignal } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsCalendarEvent } from "react-icons/bs";

const Resume = () => {
  const img3 = require("../assets/images/ed3.JPG");
  return (
    <React.Fragment>
      <h1 className="  xl:mb-8 xl:text-5xl mt-48 xl:ml-96 text-gray-600">
        Resume
      </h1>
      <div className="mx-auto  xl:-ml-24">
        <div className=" flex mt-16">
          <img src={img3} className=" w-1/3 max-h-96" alt="resumePic" />
          <div>
            <h1 className=" text-2xl text-gray-700 pb-8 xl:ml-28">
              Work Experience
            </h1>
            <div>
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
            <div className=" mt-8">
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
            <div className=" mt-8">
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
            <div className=" mt-8">
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
            <h1 className=" text-2xl text-gray-700 pb-8 xl:ml-28 mt-12">
              Education
            </h1>
            <div>
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
            <div className=" mt-8">
              <ResumerSection
                title="Senior Front End Developter"
                kind="fulltime"
                icon={<AiFillSignal className="text-gray-400" size={20} />}
                subTitle="Bohikor, SAS"
                icon1={
                  <BsCalendarEvent className="text-gray-400 mr-4" size={20} />
                }
                icon2={<GoLocation className="text-gray-400 ml-4" size={20} />}
                subTitle2="Soppo, Buea"
                period="August 2021 - Present"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Resume;
