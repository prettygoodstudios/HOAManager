import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, Route, Switch } from 'react-router-dom';
import reduxThunk from "redux-thunk";
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(compose((window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore)));
import './style/main.scss';
//Auth Components
import RequireAuth from "./components/requireAuth";
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
//Layout Components
import Layout from "./components/layout";
//Dashbaord Components
import Dashboard from "./components/dashboard";
import NewNewsletter from "./components/newsletter/newNewsletter";
import EditNewsletter from "./components/newsletter/editNewsletter";
import NewsletterDetail from "./components/newsletter/newsletterDetail";
import history from "./history";
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
            <Route path="/newsletter/new" component={RequireAuth(NewNewsletter)} />
            <Route path="/newsletter/edit/:id" component={RequireAuth(EditNewsletter)} />
            <Route path="/newsletter/detail/:id" component={RequireAuth(NewsletterDetail)} />
            <Route path="/requests/new" component={RequireAuth(NewNewsletter)} />
          </Layout>
        </Switch>
      </Router>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
