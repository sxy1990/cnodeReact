/**
 * @component todoList
 * @description todoList动作
 * @time 2018/3/4
 * @author jokerXu
 */

import {GET_TOPIC} from './actionTypes.js';
import { getTopicData } from './webapi'
const fetchTopic = (param,data) => ({
  type: GET_TOPIC,
  param,
  data
});

export function getTopic(param) {
  return function (dispatch) {
    return getTopicData(param).then(res => {
      let response = res.data;
      dispatch(fetchTopic(param,response))
      return response
    })
  }
}
