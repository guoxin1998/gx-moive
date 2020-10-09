import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import centerRouter from './routes/center'
import cinemaRouter from "./routes/cinema"
import filmRouter from "./routes/film"

Vue.use(VueRouter)

const routes = [
  centerRouter,
  cinemaRouter,
  filmRouter,

  {
    path: '/',
    redirect:'/cinema'
  }

]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes
})

export default router
