import React, {Component} from "react";
import icon from "../icon";
import Button from '../button';
import AnimateHeight from "react-animate-height";

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
    return(
      <div className="requests-item">
        {icon("fas fa-exclamation-triangle","requests-item__icon")}
        <div className="requests-item__title">
          <div className="requests-item__title__text">The power is out.</div>
          {icon("fas fa-sort-down","requests-item__arrow",() => this.toggle())}
        </div>
        <div className="requests-item__tenant-unit">
          Joe - 223
        </div>
        <div className="requests-item__date">
          2/2/2016
        </div>
        <Button icon="fas fa-wrench" className="requests-item__move" callback={() => console.log("Change Request status.")}/>
        <div className="requests-item__description">
          <AnimateHeight duration={300} height={this.state.height}>
            <div className="requests-item__description">
              <img src="http://via.placeholder.com/160x94" className="requests-item__description-image"/>
              <p className="requests-item__description-text">
                jhafdkafjdksjdfaskljadfsjklfdasklfdslkljioqrueiorqewujdslkajfl.
              </p>
            </div>
          </AnimateHeight>
        </div>
      </div>
    );
  }
}
export default RequestsItem;
