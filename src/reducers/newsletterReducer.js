import {SET_NEWSLETTERS, FETCH_NEWSLETTER_ID} from "../actions/types";

const INIT_STATE = {
  newsletters: [],
  newsletterEdit: {}
}

export default function(state = INIT_STATE, action){
  switch(action.type){
    case SET_NEWSLETTERS:
      const newsletters = action.payload;
      return {
        ...state,
        newsletters: newsletters
      }
    case FETCH_NEWSLETTER_ID:
      const newsletterID = action.payload.id;
      let newsletterToEdit = {};
      state.newsletters.forEach((n) => {
        if(n._id == newsletterID){
          newsletterToEdit = n;
        }
      });
      return{
        ...state,
        newsletterEdit: newsletterToEdit
      }
    default: return state;
  }
}
