import { CHANGE_SELECTED_REQUEST_TYPE } from "./types";


export function changeSelectedRequestType(title){
  return{
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: title
  }
}
