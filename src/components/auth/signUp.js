import React, {Component} from "react";
import SignUpForm from "./signUpForm";
import FormTitle from "../formTitle";
class SignUp extends Component{
  render(){
    return(
      <div className="sign-up">
        <FormTitle className="sign-in-title" text="Create an Account"/>
        <SignUpForm />
      </div>
    );
  }
}
export default SignUp;
