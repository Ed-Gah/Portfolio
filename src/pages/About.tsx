import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { AboutSection } from "../components/AboutSection";
import NavLinks from "../components/NavLinks";
import { Button } from "../components/Button";

const About = () => {
  const img3 = require("../assets/images/ed3.JPG");
  return (
    <React.Fragment>
      {/* <div className=" xl:z-0">
        <NavLinks
          navDiv="nav-div"
          linkDiv="nav-links"
          logo="logo"
          menu="text-gray-700"
        />
      </div> */}

      <div className=" xl:max-w-6xl lg:max-w-screen-lg xl:mx-auto pt-12 mt-12">
        <div className=" xl:flex">
          <div className="xl:-ml-12">
            <img src={img3} alt="about" width={2500} />
          </div>
          <div className="xl:ml-32">
            <h1 className=" xl:text-5xl xl:text-gray-700"> My Bio</h1>
            <p className=" xl:mt-4 xl:text-gray-400">
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts. Separated
              they live in Bookmarksgrove right at the coast of the Semantics, a
              large language ocean.
            </p>
            <p className="xl:mt-4 xl:text-gray-400">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your mouth.
            </p>
            <div className=" xl:mt-4 flex justify-evenly">
              <AboutSection
                title="React JS"
                percentage={87}
                pathWidth={3}
                pathColor="gray"
                trailColor="whitesmoke"
                fill="gray"
                trailWidth={2}
                size={100}
                icon={<FaReact className=" text-gray-600 mt-1" size={40} />}
                textColor=" text-gray-600"
              />
              <AboutSection
                title="React Native"
                percentage={95}
                pathWidth={3}
                pathColor="#388E3C"
                trailColor="whitesmoke"
                fill="#388E3C"
                trailWidth={4}
                size={100}
                icon={
                  <TbBrandReactNative
                    className=" text-green-700 mt-1"
                    size={40}
                  />
                }
                textColor=" text-green-700"
              />
            </div>
            <div className=" xl:mt-4 flex justify-evenly">
              <AboutSection
                title="React JS"
                percentage={87}
                pathWidth={3}
                pathColor="gray"
                trailColor="whitesmoke"
                fill="gray"
                trailWidth={2}
                size={100}
                icon={<FaReact className=" text-gray-600 mt-1" size={40} />}
                textColor=" text-gray-600"
              />
              <AboutSection
                title="React Native"
                percentage={95}
                pathWidth={3}
                pathColor="#388E3C"
                trailColor="whitesmoke"
                fill="#388E3C"
                trailWidth={4}
                size={100}
                icon={
                  <TbBrandReactNative
                    className=" text-green-700 mt-1"
                    size={40}
                  />
                }
                textColor=" text-green-700"
              />
            </div>
            <div className=" xl:mt-4 flex justify-evenly">
              <AboutSection
                title="Tailwind CSS"
                percentage={80}
                pathWidth={3}
                pathColor="gray"
                trailColor="whitesmoke"
                fill="gray"
                trailWidth={2}
                size={100}
                icon={
                  <SiTailwindcss className=" text-blue-400 mt-1" size={40} />
                }
                textColor=" text-blue-400"
              />
              <AboutSection
                title="Native-Base"
                percentage={92}
                pathWidth={3}
                pathColor="gray"
                trailColor="whitesmoke"
                fill="gray"
                trailWidth={4}
                size={100}
                icon={
                  <TbBrandReactNative
                    className=" text-gray-600 mt-1"
                    size={40}
                  />
                }
                textColor=" text-gray-600"
              />
            </div>
            <div className=" xl:flex justify-evenly mt-4">
              <Button
                title="Hire Me"
                className=" border-2 py-2 px-4 rounded-xl border-gray-300"
              />
              <Button
                title="View CV"
                className=" border-2 py-2 px-4 rounded-xl border-gray-50 bg-gray-600 text-gray-50"
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
