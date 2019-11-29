import request from "../../utils/request";
const baseUrl = {
  getTopicDetailUrl:'/topic/',
  collectUrl:'/topic_collect/collect',
  de_collectUrl:'/topic_collect/de_collect',
  getCollectUrl:'/topic_collect/'
}

export function getTopicDetail(id){
    return request({
        url:baseUrl.getTopicDetailUrl+id,
        method:'get'
    });
}
export function getCollect(){
  return request({
      url:baseUrl.getCollectUrl+'sxy1990',
      method:'get'
  });
}
export function collect(data){
  return request({
      url:baseUrl.collectUrl,
      method:'post',
      data
  });
}
export function de_collect(data){
  return request({
      url:baseUrl.de_collectUrl,
      method:'post',
      data
  });
}