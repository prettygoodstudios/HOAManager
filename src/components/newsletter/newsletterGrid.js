import React, {Component} from "react";
import NewsletterBox from "./newsletterBox";
import NewsletterArchive from "./newsletterArchive";
class NewsletterGrid extends Component{
  render(){
    return(
      <div className="newsletter-grid">
        <h1>Newsletters</h1>
        <NewsletterBox date={new Date()}/>
        <NewsletterArchive title="Archive" />
      </div>
    );
  }
}
export default NewsletterGrid;
