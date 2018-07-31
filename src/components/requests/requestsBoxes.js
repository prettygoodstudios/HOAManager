import React, {Component} from "react";
import RequestsBox from "./requestsBox";

import {connect} from "react-redux";

class RequestsBoxes extends Component{
  render(){
    return(
      <div className='requests-boxes'>
        <RequestsBox title="Pending" count={this.props.pending} />
        <RequestsBox title="In Progress" count={this.props.progress} />
        <RequestsBox title="Complete" count={this.props.complete} />
      </div>
    );
  }
}

function mapStateToProps(state){
  const {requests} = state.requests;
  let pending = 0;
  let progress = 0;
  let complete = 0;
  requests.map((r) => {
    switch(r.status){
      case "pending":
        pending++;
        break;
      case "in-progress":
        progress++;
        break;
      case "complete":
        complete++;
        break;
    }
  });
  return{
    pending,
    progress,
    complete
  }
}

export default connect(mapStateToProps, null)(RequestsBoxes);
