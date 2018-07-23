import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from "./authReducer";
import newsletter from "./newsletterReducer";
const rootReducer = combineReducers({
  form,
  auth,
  newsletter
});

export default rootReducer;
