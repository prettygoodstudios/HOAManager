import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../actions";

import NewsletterBox from "./newsletterBox";
import NewsletterLatest from "./newsletterLatest";
import NewsletterArchive from "./newsletterArchive";
import FormTitle from "../formTitle";
import {FormButton} from "../formFields";

class NewsletterDetail extends Component {

  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }

  render(){
    return(
      <div className="newsletter-detail">
        <FormTitle className='newsletter-detail__title' text={this.props.newsletterToEdit.title} />
        <NewsletterBox {...this.props.newsletterToEdit}/>
        <NewsletterArchive />
        <NewsletterLatest {...this.props.newsletterToEdit}/>
        <FormButton className="newsletter-detail__cancel" small={true} onClick={() => this.props.history.push("/dashboard")} title="Cancel"/>
      </div>
    );
  }

}

function mapStateToProps(state){
  const {newsletterEdit} = state.newsletter;
  return {
    newsletterToEdit: newsletterEdit
  }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
