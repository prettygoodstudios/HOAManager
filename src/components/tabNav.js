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
              return <a className={`tab-nav__tab ${ t.active ? 'tab-nav__active' : ''}`} key={i} onClick={() => this.props.handleTabChange(t.title)}>{t.title}</a>;
          })}
        </div>
        {this.props.tabs.filter((t) => {return t.active;}).map((t,i) => {
            return (
              <div className="tab-nav__component" key={i}>
                {t.component}
              </div>
            );
        })}
      </div>
    );
  }
}
export default TabNav;
