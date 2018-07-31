import React, {Component} from "react";
import icon from "../icon";
import Button from '../button';
import AnimateHeight from "react-animate-height";
import {ROOT_URL} from "../../config";
import {connect} from "react-redux";
import * as actions from "../../actions";

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

  handleStatus = () => {
    const {_id, status} = this.props;
    this.props.changeStatus({_id, status}, () => {
      this.props.fetchRequests();
    });
  }

  render(){
    const {status, title, body, imageUrl, date, _id} = this.props;
    const parsedDate = new Date(date);
    let iconString = "fas fa-wrench";
    let mainIcon = "fas fa-exclamation-triangle";
    switch(status){
      case 'in-progress':
        iconString = "fas fa-check-square";
        mainIcon = "fas fa-wrench"
        break;
      case 'complete':
        iconString = "fas fa-exclamation-triangle";
        mainIcon = 'fas fa-check-square';
        break;
      case 'pending':
        iconString = "fas fa-wrench";
        mainIcon = "fas fa-exclamation-triangle";
        break;
    }
    return(
      <div className={`requests-item ${this.state.height == "auto" ? "bg-f8" : ""}`}>
        {icon(mainIcon,"requests-item__icon")}
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
        <Button icon={iconString} className="requests-item__move" callback={() => this.handleStatus()}/>
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
export default connect(null, actions)(RequestsItem);
