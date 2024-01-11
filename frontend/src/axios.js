import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:8080/",
    withCredentials: true,
    maxRedirects: 1
})

instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log(error)
    //  window.location.href="/login"
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default instance