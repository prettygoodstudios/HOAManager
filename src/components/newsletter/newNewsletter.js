import React, {Component} from "react";
import NewsletterNewForm from "./newsletterNewForm";
class NewNewsletter extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
    console.log("Submitting", fields);
  }
  onCancel = () => {
    this.props.history.push("/dashboard");
  }
  render(){
    return(
      <div className="new-newsletter">
        <NewsletterNewForm onSubmit={(event) => this.onSubmit(event)} onCancel={() => this.onCancel()} field1Placeholder={"Newlsetter Title Here"} field1Title={"Title"} field2Placeholder="Newsletter Body Here" field2Title="Newsletter Body"/>
      </div>
    );
  }
}
export default NewNewsletter;
