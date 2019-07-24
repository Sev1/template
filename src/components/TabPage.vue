<template>
  <div class="tab-wrap">
    <div class="tab" v-if="modlues&&modlues.length>0">
      <p v-for="(it,index) in modlues" :key="it.id">
        <span :class="{current:index==0}">
          {{it.name}}
        </span>
      </p>
    </div>
    <!-- 内容 -->
    <div class="content">
      此处放置内容
      <button @click="show">点我显示弹窗</button>
      <button @click="back">点我返回</button>
    </div>
    <Toast :message="text" 
          :show="showToast"
          @comfirn="comfirnDel" 
          @cancel="cancelDel"/>
  </div>
</template>
<script type="text/javascript">
import Toast from '../common/Toast.vue'
export default {
  name: 'TabPage',
  data() {
    return {
      modlues: [
        {
          name:'tab1',
          id:1
        },
        {
          name:'tab2',
          id:2
        },
        {
          name:'tab3',
          id:3
        },
        {
          name:'tab4',
          id:4
        }
      ],
      text:"你好呀！<br>我是弹窗",
      showToast:false
    }
  },
  created() {},
  methods: {
    show(){
      this.showToast = true;
    },
    comfirnDel(){
      this.showToast = false;
    },
    cancelDel(){
      this.showToast = false;
    },
    back(){
      this.$router.go(-1)
    }
  },
  components: {
    Toast
  }
}
</script>
<style lang="less" scoped>
.tab-wrap {
  width: 100%;
  height: 100%;
  padding-bottom: 0.88rem;
  .tab {
    height: 0.82rem;
    line-height: 0.82rem;
    border-bottom: 1px solid #ededed;
    box-sizing: border-box;
    padding-top: 0.16rem;
    p {
      display: inline-block;
    }
    span {
      font-size: 0.24rem;
      display: inline-block;
      vertical-align: top;
      width: 1.48rem;
      height: 0.5rem;
      line-height: 0.5rem;
      color: #7c828e;
      text-align: center;
      margin-left: 0.2rem;
      margin-right: 0.19rem;
    }
    .current {
      color: #0043e8;
      background: #e5ecfc;
      border-radius: 25px;
    }
}
  .content {
    font-size: 0.3rem;
    // padding: 0.45rem 0.6rem;
    padding: 0.45rem 0.3rem 0.45rem 0.6rem;
  }
  button{
    color:#272bf1;
  }
}
</style>