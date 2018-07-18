import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput, FormButton} from "../formFields";
import TextLink from "../TextLink";
class NewsletterNewForm extends Component{
  render(){
    const {handleSubmit} = this.props;
    return(
      <form className="new-newsletter-form" onSubmit={handleSubmit}>
        <Field component={FormInput} name="email" title="Email" type="email" className="new-newsletter-form__email" placeholder="Enter Email" />
      </form>
    );
  }
}
NewsletterNewForm = reduxForm({
  form: 'signin'
})(NewsletterNewForm);
export default NewsletterNewForm;
