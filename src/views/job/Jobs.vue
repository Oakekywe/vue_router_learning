<template>
  <h1>Jobs Page</h1>
  <div class="jobs" v-for="job in jobs" :key="job.id">
    <router-link :to="{name: 'JobDetail',params:{id: job.id}}">
      <h1>{{job.title}}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  data(){
    return{
      jobs:[
        {id:"1", title:"Web developer", detail:"css developer is a cool"},
        {id:"2", title:"Web designer", detail:"css designer is a cool"},
        {id:"3", title:"Project manager", detail:"project manager is a cool"},
      ]
    }
  }
}
</script>

<style>
.jobs{
  color: crimson;
}
</style>