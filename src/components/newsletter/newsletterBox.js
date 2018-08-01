import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class NewsletterBox extends Component {
  render(){
    const {date} = this.props;
    const parsedDate = new Date(date);
    if(!date){
      console.log("No Date");
      return <div>...fetching newsletters</div>;
    }
    return(
      <div className="newsletter-box">
        <div className="newsletter-box__day">{parsedDate.getDate()}</div>
        <div className="newsletter-box__month-year">{`${months[parsedDate.getUTCMonth()]} ${parsedDate.getFullYear()}`}</div>
        <div className="newsletter-box__caret"></div>
      </div>
    );
  }
}


export default NewsletterBox;
