import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";
import FormTitle from "../formTitle";
import SignInForm from "./SignInForm";
class SignIn extends Component{
  onSubmit = (fields) => {
    this.props.signIn(fields, () => {
      console.log("Success!");
      this.props.history.push("/dashboard");
    });
  }
  render(){
    return(
      <div className="sign-in">
        <FormTitle className="sign-in-title" text="Log In"/>
        <SignInForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}
export default connect(null, actions)(SignIn);
