import React from "react";

export const ContactInfo = (props: any) => {
  return (
    <div>
      <div className=" flex mt-6">
        <p className=" mt-1 mr-3"> {props.icon} </p>
        <p className=" text-gray-500"> {props.info} </p>
      </div>
    </div>
  );
};
