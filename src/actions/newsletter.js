import {SET_NEWSLETTERS, FETCH_NEWSLETTER_ID} from "./types";
import {ROOT_URL} from "../config";

import axios from "axios";


export function fetchNewsletters(){
  return function (dispatch){
    const token = localStorage.getItem("token");
    const headers = { headers: { authorization: token } };
    axios.get(ROOT_URL+"/newsletters",headers).then((d) => {
      dispatch( {
        type: SET_NEWSLETTERS,
        payload: d.data
      });
    }).catch((e) => {
      console.log(e);
    });
  }
}

export function fetchNewsletterWithId(id){
  return {
    type: FETCH_NEWSLETTER_ID,
    payload: {
      id: id
    }
  }
}

export function createNewNewsletter(formData, success){
  const token = localStorage.getItem("token");
  return function(){
    axios.post(ROOT_URL+"/newsletters/new", formData, {
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
export function editNewsletter(id, formData, success){
  const token = localStorage.getItem("token");
  return function(){
    axios.post(ROOT_URL+"/newsletters/edit/"+id, formData, {
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
