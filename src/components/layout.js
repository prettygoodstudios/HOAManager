import React, {Component} from "react";
import Header from "./header";
class Layout extends Component{
  render(){
    return(
      <div className="layout">
        <Header />
        <div className="bar"></div>
        {this.props.children}
      </div>
    );
  }
}
export default Layout;
