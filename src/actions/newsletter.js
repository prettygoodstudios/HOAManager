import {SET_NEWSLETTERS, FETCH_NEWSLETTER_ID} from "./types";

import axios from "axios";


export function fetchNewsletters(){
  return function (dispatch){
    const token = localStorage.getItem("token");
    const headers = { headers: { authorization: token } };
    axio.get(ROOT_URL+"/newsletters",headers).then((d) => {
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
