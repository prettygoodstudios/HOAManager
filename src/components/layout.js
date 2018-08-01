import React, {Component} from "react";
import {connect} from "react-redux";

import Header from "./header";
class Layout extends Component{
  render(){
    const {hideBar, title, subtitle} = this.props;
    return(
      <div className="layout">
        <Header title={title} subtitle={subtitle}/>
        { !hideBar && <div className="bar"></div>}
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state.header
  }
}

export default connect(mapStateToProps, null)(Layout);
