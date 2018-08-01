import React, {Component} from "react";
import {connect} from "react-redux";
import history from "../../history";


function ArchiveItem({title, date, _id, callback}){
  const parsedDate = new Date(date);
  return(
    <a className="archive-item archive-items__item" onClick = {() => callback(_id)}>
      <div className="archive-item__title">{title}</div>
      <div className="archive-item__date">{parsedDate.getUTCMonth()+1}/{parsedDate.getDate()}/{parsedDate.getFullYear()-2000}</div>
    </a>
  );
}

class NewsletterArchive extends Component{
  render(){
    const {title} = this.props;
    return(
      <div className="newsletter-archive">
        <div className="newsletter-archive__title">{title}</div>
        <div className="newsletter-archive__items .archive-items">
          {this.props.newsletters.map((n,i) => {
            return <ArchiveItem {...n} key={i} callback={(_id) => history.push(`/newsletter/detail/${_id}`)}/>;
          })}
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  const {newsletters} = state.newsletter;
  return {
    newsletters: newsletters
  };
}
export default connect(mapStateToProps)(NewsletterArchive);
