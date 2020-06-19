import { createStore } from "redux";
let initialState = {
  isFontLoaded: false,
};

function reducer(state = initialState, action) {
  if (action.type === "IS_LOADED") return { isFontLoaded: true };
  else return state;
}

export default createStore(reducer);
