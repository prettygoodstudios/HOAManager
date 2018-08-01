import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../actions";

import NewsletterNewForm from "./newsletterNewForm";

class EditNewsletter extends Component {
  onSubmit = (fields) => {
    const {title, body, image, id} = fields;
    var formData = new FormData();
    formData.append('title',title);
    formData.append('body',body);
    formData.append('image',image);
    console.log("Title",title);
    console.log("Body",body);
    console.log("Image",image);
    console.log(formData);
    this.props.editNewsletter(this.props.match.params.id, formData, () =>  this.success());
  }
  onCancel = () => {
    this.props.history.push("/dashboard");
  }

  success = () => {
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
