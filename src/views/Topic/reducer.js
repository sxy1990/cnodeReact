import {GET_TOPIC}from './actionTypes.js';


let initialState = {
  all:[],
  good:[],
  share:[],
  ask:[],
  job:[],
  dev:[]
}
export default (state = initialState, action) => {
  switch(action.type) {
    case GET_TOPIC: {
      var obj = {}
      if(action.param.page <= 1) {
        obj = {[action.param.tab]:action.data}
      } else {
        obj = {[action.param.tab]:[...state[action.param.tab],...action.data]}
      } 
      return {...state,...obj}
    } 
    default: {
      return state;
    }
  }
}
