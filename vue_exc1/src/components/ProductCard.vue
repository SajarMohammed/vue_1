<template>
    <div class="product-card">
      
        <h2 class="head-tag">{{ product.name }}</h2>
        <p>{{ product.desc }}</p>
        <span>${{ product.price }}</span>
  <router-link :to="'/product/' + product.id">      
    <button  
    @click="handleClick"
    >Click me</button> 
       </router-link>
    </div>
</template>

<script setup>
  const props = defineProps(['product']);
  const emit = defineEmits(['cardClick']);
  const handleClick = () => {
  emit('cardClick', props.product);
  }
</script>

<style>
   .product-card{
    width:200px;
    height:140px;
    border: 1px solid grey;
    padding: 10px;
    margin:40px;
    display: flex;
    flex-direction: column;
    gap:10px;
   }
   button{
    width:max-content;
    padding:5px;
   }
   .head-tag{
    font-size: 26px;
    font-weight:600;
    color:blue
   }
   span{
    color:red;
   
   }
</style>