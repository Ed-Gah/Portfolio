import React from "react";
import Progressbar from "react-js-progressbar";

export const AboutSection = (props: any) => {
  return (
    <div>
      <div className=" xl:flex">
        {props.icon}
        <h1 className={` xl:mb-8 xl:ml-4 xl:mt-2 ${props.textColor}`}>{props.title}</h1>
      </div>
      <Progressbar
        input={props.percentage}
        pathWidth={props.pathWidth}
        pathColor={props.pathColor}
        trailColor={props.trailColor}
        trailWidth={props.trailWidth}
        textStyle={{ fill: props.fill }}
        size={props.size}
      />
    </div>
    // </Progressbar>
  );
};
