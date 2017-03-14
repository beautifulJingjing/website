/* 路由配置全写这里 */
import Vue from 'vue'
import VueRouter from 'vue-router'
var path = require('path')

/* 开启debug模式 */
Vue.config.debug = true
Vue.use(VueRouter);

import Index from '../pages/index.vue'
import List from '../pages/list.vue'
import Start from '../pages/start.vue'
import Detail from '../pages/detail.vue'

const router=new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes: [
    {
      path: '/',
      name:'/',
	  component:Index
      /*redirect: to=> {
        const {hash, params, query} = to;
        var url;
        setTimeout(function () {
          url = sessionStorage.tplid == '999' ? 'index' : ('index0' + sessionStorage.tplid);console.log(sessionStorage.tplid)
          return {path:url}
        },1000)
      }*/
    },
    {
      path: '/start',
      name:'start',
	  component:Start
    },
	  {
		  path: '/list/:typeid',
		  name:'list',
		  component:List
	  },
	  {
		  path: '/detail/:id',
		  name:'detail',
		  component:Detail
	  },
  ]
})
export default router
