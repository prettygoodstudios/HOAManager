import {CHANGE_SELECTED_REQUEST_TYPE} from '../actions/types';

const INIT_STATE = {
  requests: [],
  selectedRequests: 'pending'
}

export default function(state = INIT_STATE, action){
  switch(action.type){
    case CHANGE_SELECTED_REQUEST_TYPE:
      return {
        ...state,
        selectedRequests: action.payload
      };
      break;
    default:
      return state;
  }
}
