import React, {Component} from "react";
import icon from "../icon";
import Button from '../button';
import AnimateHeight from "react-animate-height";
import {ROOT_URL} from "../../config";

class RequestsItem extends Component{

  constructor(){
    super();
    this.state = {
      height: 0
    }
  }

  toggle = () => {
    this.setState({
      height: this.state.height == "auto" ? 0 : "auto"
    });
  }

  render(){
    const {status, title, body, imageUrl, date} = this.props;
    const parsedDate = new Date(date);

    return(
      <div className={`requests-item ${this.state.height == "auto" ? "bg-f8" : ""}`}>
        {icon("fas fa-exclamation-triangle","requests-item__icon")}
        <div className="requests-item__title">
          <div className="requests-item__title__text">{title}</div>
          {icon("fas fa-sort-down","requests-item__arrow",() => this.toggle())}
        </div>
        <div className="requests-item__tenant-unit">
          Joe - 223
        </div>
        <div className="requests-item__date">
          {`${parsedDate.getMonth()+1}/${parsedDate.getDate()}/${parsedDate.getFullYear()}`}
        </div>
        <Button icon="fas fa-wrench" className="requests-item__move" callback={() => console.log("Change Request status.")}/>
        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="requests-item__description">
              <img src={`${ROOT_URL}/${imageUrl}`} className="requests-item__description-image"/>
              <p className="requests-item__description-text">
                {body}
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}
export default RequestsItem;
