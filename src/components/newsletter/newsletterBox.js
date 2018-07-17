import React from "react";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
export default function({date}) {
  return(
    <div className="newsletter-box">
      <div className="newsletter-box__day">{date.getDate()}</div>
      <div className="newsletter-box__month-year">{`${months[date.getUTCMonth()]} ${date.getFullYear()}`}</div>
      <div className="newsletter-box__caret"></div>
    </div>
  );
}
