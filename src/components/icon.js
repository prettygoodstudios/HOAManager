import React from "react";
export default function icon(i, className, callback){
  return(
    <a className={className} onClick={() => callback()}>
      <i className={i}></i>
    </a>
  );
}
