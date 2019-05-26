import Vue from 'vue'
import Router from 'vue-router'

// 引入组件
import Head from "./components/Head.vue"
import Index from "./components/Index.vue"
import About from "./components/About.vue"
import Common from "./components/Common.vue"
import News from "./components/News.vue"
import Exchange from "./components/Exchange.vue"
import Case from "./components/Case.vue"
import Product from "./components/Product.vue"
import Honor from "./components/Honor.vue"
import Message from "./components/Message.vue"
import Contact from "./components/Contact.vue"
import Content from "./components/Content.vue"
import ditu from "./components/ditu.vue"

Vue.use(Router)

// 为Test组件配置访问路径
export default new Router({
  routes: [
    {path:'/', component:Head, children:[
      {path:"Index",
      component:Index,
      meta: {
        title: '赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
      }
      },
      {path:"ditu",
      component:ditu,
      meta: {
        title: '赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
      }
      }
    ,
    {path:"I/",
    component:Common,
      children:[
        {path:"Content",
          component:Content,
          meta: {
          title: '赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"About",
          component:About,
          meta: {
          title: '关于我们 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"News",
          component:News,
          meta: {
          title: '新闻资讯 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Exchange",
          component:Exchange,
          meta: {
          title: '交流合作 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Case",
          component:Case,
          meta: {
          title: '案例分享 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Product",
          component:Product,
          meta: {
          title: '产品中心 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Honor",
          component:Honor,
          meta: {
          title: '资质荣誉 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Message",
          component:Message,
          meta: {
          title: '在线留言 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        },
        {path:"Contact",
          component:Contact,
          meta: {
          title: '联系我们 - 赵玲英国欧洲有限公司 趙玲香港亞洲有限公司网站'
          }
        }
      ]
    }
    ]
  }
    
    
  ]
})
