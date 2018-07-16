import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput} from "../formFields";
class SignInForm extends Component{
  render(){
    return(
      <form className="sign-in-form">
        <Field component={FormInput} name="email" title="Email" type="email" className="sign-in-form__email" placeholder="Enter Email" input=""/>
        <Field component={FormInput} name="password" title="Password" type="password" className="sign-in-form__email" placeholder="Enter Password" input=""/>
      </form>
    );
  };
}
SignInForm = reduxForm({
  form: 'signin'
})(SignInForm);
export default SignInForm;
