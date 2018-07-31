import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

import Button from "../button";
import RequestsBoxes from "./requestsBoxes";
import Requests from "./requests";
import history from "../../history";

class RequestsGrid extends Component {

  componentDidMount(){
    this.props.fetchRequests();
  }

  handleAddRequest = () => {
    history.push("/requests/new");
  }

  render(){
    return(
      <div className="requests-grid">
          <Button icon={"fas fa-plus"} className="requests-grid__button" callback={() => this.handleAddRequest()}/>
          <RequestsBoxes />
          <Requests />
      </div>
    );
  }
}

export default connect(null, actions)(RequestsGrid);
