import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput, FormButton} from "../formFields";
import TextLink from "../TextLink";
class SignUpForm extends Component{
  render(){
    const {handleSubmit} = this.props;
    return(
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <Field component={FormInput} name="unit" title="Unit Number" type="number" className="sign-up-form__unit" placeholder="Enter Unit Number" input=""/>
        <Field component={FormInput} name="name" title="Full Name" type="text" className="sign-up-form__name" placeholder="Enter Full Name" input=""/>
        <Field component={FormInput} name="email" title="Email" type="email" className="sign-up-form__email" placeholder="Enter Email" input=""/>
        <Field component={FormInput} name="password" title="Password" type="password" className="sign-up-form__email" placeholder="Enter Password" input=""/>
        <Field name="login" title="Log In" className="sign-up-form__log-in" component={FormButton} type="submit"/>
        <div className="sign-up-form__text-links">
          <TextLink text="Forgot Password" to="/forgotpassword" />
          <TextLink text="Already Registerd? Login." to="/signin" />
        </div>
      </form>
    );
  };
}
SignUpForm = reduxForm({
  form: 'signup'
})(SignUpForm);
export default SignUpForm;
