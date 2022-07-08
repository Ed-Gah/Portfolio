import React from "react";
import { ContactSection } from "../components/ContactSection";
import { ContactInfo } from "../components/ContactInfo";
import { Message } from "../components/Message";
import { ImLocation } from "react-icons/im";
import { IoMdCall } from "react-icons/io";
import { AiTwotoneMail } from "react-icons/ai";
import { Button } from "../components/Button";

const Contact = () => {
  return (
    <div>
      <h1 className="  xl:mb-8 xl:text-5xl mt-48 xl:ml-96 text-gray-600">
        Contact Me
      </h1>
      <div className=" flex">
        <div className="">
          <div>
            <div className="flex">
              <div className=" mr-8">
                <ContactSection name="First name" className=" w-80" />
              </div>
              <div>
                <ContactSection name="Last name" className="w-80" />
              </div>
            </div>
            <ContactSection name="Email address" className=" w-full" />
            <Message title="Message" />
          </div>
        </div>
        <div className="ml-24">
          <h1 className=" text-gray-700 text-xl"> Contact Info </h1>
          <ContactInfo
            icon={<ImLocation className=" text-gray-400" size={15} />}
            info="1st Trust Building, Buea, Cameroon"
          />
          <ContactInfo
            icon={<IoMdCall className=" text-gray-400" size={15} />}
            info="+237 675534139"
          />
          <ContactInfo
            icon={<AiTwotoneMail className=" text-gray-400" size={15} />}
            info="chuedgah@gmail.com"
          />
        </div>
      </div>
      <Button
        title="Send Message"
        className=" border-2 mt-3 py-2 px-4 rounded-xl border-gray-50 bg-gray-600 text-gray-50"
      />
    </div>
  );
};

export default Contact;
