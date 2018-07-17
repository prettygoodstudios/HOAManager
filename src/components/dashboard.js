import React, {Component} from "react";
import TabNav from "./tabNav";
class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs: [
        {
          title: 'Newsletter',
          active: false,
          component: <h4>Newsletter</h4>
        },
        {
          title: 'Requests',
          active: false,
          component: <h4>Requests</h4>
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
export default Dashboard;
