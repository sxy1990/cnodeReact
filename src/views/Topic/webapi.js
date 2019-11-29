import request from "../../utils/request";
import qs from 'qs'
const baseUrl = {
  getTopicUrl:'/topics',
}

export function getTopicData(data){
    return request({
        url:baseUrl.getTopicUrl+'?'+qs.stringify(data),
        method:'get'
    });
}