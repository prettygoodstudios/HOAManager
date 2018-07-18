import React, {Component} from "react";

class NewsletterLatest extends Component {
  render(){
    return(
      <div className="newsletter-latest">
        <h1 className="newsletter-latest__title">Title</h1>
        <div className="newsletter-latest__image">
          <img src="https://cdn.vox-cdn.com/thumbor/oIv2QlLw2ef29uSoqzU3lzVMLiw=/0x0:3000x2001/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/56647077/DOMAIN_09.0.jpg"/>
        </div>
        <div className="newsletter-latest__body">
          <p>Shadows provide important visual cues about objects’ depth and directional movement. They are the only visual cue indicating the amount of separation between surfaces. An object’s elevation determines the appearance of its shadow. The elevation values are mapped out in a “z-space” and range from 0 to 24.</p>
        </div>
      </div>
    );
  }
}
export default NewsletterLatest;
