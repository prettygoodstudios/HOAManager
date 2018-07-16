import React, {Component} from "react";
import FormTitle from "../formTitle";
import SignInForm from "./SignInForm";
class SignIn extends Component{
  render(){
    return(
      <div className="sign-in">
        <FormTitle className="sign-in-title" text="Log In"/>
        <SignInForm />
      </div>
    );
  }
}
export default SignIn;
