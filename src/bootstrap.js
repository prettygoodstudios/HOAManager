import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from "redux-thunk";
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));
import './style/main.scss';
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import Layout from "./components/layout";
import history from "./history";
import RequireAuth from "./components/requireAuth";
class Dashboard extends Component {
  render(){
    return(
      <div>Hello World You Are Authenticated!</div>
    );
  }
}
function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <Router history={history}>
        <Switch>
          <Layout>
            <Route path="/" exact component={SignIn} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/dashboard" component={RequireAuth(Dashboard)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
