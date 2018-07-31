import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
class RequestsBox extends Component {
  render(){
    const {count, title, selected} = this.props;
    if(!count && count != 0){
      console.log("No Count");
      return <div>...fetching requests</div>;
    }
    const isActive = (selected == title);
    return(
      <a className={`requests-box  ${isActive ? "requests-box-active" : "requests-box-inactive"}`} onClick={() => this.props.changeSelectedRequestType(title)}>
        <div className="requests-box__count">{count}</div>
        <div className="requests-box__title">{title}</div>
        <div className="requests-box__caret"></div>
      </a>
    );
  }
}

function mapStateToProps(state){
  const title = state.requests.selectedRequests;
  return {
    selected: title
  }
}

export default connect(mapStateToProps, actions)(RequestsBox);
