import {SET_NEWSLETTERS, FETCH_NEWSLETTER_ID} from "./types";
export function fetchNewsletters(){
  const repsonse = {
    data: [
      {
        _id: 4353524,
        title: "Birthday",
        body: "afdjkldfafdskladjfsklfdasjdfasklfadjsl",
        date: new Date(),
        imageURL: "https://cdn.vox-cdn.com/thumbor/oIv2QlLw2ef29uSoqzU3lzVMLiw=/0x0:3000x2001/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/56647077/DOMAIN_09.0.jpg"
      },
      {
        _id: 43535553989,
        title: "Birthday2",
        body: "fadssfdrwqiureiafdjkldfafdskladjfsklfdasjdfasklfadjsl",
        date: new Date(),
        imageURL: "https://cdn.vox-cdn.com/thumbor/oIv2QlLw2ef29uSoqzU3lzVMLiw=/0x0:3000x2001/1200x800/filters:focal(1260x761:1740x1241)/cdn.vox-cdn.com/uploads/chorus_image/image/56647077/DOMAIN_09.0.jpg"
      }
    ]
  };
  return {
    type: SET_NEWSLETTERS,
    payload: repsonse.data
  };
}

export function fetchNewsletterWithId(id){
  return {
    type: FETCH_NEWSLETTER_ID,
    payload: {
      id: id
    }
  }
}
