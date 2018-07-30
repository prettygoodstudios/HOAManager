import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class RequestsBox extends Component {
  render(){
    const {count, title} = this.props;
    if(!count){
      console.log("No COunt");
      return <div>...fetching requests</div>;
    }
    return(
      <div className="requests-box">
        <div className="requests-box__count">{count}</div>
        <div className="requests-box__title">{title}</div>
        <div className="requests-box__caret"></div>
      </div>
    );
  }
}


export default RequestsBox;
