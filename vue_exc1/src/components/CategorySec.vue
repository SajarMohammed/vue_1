<template>
    <div class="card">
    <div v-for="item in items" :key="item.id" class="catgry">
        
           <h2>{{ item.name }}</h2>
           <p>{{ item.desc }}</p>
           <button>Explore More</button>
        </div>
    </div>

</template>

<script setup>
  
  import  Categories from '@/mixins/Category';

   const { items }  = Categories();

</script>

<style scoped>
/* .card{

} */
.card{
    width:90vw;
    height:70vh;
    display: flex;
    flex-wrap: wrap;
    gap:20px;
    margin: auto;
}
.catgry{ 
   
    width:300px;
    height: 150px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    border:1px solid grey;
    margin: 10px auto;
}
h2{
    font-size:26px;
    text-align: center;
    padding-top: 8px;
}
p{
    font-size: 18px;
    padding-top: 10px;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}
button{
    margin:15px auto;
    font-family:fantasy;
}
</style>