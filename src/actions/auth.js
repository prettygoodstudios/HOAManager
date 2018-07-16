import axios from "axios";
import {ROOT_URL} from "../config";
import {AUTHENTICATE_USER} from "./types";
export function signUp(fields, success){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signUp`, fields).then((data) => {
      const { token } = data.data;
      localStorage.setItem('token',token);
      dispatch({
        type: AUTHENTICATE_USER,
        payload: data.data
      });
      success();
    }).catch((error) => {
      if(error){
        console.log("Error Occurred:",error);
      }
    });
  }
}
export function signIn(fields, success){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signIn`,fields).then((data) => {
      console.log(data.data);
      const {token} = data.data;
      localStorage.setItem('token',token);
      dispatch({
        type: AUTHENTICATE_USER,
        payload: data.data
      });
      success();
    }).catch((error) => {
      if (error){
        console.log(error);
      }
    });
  }
}
