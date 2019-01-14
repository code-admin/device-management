// 登录
import General from '@/page/common/general.vue'
import Welcome from '@/page/common/welcome.vue'
import Frame from '@/frame/frame.vue'


// 井盖
const MAIN = resolve => require(['@/page/home/index.vue'], resolve)

// 井盖
const WELL_COVER = resolve => require(['@/page/wellCover/index.vue'], resolve)
const WELL_COVER_INDEX = resolve => require(['@/page/wellCover/index/index.vue'], resolve)



export default[

  { path: '/general', component: General },
  { path: '/', redirect: '/app' },
  {
    path: '/app',
    name:'app',
    redirect: 'app/wellCoverr/index',
    component: MAIN,
    children:[{
      path: 'wellCoverr',
      name: 'wellCover',
      component: WELL_COVER,
      children: [{
        path: 'index',
        name: 'index',
        component: WELL_COVER_INDEX
      }]
    }]
  },
  ]
