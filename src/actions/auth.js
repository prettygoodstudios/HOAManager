import axios from "./axios";
import {ROOT_URL} from "../config";
export function signUp(fields, success){
  console.log(fields);
  return function(dispatch){
    axios.post(`${ROOT_URL}/signUp`).then((data) => {

    }).catch((error) => {
      if(error){
        console.log("Error Occurred: ",error);
      }
    });
  }
}
export function signIn(){

}
