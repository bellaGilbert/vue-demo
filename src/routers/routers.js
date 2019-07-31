// 所有路由配置的数组模块
import about from "../pages/About.vue"
import home from '../pages/Home.vue'
import News from "../pages/News.vue"
import Message from "../pages/Message.vue"
 
export default[{
    path:"/about",
    component:About
},
{
    path:"home",
    component:Home,
    children:[
        {
            path:"/home/news",
            component:News
        },
        {
            path:"home/message",
            component:Message
        }
       
    ]
},


]