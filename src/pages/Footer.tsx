import React from "react";
import { FooterSection } from "../components/FooterSection";
import { Connect } from "../components/Connect";
import { MdFacebook } from "react-icons/md";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  const footerLinks = [
    { name: "JavaScript", link: "/" },
    { name: "TypeScript", link: "/" },
    { name: "Nodejs", link: "/" },
    { name: "Expressjs", link: "/" },
  ];

  const frameworks = [
    { name: "React", link: "/" },
    { name: "React Native", link: "/" },
    { name: "Native Base", link: "/" },
    { name: "Tailwind CSS", link: "/" },
  ];

  const otherTech = [
    { name: "Mongo DB", link: "/" },
    { name: "REST", link: "/" },
    { name: "Firebase", link: "/" },
    { name: "React Native", link: "/" },
  ];

  const contacts = [
    { name: "1st Trust Building, Buea, Cameroon", link: "/" },
    { name: "+237 675534139", link: "/" },
    { name: "chuedgah@gmail.com", link: "/" },
    // { name: "React Native", link: "/" },
  ];

  return (
    <div className=" max-w-6xl mx-auto">
      <div className=" flex">
        <div className=" flex">
          <div className=" mr-20">
            <FooterSection name="Language / Framework" links={footerLinks} />
          </div>
          <div className=" mr-20">
            <FooterSection name="Frameworks" links={frameworks} />
          </div>
          <div className=" mr-20">
            <FooterSection name="Others" links={otherTech} />
          </div>
          <div>
            <FooterSection name="Contact" links={contacts} />
          </div>
        </div>

        <div className=" ml-20 mt-12">
            <h1 className=" text-lg">Connect</h1>
          <div className=" mr-20 flex mb-20">
            <Connect icon={<AiFillGithub className=" text-gray-500 text-3xl mr-2" />} />
            <Connect icon={<AiFillLinkedin className=" text-gray-500 text-3xl mr-2" />} />
            <Connect icon={<AiFillTwitterCircle className=" text-gray-500 text-3xl mr-2" />} />
            <Connect icon={<MdFacebook className=" text-gray-500 text-3xl mr-2" />} />
            <Connect icon={<AiOutlineWhatsApp className=" text-gray-500 text-3xl mr-2" />} />
          </div>
        </div>
      </div>

      <p className="mx-auto text-gray-600 text-sm ml-96 mt-8 py-20">
        Copyright 2022 All right reserved <p className="ml-14 text-gray-700">Made by Ed-Gah</p>
      </p>
    </div>
  );
};

export default Footer;
