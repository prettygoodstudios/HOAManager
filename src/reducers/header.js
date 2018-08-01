import {SET_HEADER} from "../actions/types";


const INIT_STATE = {
  title: "HOA Manager",
  subtitle: "A property managment solution.",
  hideBar: false
}

export default function(state = INIT_STATE, action){
  switch(action.type){
    case SET_HEADER:
      return{
        ...state,
        ...action.payload
      }
      break;
    default:
      return state;
  }
}
