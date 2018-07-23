import React, {Component} from "react";
import NewsletterNewForm from "./newsletterNewForm";
class EditNewsletter extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
    console.log("Submitting", fields);
  }
  onCancel = () => {
    console.log("canceling");
  }

  componentDidMount(){
    console.log(this.props.match.params.id);
  }

  render(){
    return(
      <div className="new-newsletter">
        <NewsletterNewForm onSubmit={(event) => this.onSubmit(event)} onCancel={() => this.onCancel()}
        title="Edit Newsletter"/>
      </div>
    );
  }
}
export default EditNewsletter;
