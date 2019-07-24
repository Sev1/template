// 此文件放置一些封装的方法 或者公用的配置信息

const qs = require('qs');
const imageUrlPrefix = 'http://×××.×××.×.×××:××××' //后台图片地址

// 获取地址栏参数 并返回对象
const getUrlArgObject = (parm) => {
    let query = window.location.search;
    let args = qs.parse(query.substr(1));
    return args[parm];//返回对象  
}

// 深拷贝
const deepClone = (data)=>{
    return JSON.parse(JSON.stringify(data)||null)||{};
};

// 匹配占位符{input_(文字)} {number_(文字)}
const getExpStr = (str) =>{
  let result = {}
  if(str.match(/\${number_(.*})/)){//数字输入框
    let matchStr = str.match(/\${number_(.*})/)[0]
    result = {
      type:'number',
      placeholder:matchStr.split('${number_')[1].split('}')[0],
      prefix:str.split(matchStr)[0]||'',
      suffix:str.split(matchStr)[1]||''
    }
  }else if(str.match(/\${input_(.*})/)){
    let matchStr = str.match(/\${input_(.*})/)[0]
    result = {
      type:'text',
      placeholder:matchStr.split('${input_')[1].split('}')[0],
      prefix:str.split(matchStr)[0]||'',
      suffix:str.split(matchStr)[1]||''
    }
  }
  return result
}

// 计算字符串长度，该长度将一个中文字算作2个字符长度
const regexp = {
    ch: (str)=> {//匹配中文
        if(typeof str !== "string") {
            return "";
        }
        return str.match(/[\u4e00-\u9fa5]/g) || "";
    },
    chLen: function (str) {//中文长度
        return regexp.ch(str).length;
    },
    strLen: function (str) {//字符串长度(一个中文当作两个英文字母)
        if(typeof str !== "string") {
            return 0;
        }
        return str.length + regexp.chLen(str);
    }
}

//判断是否空对象或未定义
const isUndefined = function (str) {
    if(str === 0 || str === "") {
        return false;
    }
    return (Type.checkType(str, 'null') || Type.checkType(str, 'undefined'));
   
}
//sessionStorage方法封装
const Storage = {
    session: {
        get: function (name) {
            return JSON.parse(sessionStorage.getItem(name));
        },
        set: function (name, data) {
            sessionStorage.setItem(name, JSON.stringify(data));
        },
        remove: function (name) {
            sessionStorage.removeItem(name);
        },
        clear: function () {
            sessionStorage.clear();
        }
    }
};

//localStorage方法封装
const storageLocal = {
  set: function (name, data) {
    if(!data) {
      return;
    }
    if(typeof data !== 'string') {
      data = JSON.stringify(data);
    }
    localStorage.setItem(name, data);
  },
  get: function (name) {
    return localStorage.getItem(name);
  },
  remove: function (name) {
    localStorage.removeItem(name);
  },
  clear: function () {
    localStorage.clear();
  }
};

//是否为空
const isNull = (item)=>{
    return String(item)=== "" || String(item)==="null" || String(item)==="undefined";
};

const isNotNull = (item)=>{
    return !(isNull(item));
};

//判断是否为ie浏览器
const isIE  = () => { //ie?
    if (!!window.ActiveXObject || "ActiveXObject" in window){
        return true;
    } else{
        return false;

    }
}

//时间搓转换年龄
function getAge(time){
  const birthday = new Date(time),
    year = birthday.getFullYear(),
    month = birthday.getMonth() + 1,
    day = birthday.getDate(),
    now = new Date(),
    now_year = now.getFullYear(),
    now_month = now.getMonth() + 1,
    now_day = now.getDate();
  let age= now_year - year;
  if (now_month > month) {
    age += 1;
  } else if (now_month === month) {
    if (now_day >= day) {
      age += 1;
    }
  }
  return age;
};

// 注意：module.exports 尽量不要和import混用，容易报错 Uncaught TypeError: Cannot assign to read only property 'exports' of object '#<Object>'
// module.exports =  {
export default {
  imageUrlPrefix,
  getUrlArgObject,
  deepClone,
  getExpStr
}