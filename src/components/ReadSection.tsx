import React from "react";

export const ReadOnMediumSection = (props: any) => {
  return (
    <div>
      <p className=" text-gray-400 my-1">{props.date.toUpperCase()}</p>
      <div className=" flex">
        <h1 className="text-gray-700 text-2xl mr-60"><a href="/">{props.heading}</a></h1>
        <p className=" ml-96 text-gray-400">{props.time.toUpperCase()}</p>
      </div>
      <hr className=" mt-8" />
    </div>
  );
};
