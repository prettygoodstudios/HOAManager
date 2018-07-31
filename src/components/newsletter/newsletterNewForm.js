import React, {Component} from "react";
import {reduxForm, Field} from "redux-form";
import {FormInput, FormButton, FormTextArea, FormImage} from "../formFields";
import TextLink from "../TextLink";
class NewsletterNewForm extends Component{


  render(){
    const { handleSubmit, editNewsletter} = this.props;
    const { field1Placeholder, field1Title,  field2Placeholder, field2Title} = this.props;
    console.log("Edit Newsletter",editNewsletter);
    let title = null;
    let body = null;
    let imageURL = null;
    if(editNewsletter){
      const {title, body, imageURL} = editNewsletter;
    }
    return(
      <form className="new-newsletter-form" onSubmit={handleSubmit}>
        <div></div>
        <Field component={FormInput} name="title" title={field1Title} type="text" className="new-newsletter-form__title" placeholder={field1Placeholder} editValue={title}/>
        <Field component={FormTextArea} name="body" title={field2Title} type="text" className="new-newsletter-form__body" placeholder={field2Placeholder} editValue={editNewsletter}/>
        <Field component={FormImage} name="image" title="Image" type="file" className="new-newsletter-form__image" placeholder="Newsletter Image" src={editNewsletter}/>
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
