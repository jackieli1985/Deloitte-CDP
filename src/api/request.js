/**
 * RequestService用于与 Server Api 服务进行数据交换
 * 利用axios的请求拦截和响应拦截可以对登录和权限方面进行控制，具体需求可以自己进行配置。
 */
import Vue from "vue";
import axios from "axios";

// create an axios instance
// 创建axios 实例
const RequestService = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API,
  baseURL: "https://101.132.190.195:8100",
  timeout: 30000, // 请求超时时间 30s
  withCredentials: false, // send cookies when cross-domain requests
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

// request interceptor -- 拦截请求 request，并做一些自定义处理
RequestService.interceptors.request.use(
  config => {
    // do something before request is sent
    // force IE not to cache
    if (config.method === "post") {
      let data = config.data || {};
      if (data && typeof data === "object" && !Array.isArray(data)) {
        config.data = {
          ...config.data
          //   _t: +new Date(),
        };
      }
    } else if (config.method === "get") {
      const params = config.params || {};
      if (params && typeof params === "object" && !Array.isArray(params)) {
        config.params = {
          ...config.params
          //   _t: +new Date(),
        };
      }
    }

    return Promise.resolve(config);
  },
  error => {
    // do something with request error
    return Promise.reject(error);
  }
);

// response interceptor -- 拦截响应 response，并做一些错误的自定义处理
RequestService.interceptors.response.use(
  response => {
    // 这里可以自定义处理response
    // 正常返回
    return Promise.resolve(response.data);
  },
  err => {
    // 这里是返回状态码不为200时候的错误处理 -- 处理一些response出错时的逻辑
    if (err && err.response) {
      switch (err.response.status) {
        case 400:
          // err.message = "请求错误";
          err.message = "Request error.";
          break;
        case 401:
          // err.message = "未授权，请登录";
          err.message = "Unauthorized, please login.";
          break;
        case 403:
          // err.message = "拒绝访问";
          err.message = "Access denied.";
          break;
        case 404:
          // err.message = `请求地址出错: ${err.response.config.url}`;
          err.message = `Request address error: ${err.response.config.url}.`;
          break;
        case 408:
          // err.message = "请求超时";
          err.message = "Request timeout.";
          break;
        case 500:
          // err.message = "服务器内部错误";
          err.message = "Server internal error.";
          break;
        case 501:
          // err.message = "服务未实现";
          err.message = "Service not implemented.";
          break;
        case 502:
          // err.message = "网关错误";
          err.message = "Bad Gateway.";
          break;
        case 503:
          // err.message = "服务不可用";
          err.message = "Service not available.";
          break;
        case 504:
          // err.message = "网关超时";
          err.message = "Gateway timeout.";
          break;
        case 505:
          // err.message = "HTTP版本不受支持";
          err.message = "The HTTP version is not supported.";
          break;
        default:
      }
    }

    // 服务器错误码统一提示
    Vue.prototype.$nextTick(() => {
      Vue.prototype.$message({
        message: err.message,
        type: "error"
      });
    });

    let errorMsgObj = {
      code: err.response && err.response.status,
      data: "",
      msg: err.message
    };

    return Promise.reject(errorMsgObj);
  }
);

export default RequestService;
