import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput, FormButton} from "../formFields";
import TextLink from "../TextLink";
class SignInForm extends Component{
  render(){
    const {handleSubmit} = this.props;
    return(
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <Field component={FormInput} name="email" title="Email" type="email" className="sign-in-form__email" placeholder="Enter Email" />
        <Field component={FormInput} name="password" title="Password" type="password" className="sign-in-form__email" placeholder="Enter Password" />
        <Field name="login" title="Log In" className="sign-in-form__log-in" component={FormButton} type="submit"/>
        <div className="sign-in-form__text-links">
          <TextLink text="Forgot Password" to="/forgotpassword" />
          <TextLink text="Not a member? Register here." to="/signup" />
        </div>
      </form>
    );
  };
}
SignInForm = reduxForm({
  form: 'signin'
})(SignInForm);
export default SignInForm;
