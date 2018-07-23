import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class NewsletterBox extends Component {
  render(){
    const {date} = this.props;
    if(!date){
      console.log("No Date");
      return <div>...fetching newsletters</div>;
    }
    return(
      <div className="newsletter-box">
        <div className="newsletter-box__day">{date.getDate()}</div>
        <div className="newsletter-box__month-year">{`${months[date.getUTCMonth()]} ${date.getFullYear()}`}</div>
        <div className="newsletter-box__caret"></div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {newsletters} = state.newsletter;
  const latest = newsletters[0];
  return {
    ...latest
  };
}

export default connect(mapStateToProps, actions)(NewsletterBox);
