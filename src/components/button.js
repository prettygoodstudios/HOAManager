import React from "react";
function Button ({callback, text, icon, className}){
  if (icon){
    return (
      <a onClick={callback} className={`${className} button`}><i className={icon}></i></a>
    );
  }
}
export default Button;
