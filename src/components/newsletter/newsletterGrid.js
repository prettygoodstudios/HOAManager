import React, {Component} from "react";
import * as actions from "../../actions";
import {connect} from "react-redux";
import NewsletterBox from "./newsletterBox";
import NewsletterArchive from "./newsletterArchive";
import NewsletterLatest from "./newsletterLatest";
import Button from "../button";
import RequireAdmin from "../auth/requireAdmin";
class NewsletterGrid extends Component{
  handleNewNewsletter = () => {
    this.props.history.push("/newsletter/new");
  }
  componentDidMount = () => {
    console.log("hello world reducers");
    setTimeout(() => this.props.fetchNewsletters(), 1000);
  }
  render(){
    const latest = {
      title: "Title",
      body: "Shadows provide important visual cues about objects’ depth and directional movement. They are the only visual cue indicating the amount of separation between surfaces. An object’s elevation determines the appearance of its shadow. The elevation values are mapped out in a “z-space” and range from 0 to 24.",
      imageURL: "https://cdn.vox-cdn.com/thumbor/oIv2QlLw2ef29uSoqzU3lzVMLiw=/0x0:3000x2001/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/56647077/DOMAIN_09.0.jpg",
      date: new Date(),
      _id: 22
    }
    return(
      <div className="newsletter-grid">
        <RequireAdmin>
          <Button icon={"fas fa-plus"} className="newsletter-grid__button" callback={() => this.handleNewNewsletter()}/>
        </RequireAdmin>
        <NewsletterBox date={this.props.latest ? this.props.latest.date : new Date()}/>
        <NewsletterArchive title="Archive" />
        <NewsletterLatest history={this.props.history} {...this.props.latest}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  const {newsletters} = state.newsletter;
  const latest = newsletters[0];
  console.log("My Latest", latest);
  console.log("My News", newsletters);
  return{
    latest: latest
  }
}
export default connect(mapStateToProps, actions)(NewsletterGrid);
