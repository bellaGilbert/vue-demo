<template>
  <div class="todo-container">
    <div class="todo-wrap"> 
       <Header :addTodo="addTodo" ></Header>
        <List :todos="todos" :deletlTodo="deletlTodo"></List>
        <Footer :todos="todos"  :selceAll="selceAll"  :deleteCompleted="deleteCompleted"></Footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import List from "./components/List.vue"
  import Footer from "./components/Footer.vue"
export default {
  data (){
    return {
       todos:[
          {id:1,title:"AAA",complete:true},
          {id:2,title:"BBB",complete:false},
          {id:3,title:"CCC",complete:true},
      ]
    }
  },
    components:{
      Header,
      List,
      Footer
    },

    methods:{
      addTodo(todo){
        this.todos.unshift(todo)
      },
      deletlTodo(index){
         this.todos.splice(index,1)
      },
      // 全选，全不选
      selceAll(isCheck){
         this.todos.forEach(todo=>todo.complete===isCheck)
      },
      // 删除已完成  l=留下的是false
      deleteCompleted(){
        this.todos = this.todos.filter(todo=>!todo.complete)
      }
    }
}
</script>

<style>
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

