import { CHANGE_SELECTED_REQUEST_TYPE, SET_REQUESTS } from "./types";

import {ROOT_URL} from "../config";

import axios from "axios";

export function changeSelectedRequestType(title){
  return{
    type: CHANGE_SELECTED_REQUEST_TYPE,
    payload: title
  }
}


export function createNewRequest(userId, formData, success){
  const token = localStorage.getItem("token");
  return function(){
    axios.post(ROOT_URL+"/requests/new", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: token
      }
    }).then((d) => {
      success();
    }).catch((e) => {
      console.log(e);
    });
  }
}

export function fetchRequests(){
  const token = localStorage.getItem("token");
  return function(dispatch){
    axios.get(ROOT_URL+"/requests", {
      headers: {
        authorization: token
      }
    }).then((d) => {
      dispatch({
          type: SET_REQUESTS,
          payload: d.data
      })
    }).catch((e) => {

    });
  }
}
