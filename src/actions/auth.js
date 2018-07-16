import axios from "axios";
import {ROOT_URL} from "../config";
export function signUp(fields, success){
  return function(dispatch){
    axios.post(`${ROOT_URL}/signUp`, fields).then((data) => {
      console.log('Data:',data);
      success();
    }).catch((error) => {
      if(error){
        console.log("Error Occurred:",error);
      }
    });
  }
}
export function signIn(){

}
