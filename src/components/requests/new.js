import React, {Component} from "react";
import {connect} from "react-redux";
import * as actions from "../../actions";

import NewsletterNewForm from "../newsletter/newsletterNewForm";
class NewRequest extends Component {
  onSubmit = (fields) => {
    const { title, body, image} = fields;
    var formData = new FormData();
    formData.append('title',title);
    formData.append('body',body);
    formData.append('image',image);
    this.props.history.push("/dashboard");
    console.log("Submitting", fields);
    this.props.createNewRequest(this.props.id, fields, () =>  this.success());
  }
  onCancel = () => {
    this.props.history.push("/dashboard");
  }
  success = () => {
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

function mapStateToProps(state){
  return{
   id: state.auth.user._id
  }
}

export default connect(mapStateToProps, actions)(NewRequest);
