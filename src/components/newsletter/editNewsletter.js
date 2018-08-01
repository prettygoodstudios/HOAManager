import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../actions";

import NewsletterNewForm from "./newsletterNewForm";

class EditNewsletter extends Component {
  onSubmit = (fields) => {
    this.props.history.push("/dashboard");
    console.log("Submitting", fields);
  }
  onCancel = () => {
    this.props.history.push("/dashboard");
  }

  componentDidMount(){
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render(){

    return(
      <div className="new-newsletter">
        <NewsletterNewForm onSubmit={(event) => this.onSubmit(event)} onCancel={() => this.onCancel()}
        title="Edit Newsletter" field1Placeholder={"Newlsetter Title Here"} field1Title={"Title"} field2Placeholder="Newsletter Body Here" field2Title="Newsletter Body"/>
      </div>
    );
  }
}


export default connect(null ,actions)(EditNewsletter);
