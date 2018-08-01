import React, {Component} from "react";
import {connect} from "react-redux";
import history from "../../history";

class RequireAdmin extends Component {
  render(){
    if(this.props.admin){
      return(
        {...this.props.children}
      );
    }else{
      return(<div></div>);
    }
  }
}
function mapStateToProps(state){
  const {admin} = state.auth.user;
  return {admin: admin};
}

export default connect(mapStateToProps,null)(RequireAdmin);
