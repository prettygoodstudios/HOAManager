import React, {Component} from "react";
import RequestsBox from "./requestsBox";

class RequestsBoxes extends Component{
  render(){
    return(
      <div className='requests-boxes'>
        <RequestsBox title="Pending" count={2} />
        <RequestsBox title="In Progress" count={5} />
        <RequestsBox title="Complete" count={3} />
      </div>
    );
  }
}
export default RequestsBoxes;
