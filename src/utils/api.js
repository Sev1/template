// 此文件配置接口和post请求
import axios from 'axios';
const urls = {
  getPathInfo:'/api/prec/patientInfo/getTopPatientInfo',//API接口
}

export default {
  getPathInfo(param){
    return axios.post(urls.getPathInfo,param)
  },
}