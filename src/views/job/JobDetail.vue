<template>
  <!-- <h1>Job detail - {{id}}</h1> -->
  <div v-if="job">
    <h1>Job Title - {{job.title}}</h1>
    <p>Job Detail - {{job.detail}}</p>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // id: this.$route.params.id
            job: null
        }
    },
    props:['id'],
    mounted(){
    fetch("http://localhost:3000/jobs/"+this.id)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      this.job= data
    })
    .catch((err)=>{
      console.log(err.message())
    })
  }
}
</script>

<style>

</style>