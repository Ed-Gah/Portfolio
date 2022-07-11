import React from "react";

export const Connect = (props: any) => {
  return (
    <div>
      <h1> {props.name} </h1>
      <a href="/">{props.icon}</a>
    </div>
  );
};
