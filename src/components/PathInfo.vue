<template>
  <div class="path-wrap">
    <p class="info">挂号用户信息查询如下：</p>
    <div class="con">
      <p class="name">
        <span>{{pathInfo.name}}</span>|
        <span>{{pathInfo.sex}}</span>|
        <span>{{pathInfo.age}}岁</span>
      </p>
      <div class="dept">
        <p>
          <span>挂号科室：</span>
          <span>{{pathInfo.deptName}}</span>
        </p>
        <p>
          <span>门诊号：</span>
          <span>{{pathInfo.recordId}}</span>
        </p> 
      </div>
      <div class="doct">
        <p>
          <span>预约医生：</span>
          <span>{{pathInfo.doctorName}}</span>
        </p>
        <p>
          <span>预约时间：</span>
          <span>{{pathInfo.systemTime}}</span>
        </p>
      </div>
    </div>
    <div class="out-box">
      <div class="emery">
        <div class="baner">
          <p>{{pathInfo.hospitalName}}</p>
          <p class="big">某某流程</p>
        </div>
        <div class="inner">
          <p>介绍文字描述文字介绍文字描述文字介绍文字描述文字介绍文字描述文字介绍文字描述文字介绍文字描述文字</p>
          <button @click="getStart">开始</button>
        </div>
        <p v-if="type==3">您已完成过一次预问诊，是否再次录入预问诊信息</p>
      </div>
      <div class="child" v-if="child.length>0&&child[0].value==1">
        <div class="baner">
          <p>{{pathInfo.hospitalName}}</p>
          <p class="big">儿童区</p>
        </div>
        <div class="inner">
          <p>该标准将为0-12岁儿童在为体质辨识及与中医体质相关疾病的预防、养生保健、健康管理提供依据，使体质分类科学化、规范化。</p>
          <button>开始</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import api from '@utils/api.js'
  import {getUrlArgObject} from '@utils/tools.js'
  export default {
    name:'PathInfo',
    data(){
      return {
        pathInfo:{//模拟数据
          "name":"李某某",
          "age":"20",
          "sex":"男",
          "deptName":"全科",
          "recordId":"44",
          "doctorName":"某某",
          "systemTime":"2019-07-02 18:22",
          "hospitalName":"浙江最最权威医院",
        },
        child:[
          {
            value:1 //显示标识
          }
        ],
        type:1 
      }
    },
    created(){
      // this.getPathInfo();
    },
    methods:{
      getPathInfo(){
        const params = {} //接口请求参数
        api.getPathInfo(params).then((res)=>{
          const result = res.data;
          if(result.code==0){
            this.pathInfo = result.data;
          }
        })
      },
      getStart(){
        this.$router.push({path:'/tab'})
      }
    }
  }
</script>
<style lang="less" scoped>
  .path-wrap{
    padding-top: .7rem;
    font-size: .28rem;
    box-sizing: border-box;
    .info{
      font-size: .32rem;
      font-weight: 700;
      color: #040428;
      margin-left: .6rem;
      font-weight: bold;
    }
    .con{
      margin-left: .6rem;
      .name{
        color: #7C828E;
        margin-top: .27rem;
        span{
          margin-right: .08rem;
        }
      }
      .dept,.doct{
        display: inline-block;
        p{
          margin-top: .27rem;
          span{
            color: #7C828E;
          }
        }
      }
      .doct{
        margin-left: .26rem;
      }
    }
    .out-box{
      white-space: nowrap;
      overflow-x: auto;
      padding:0 .15rem .15rem 0;
    }
    .emery,.child{
      display: inline-block;
      vertical-align: top;
      width:5.3rem;
      margin-top: .91rem;
      margin-left: .6rem;
      box-sizing: border-box;
      .baner{
        box-sizing: border-box;
        width:100%;
        height: 2.52rem;
        padding: .66rem 0 0 .6rem;
        p{
          color:#fff;
        }
        .big{
          font-size: .56rem;
          margin-top: .12rem;
        }
      }
      .inner{
        height: 4.98rem;
        box-shadow:-.05rem .05rem .10rem -.04rem #989da3,.05rem .05rem .10rem -.04rem #989da3;
        border-radius: 0 0 .20rem .20rem;
        padding: .45rem .6rem .6rem;
        box-sizing: border-box;
        position: relative;
        p{
          font-size: .24rem;
          line-height: .5rem;
          white-space: normal;
        }
        button{
          width: 4rem;
          height: .88rem;
          color: #fff;
          font-size: .32rem;
          margin-top: .20rem;
          background: -webkit-gradient(linear, right top, left top, from(#4F8BFF), to(#4F4FFF));
          background: linear-gradient(right, #4F8BFF, #4F4FFF);
          box-shadow: 0 .12rem .24rem 0 rgba(79,129,255,0.40);
          border-radius: .44rem;
          position: absolute;
          bottom: .7rem;
        }
      }
    }
    .emery .baner{
      background: url('../images/banerbg@1.5x.png') no-repeat;
      background-size: cover;
    }
    .child .baner{
      background: url('../images/childbg@1.5x.png') no-repeat;
      background-size: cover;
    }
  }
</style>