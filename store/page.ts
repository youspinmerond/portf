import { createStore } from "@reduxjs/toolkit";


const defaultState = {
  page: "home"
};

const reducer = (state=defaultState, action:any) => {

  switch(action.type) {
  case "change":
    return {...state, page: action.payload};

  default:
    return state;
  }

};

const store = createStore(reducer);

export default store;