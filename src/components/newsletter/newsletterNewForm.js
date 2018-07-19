import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput, FormButton, FormTextArea, FormImage} from "../formFields";
import TextLink from "../TextLink";
class NewsletterNewForm extends Component{
  render(){
    const {handleSubmit} = this.props;
    return(
      <form className="new-newsletter-form" onSubmit={handleSubmit}>
        <div></div>
        <Field component={FormInput} name="title" title="Title" type="text" className="new-newsletter-form__title" placeholder="Newsletter Title" />
        <Field component={FormTextArea} name="body" title="Body" type="text" className="new-newsletter-form__body" placeholder="Newsletter Body" />
        <Field component={FormImage} name="image" title="Image" type="file" className="new-newsletter-form__image" placeholder="Newsletter Image" />
        <Field name="cancel" title="Cancel" className="new-newsletter-form__cancel" component={FormButton} type="button" small={true} red={false} onClick={this.props.onCancel}/>
        <Field name="submit" title="Submit" className="new-newsletter-form__submit" component={FormButton} type="submit" small={true} red={true} />
      </form>
    );
  }
}
NewsletterNewForm = reduxForm({
  form: 'signin'
})(NewsletterNewForm);
export default NewsletterNewForm;
