import React, {Component} from "react";
import NewsletterBox from "./newsletterBox";
class NewsletterGrid extends Component{
  render(){
    return(
      <div className="newsletter-grid">
        <h1>Newsletters</h1>
        <NewsletterBox date={new Date()}/>
      </div>
    );
  }
}
export default NewsletterGrid;
