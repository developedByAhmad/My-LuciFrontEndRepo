import axios from "axios";

var userToken = localStorage.getItem('loginToken')
const axiosInstance = axios.create({
  baseURL: process.env.PORT || 'https://luci-softthrive.herokuapp.com/',
  // 'http://localhost:6003/'
  headers: {
    "Content-Type": "application/json",
    'authorization': `${userToken}` 
  },
});

export default axiosInstance;