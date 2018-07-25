import React, {Component} from "react";

import Button from "../button";

class RequestsGrid extends Component {

  handleAddRequest = () => {
    console.log("Requifdasioua");
  }

  render(){
    return(
      <div className="requests-grid">
          <Button icon={"fas fa-plus"} className="requests-grid__button" callback={() => this.handleAddRequest()}/>
      </div>
    );
  }
}

export default RequestsGrid;
