import { CHANGE_SELECTED_REQUEST_TYPE } from "./types";

import {ROOT_URL} from "../config";

import axios from "axios";

export function changeSelectedRequestType(title){
  return{
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: title
  }
}


export function createNewRequest(userId, newRequest, success){
  console.log("Token: ",localStorage.getItem("token"));
  return function(){
    axios.post(ROOT_URL+"/requests/new", newRequest).then((d) => {
      success();
    }).catch((e) => {
      console.log(e);
    });
  }
}
