import React from "react";
const FormTitle = (props) => {
  const {className, text} = props;
  return(
    <h1 className={`form-title ${className}`}>
      {text}
    </h1>
  );
}
export default FormTitle;
