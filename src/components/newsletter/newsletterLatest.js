import React, {Component} from "react";
import Button from "../button";
class NewsletterLatest extends Component {
  handleEdit = () => {
    this.props.history.push("newsletter/edit");
  }
  render(){
    const {imageURL, body, title} = this.props;
    return(
      <div className="newsletter-latest">
        <h1 className="newsletter-latest__title">{title}</h1>
        <div className="newsletter-latest__image">
          <img src={imageURL} />
        </div>
        <Button callback={() => this.handleEdit()} icon="fas fa-pencil-alt" className="newsletter-latest__edit-button"/>
        <div className="newsletter-latest__body">
          <p>{body}</p>
        </div>
      </div>
    );
  }
}


export default NewsletterLatest;
