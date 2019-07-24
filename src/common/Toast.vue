<!-- common文件夹放一些公用的组件，例如：当前组件为toast组件 -->
<template>
  <div class="toast-wrap" v-if="show">
    <div class="content">
      <div class="text" v-html="message||msg">
        <!-- {{message||msg}} -->
      </div>
      <div class="btn">
        <span @click="comfirn">确定</span>
        <span @click="cancel">取消</span>
      </div>
    </div>
    <div class="mask"></div>
  </div>
</template>
<script type="text/javascript">
  export default {
    name:'Toast',
    data(){
      return {
        msg:"是否删除该信息?"
      }
    },
    props:['message','show'],
    methods:{
      comfirn(){
        this.$emit("comfirn")
      },
      cancel(){
        this.$emit("cancel")
      },
    }
  }
</script>
<style lang="less" scoped>
  @import '../less/base.less';
  .toast-wrap{
    .content{
      width: 6rem;
      height: 3.5rem;
      background: #fff;
      z-index: 999;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%,-50%);
      padding: .5rem;
      box-sizing: border-box;
      border-radius: .20rem;
      .text{
        font-size: .3rem;
        color:#000;
        text-align: center;
        height: 1.25rem;
        overflow-y: auto;
        padding-top: .2rem;
      }
      .btn{
        margin-top: .20rem;
        display: flex;
        justify-content: space-between;
        span{
          display: inline-block;
          width: 2rem;
          height: .77rem;
          line-height: .77rem;
          text-align: center;
          color: #fff;
          font-size: .30rem;
          background: -webkit-gradient(linear, right top, left top, from(#4F8BFF), to(#4F4FFF));
          background: linear-gradient(right, #4F8BFF, #4F4FFF);
          box-shadow: 0 .12rem .24rem 0 rgba(79,129,255,0.40);
          border-radius: .22rem;
        }
      }
    }
    .mask{
      .mask;
      z-index: 99;
    }
  }
</style>