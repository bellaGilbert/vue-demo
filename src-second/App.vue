<template>
   <div class="todo-container">
    <div class="todo-wrap">
       <Header/>
       <List :todos="todos"/>
       <Footer/>      
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import List from "./components/List.vue"
import Footer from "./components/Footer.vue"
  export default {
     data(){
         return{
             todos:[
                {id:1,title:"AAA",complete:false},
                {id:2,title:"BBB",complete:false},
                {id:3,title:"ccc",complete:true},
                {id:4,title:"DDD",complete:false},
                {id:5,title:"EEE",complete:true},
             ] 
         }     
     },
         components:{
             Header,
             List,
             Footer
         }

  }
</script>

<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
 
</style>
