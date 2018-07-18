import React, {Component} from "react";
import NewsletterNewForm from "./newsletterNewForm";
class NewNewsletter extends Component {
  onSubmit = (fields) => {
    console.log("Submitting", fields);
  }
  render(){
    return(
      <div className="new-newsletter">
        <NewsletterNewForm onSubmit={(event) => this.onSubmit(event)}/>
      </div>
    );
  }
}
export default NewNewsletter;
