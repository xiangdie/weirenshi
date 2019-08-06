import Vue from 'vue'
import Router from 'vue-router'
import Dlu from '@/pages/dlu/Dlu'
import Kuangia from '@/pages/kuangia/Kuangia'
import Yuangong from '@/pages/yuangong/Yuangong'
import Ztgl from '@/pages/xinzi/Ztgl'
import Ztsz from '@/pages/xinzi/Ztsz'
import Jcxxsz from '@/pages/xtgl/Jcxxsz'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dlu',
      component: Dlu
    },
		{
		  path: '/Kuangia',
		  name: 'Kuangia',
		  component: Kuangia
		},
		{
		  path: '/Yuangong',
		  name: 'Yuangong',
		  component: Yuangong
		},
		{
		  path: '/Ztgl',
		  name: 'Ztgl',
		  component: Ztgl
		},
		{
		  path: '/Ztsz',
		  name: 'Ztsz',
		  component: Ztsz
		},
		{
		  path: '/Jcxxsz',
		  name: 'Jcxxsz',
		  component: Jcxxsz
		}
  ]
})
