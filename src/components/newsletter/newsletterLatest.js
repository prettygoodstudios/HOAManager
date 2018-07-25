import React, {Component} from "react";
import {connect} from "react-redux";

import * as actions from "../../actions";

import Button from "../button";


class NewsletterLatest extends Component {
  handleEdit = () => {
    this.props.history.push(`newsletter/edit/${this.props._id}`);
  }
  render(){
    const {imageURL, body, title} = this.props;
    return(
      <div className="newsletter-latest">
        <h1 className="newsletter-latest__title">{title}</h1>
        <div className="newsletter-latest__image">
          <img src={imageURL} />
        </div>
        <Button callback={() => this.handleEdit()} icon="fas fa-pencil-alt" className="newsletter-latest__edit-button" editNewsletter={this.props}/>
        <div className="newsletter-latest__body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {newsletters} = state.newsletter;
  const latest = newsletters[0];
  return {
    ...latest
  };
}

export default connect(mapStateToProps, actions)(NewsletterLatest);
