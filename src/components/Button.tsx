import React from "react";

export const Button = (props: any) => {
  return (
    <div>
      <button 
      className={`${props.className}`} 
      onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
};
