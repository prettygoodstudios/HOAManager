import {CHANGE_SELECTED_REQUEST_TYPE, SET_REQUESTS} from '../actions/types';

const INIT_STATE = {
  requests: [],
  selectedRequests: 'Pending'
}

export default function(state = INIT_STATE, action){
  switch(action.type){
    case CHANGE_SELECTED_REQUEST_TYPE:
      return {
        ...state,
        selectedRequests: action.payload
      };
      break;
    case SET_REQUESTS:
      return {
        ...state,
        requests: action.payload
      }
    default:
      return state;
  }
}
