import React, {Component} from "react";
import NewsletterNewForm from "../newsletter/newsletterNewForm";
class NewRequest extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
    console.log("Submitting", fields);
  }
  onCancel = () => {
    this.props.history.push("/dashboard");
  }
  render(){
    return(
      <div className="new-request">
        <NewsletterNewForm onSubmit={(event) => this.onSubmit(event)} onCancel={() => this.onCancel()}/>
      </div>
    );
  }
}
export default NewRequest;
