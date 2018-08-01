import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

import NewsletterNewForm from "./newsletterNewForm";
class NewNewsletter extends Component {
  onSubmit = (fields) => {

    var formData = new FormData();
    formData.append('title',title);
    formData.append('body',body);
    formData.append('image',image);
    this.props.history.push("/dashboard");
    this.props.createNewNewsletter(this.props.id, formData, () =>  this.success());
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
export default connect(null, actions)(NewNewsletter);
