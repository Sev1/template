import Vue from 'vue';
import Router from 'vue-router';
import PathInfo from '@components/PathInfo.vue';
import TabPage from '@components/TabPage.vue';
Vue.use(Router);
const router = new Router({
  routes:[
    {
      path:'/',
      name:'PathInfo',
      component:PathInfo
    },
    {
      path:'/tab',
      name:'TabPage',
      component:TabPage
    }
  ]
})

export default router;