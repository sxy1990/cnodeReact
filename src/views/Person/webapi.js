import request from '../../utils/request'

const baseUrl = {
    getUserInfoUrl:'/user/'
}
  
export function getUserInfo(){
    return request({
        url:baseUrl.getUserInfoUrl+'alsotang',
        method:'get'
    });
}