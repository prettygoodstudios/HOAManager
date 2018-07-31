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
        <NewsletterNewForm title="New Request" onSubmit={(event) => this.onSubmit(event)} onCancel={() => this.onCancel()} field1Placeholder='Service Request Title Here' field1Title='Service Request Title' field2Title="Service Request Description" field2Placeholder="Service Request Description Here"/>
      </div>
    );
  }
}
export default NewRequest;
