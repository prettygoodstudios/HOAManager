import React, {Component} from "react";
import SignUpForm from "./signUpForm";
import FormTitle from "../formTitle";
class SignUp extends Component{
  onSubmit = (fields) => {
    console.log('Trying to submit', fields);
  }
  render(){
    return(
      <div className="sign-up">
        <FormTitle className="sign-in-title" text="Create an Account"/>
        <SignUpForm onSubmit={(fields) => this.onSubmit(fields)}/>
      </div>
    );
  }
}
export default SignUp;
