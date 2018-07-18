import React, {Component} from "react";

function ArchiveItem({title, date}){
  return(
    <div className="archive-item archive-items__item">
      <div className="archive-item__title">{title}</div>
      <div className="archive-item__date">{date}</div>
    </div>
  );
}

class NewsletterArchive extends Component{
  render(){
    const {title} = this.props;
    return(
      <div className="newsletter-archive">
        <div className="newsletter-archive__title">{title}</div>
        <div className="newsletter-archive__items .archive-items">
          <ArchiveItem title="Hello World" date="1/1/2001" />
          <ArchiveItem title="Hello World" date="1/1/2001" />
          <ArchiveItem title="Hello World" date="1/1/2001" />
        </div>
      </div>
    );
  }
}
export default NewsletterArchive;
