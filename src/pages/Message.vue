<template>
  <div>
      <ul>
          <li v-for="(m,index) in  messages :key:'m.id'>
              <router-link to="/home/message/">MessageDetail</router-link>
          </li>
      </ul>
      <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
        messages:[]
    },
    mounted(){
        setTimeout(()=>{
           const messages = [
             {id:1,title:"message001"},
             {id:2,titke:"message002"},
             {id:3,title:"message003"}

           ]

        },1000)
    }     

  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

 
</style>

