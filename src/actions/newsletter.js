import {SET_NEWSLETTERS} from "./types";
export function fetchNewsletters(){
  const repsonse = {
    data: [
      {
        _id: 4353524,
        title: "Birthday",
        body: "afdjkldfafdskladjfsklfdasjdfasklfadjsl",
        date: new Date(),
        imageUrl: "https://s3-us-west-2.amazonaws.com/staticgeofocus/Asset+6%404x.png"
      },
      {
        _id: 43535553989,
        title: "Birthday2",
        body: "fadssfdrwqiureiafdjkldfafdskladjfsklfdasjdfasklfadjsl",
        date: new Date(),
        imageUrl: "https://s3-us-west-2.amazonaws.com/staticgeofocus/Asset+6%404x.png"
      }
    ]
  };
  return {
    type: SET_NEWSLETTERS,
    payload: repsonse.data
  };
}
