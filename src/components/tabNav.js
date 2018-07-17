import React, {Component} from "react";

class TabNav extends Component {
  render(){
    let JSX = [<h1>Tabs</h1>];
    this.props.tabs.forEach((t,i) => {
      JSX.push(t.component);
    });
    return (
      <div className="tab-nav">
        <div className="tab-nav__tabs">
          {this.props.tabs.map((t,i) => {
              return <a className="tab-nav__tab">{t.title}</a>;
          })}
        </div>
        <div className="">
         asdfklfadskljfadjskllfjkadsjlkfadsl
        </div>
      </div>
    );
  }
}
export default TabNav;
