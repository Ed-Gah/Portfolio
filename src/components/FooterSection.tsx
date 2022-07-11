import React from "react";

export const FooterSection = (props: any) => {
  return (
    <div>
      <h1 className=" text-lg text-gray-800 mt-12 mb-8"> {props.name} </h1>
      <ul className="">
        {props.links.map((link: any) => (
          <li key={link.name} className=" py-1">
            <a className=" text-sm text-gray-500" href={link.link}> {link.name} </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
