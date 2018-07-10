import React, {Component} from "react";

class HeaderWrapper extends Component{
  render(){
    return(
      <div className="header-wrapper">
        <h1>HOA Manager</h1>
        <p>A property managment solution.</p>
        {this.props.children}
      </div>
    );
  }
}
export default HeaderWrapper;
