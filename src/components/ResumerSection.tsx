import React from "react";

export const ResumerSection = (props: any) => {
  return (
    <div className=" xl:ml-28">
      <div>
        <div className="flex">
          <p className=" text-gray-700 pb-4 mr-4">{props.title}</p>
          <p className="float-right ml-96 border-2 border-gray-100 my-auto py-1 px-4 rounded-3xl text-green-600 bg-gray-100">
            {props.kind.toUpperCase()}
          </p>
        </div>
        <div className="flex justify-between ">
          <div className=" flex">
            <div className=" flex">
              {props.icon}
              <p className=" text-gray-400 ml-2">{props.subTitle}</p>
            </div>
            <div className=" flex">
              {props.icon2}
              <p className=" text-gray-400 ml-2">{props.subTitle2}</p>
            </div>
          </div>
          <div className=" ml-60">
            <div className="flex">
              {props.icon1}
              <p className=" text-gray-400">{props.period}</p>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-4 text-gray-50" />
    </div>
  );
};
