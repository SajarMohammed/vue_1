<style scoped>
.top {
  width: 90vw;
  height: 85vh;
  display: flex;
  margin: 20px auto;
  gap: 20px;
}

.first-sec {
  width: 40%;

}

.first-sec img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.second-sec {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 60px;
}
.qty{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:20px;
}
.qty button{
    width:50px;
    height:40px;
    border-radius: 50px;
}
.second-sec h1{
    font-family:'Courier New', Courier, monospace;
}
.second-sec p {
    font-family:Arial, Helvetica, sans-serif;
    letter-spacing: 2px;
}
.confrm{
   margin:10px auto;
   width:200px;
   height: 50px;
   background-color: gray;
   color: aliceblue;
   border: 1px solid grey;
   border-radius:8px;
}
</style>

<template>
    <div class="top">
        <div class="first-sec">
           <img :src="Vegies" alt="image"> 
        </div>
        <div class="second-sec">
              <h1>A Pack of Vegies</h1>
              <p>Experience the goodness of nature with our Fresh and Healthy Vegetable Pack! Packed with an assortment of vibrant, farm-fresh vegetables, this pack is your ticket to a nutritious and delicious culinary journey.</p>
              
              <div class="qty">
                <button @click="decrement"> - </button>
                <span>{{ count }}</span>
               <button @click="increment">+</button>
              </div>
              <p>price: ${{ price }}</p>
              <button class="confrm" @click="orderConfirm">Place Order</button>
        </div>
       <router-link to="/product">
        <button>Back</button>
    </router-link>
    </div>
  
</template>

<script setup>
import { ref } from "vue";
   import Vegies from "../assets/vegetables.jpg"
    
  const count = ref(1);
  const price = ref(120)

   const increment = ()=>{
       count.value+=1;
       price.value =count.value * 120;
   }
   
   
   const decrement = ()=>{

     count.value > 1 ? (count.value-=1, price.value -= 120) : count.value;
     
   }

   const orderConfirm = () =>{
    alert(`Order placed successfully. Count: ${count.value}`);
   }

</script>