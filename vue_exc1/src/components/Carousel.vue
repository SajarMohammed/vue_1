<style scoped>
   .caros-img{
    width:100%;
    height:100%;
    object-fit: contain;
   }

</style>
<template>
    <el-carousel :interval="4000" type="card" height="500px">
      <el-carousel-item v-for="item in data" :key="item.id">
       
        <img :src="item.img" alt="vegetable"  class="caros-img"/>
    
      </el-carousel-item>
    </el-carousel>
  </template>

  <script setup>
  import Veg1 from "@/assets/veg4.jpg"
  import Veg2 from "@/assets/veg6.jpg"
  import Veg3 from "@/assets/veg8.jpg"
  import Veg4 from "@/assets/veg9.jpg"
       const data = [{
        id:1, img : Veg1
       },{
        id:2, img : Veg2
       },{
        id:3, img : Veg3
       },{
        id:4, img : Veg4
       },]
  </script>