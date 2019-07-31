// L路由器对象模型
import Vue from 'vue'
import VueRouter from "vue-router"
import router from './routers'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",//去掉路由路径上的#
    router
})