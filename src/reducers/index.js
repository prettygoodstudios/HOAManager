import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from "./authReducer";
import newsletter from "./newsletterReducer";
import requests from "./requests";
const rootReducer = combineReducers({
  form,
  auth,
  newsletter,
  requests
});

export default rootReducer;
