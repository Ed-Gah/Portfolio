import React from "react";

export const ContactSection = (props: any) => {
  return (
    <div>
      <div>
        <p className=" text-gray-400 pt-2"> {props.name}</p>
        <input className={`border-b-2 mt-8 ${props.className}`} />
      </div>
    </div>
  );
};
