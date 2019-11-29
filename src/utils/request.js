import axios from "axios";


import qs from "qs";

// 创建axios实例
const service = axios.create({
  baseURL: 'https://cnodejs.org/api/v1', // api 的 base_url
  timeout: 30000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    config.headers["Content-Type"] = "application/x-www-form-urlencoded";
    // config.headers["Content-Type"] = "application/json";
    // if (store.getters.token) {
    //   (config.headers.common["token"] = getToken()),
    //     (config.headers.common["user_addr"] = store.getters.phone),
    //     (config.headers.common["companyid"] = store.getters.companyId);
    // }
    return config;
  },
  error => {
    console.log(error); // for debug
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.res === 70006) {
      // store.dispatch("FedLogOut").then(() => {

      //   window.location = "/mobile/login";
      // });
    } else {
      return res;
    }
    // if (res.code = 1) {
    //   console.log(res.message);

    //   // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
    //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
    //     // MessageBox.confirm(
    //     //   '你已被登出，可以取消继续留在该页面，或者重新登录',
    //     //   '确定登出',
    //     //   {
    //     //     confirmButtonText: '重新登录',
    //     //     cancelButtonText: '取消',
    //     //     type: 'warning'
    //     //   }
    //     // ).then(() => {
    //     //   store.dispatch('FedLogOut').then(() => {
    //     //     location.reload()
    //     //   })
    //     // })
    //     console.log(res.message);
    //   }
    //   return Promise.reject("error");
    // } else {
    //   return response.data;
    // }
    // return res;
  },
  error => {
    console.log("err" + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
