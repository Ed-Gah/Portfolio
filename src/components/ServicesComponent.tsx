import React from "react";

export const ServicesComponent = (props: any) => {
  return (
    <div className={` border-2 border-gray-200 p-12 justify-center`}>
      <div className=" xl:justify-center"> {props.icon}</div>

      <h1 className={` text-center mb-4 text-gray-700 ${props.h1ClassName}`}>{props.title}</h1>
      <p className={` text-center text-gray-400 ${props.pClassName}`}>{props.description}</p>
    </div>
  );
};
