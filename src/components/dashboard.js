import React, {Component} from "react";
import TabNav from "./tabNav";
import NewsletterGrid from "./newsletter/newsletterGrid";
import RequestsGrid from "./requests/requestsGrid";
import {connect} from "react-redux";
import * as actions from "../actions";

class Dashboard extends Component {
  componentDidMount(){
    this.props.setHeader("HOA Manager", `Hello ${this.props.email}`, true);
  }

  constructor(props){
    super(props);
    this.state = {
      tabs: [
        {
          title: 'Newsletter',
          active: false,
          component: <NewsletterGrid history={this.props.history}/>
        },
        {
          title: 'Requests',
          active: false,
          component: <RequestsGrid />
        }
      ]
    }
  }
  handleTabChange = (title) => {
    let tabs = this.state.tabs.map((t) => {
      let tab = t;
      if(t.title == title){
        tab.active = true;
      }else{
        tab.active = false;
      }
      return tab;
    });
    this.setState({
      tabs: tabs
    });
  }
  render(){
    return(
      <div className="dashboard">
        <TabNav tabs={this.state.tabs} handleTabChange={this.handleTabChange}/>
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    ...state.auth.user
  }
}

export default connect(mapStateToProps, actions)(Dashboard);
