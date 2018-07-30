import React, {Component} from "react";
import icon from "../icon";
import Button from '../button';

class RequestsItem extends Component{
  render(){
    return(
      <div className="requests-item">
        {icon("fas fa-exclamation-triangle","requests-item__icon")}
        <div className="requests-item__title">
          The power is out.
        </div>
        <div className="requests-item__tenant-unit">
          Joe - 223
        </div>
        {icon("fas fa-sort-down","requests-item__arrow")}
        <div className="requests-item__date">
          2/2/2016
        </div>
        <Button icon="fas fa-wrench" className="requests-item__move" callback={() => console.log("Change Request status.")}/>
      </div>
    );
  }
}
export default RequestsItem;
