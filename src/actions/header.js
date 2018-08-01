import {SET_HEADER} from "./types";

export function setHeader(title, subtitle, hideBar){
  return{
    type: SET_HEADER,
    payload: {
      title,
      subtitle,
      hideBar
    }
  }
}
