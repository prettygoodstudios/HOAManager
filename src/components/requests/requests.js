import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

import RequestsItem from "./requestsItem";

class Requests extends Component{

  correctRequestType = (r) => {
    let val = false;
    switch(r.status){
      case "progress":
        val =  this.props.selectedRequest == 'In progress';
        break;
      case "pending":
        val =  this.props.selectedRequest == 'Pending';
        break;
      case "complete":
        val = this.props.selectedRequest == 'Complete';
        break;
    }
    return val;
  }

  render(){
    const filtered = this.props.requests.filter((r) => {
      return this.correctRequestType(r);
    });
    return(
      <div className='requests'>
        {filtered.map((r) => {
          return(
            <RequestsItem key={r._id} {...r} />
          );
        })}
      </div>
    )
  }
}

function mapStateToProps(state){
  const requests = state.requests.requests;
  return{
    requests,
    selectedRequest: state.requests.selectedRequests
  }
}

export default connect(mapStateToProps, null)(Requests);
