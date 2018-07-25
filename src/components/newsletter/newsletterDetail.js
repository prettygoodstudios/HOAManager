import React, {Component} from "react";

import {connect} from "react-redux";

import * as actions from "../../actions";

class NewsletterDetail extends Component {


  componentDidMount() {
    this.props.fetchNewsletterWithId(this.props.match.params.id);
  }
  render(){
    return(
      <div className="newsletter-detail">
        hello world
      </div>
    );
  }
}

function mapStateToProps(state){
  const {newsletterToEdit} = state.newsletter;
  return {
    newsletterToEdit
  }
}

export default connect(mapStateToProps, actions)(NewsletterDetail);
