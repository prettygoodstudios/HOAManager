import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from "./authReducer";
import newsletter from "./newsletterReducer";
import requests from "./requests";
import header from "./header";
const rootReducer = combineReducers({
  form,
  auth,
  newsletter,
  requests,
  header
});

export default rootReducer;
