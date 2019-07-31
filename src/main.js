import Vue from "vue"
import router from './routers'
import App from "./App.vue"

new Vue({
    el:"#app",
    components:{App},
    template:"<App/>",
    router //配置路由
})