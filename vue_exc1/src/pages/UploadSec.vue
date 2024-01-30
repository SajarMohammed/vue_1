<style scoped>
.sec{
 display: flex;
 align-items: center;
 justify-content: center;
 margin-top:120px;
 border: 2px solid grey;
}
.nav-btn{
  background-color: burlywood;
  font-weight:bold;
  font-family: 'Courier New', Courier, monospace;
}
.upload{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
}
.nothing{
    display: flex;
    justify-content: center;
    
}
h3{
  font-size:40px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  letter-spacing: 3px;
  margin-top: 100px;
}
</style>
<template>
    <div class="nothing">
    <h3>Upload Your Images Here</h3>
</div>
  <div class="upload">
  <el-upload
    list-type="picture-card"
    :on-change="handleUpload"
    :before-upload="beforeUpload"
    class="sec"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>

  <el-button @click="goToDisplayPage" class="nav-btn">Go to Display Page</el-button>
  </div>
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue';
import { useDataStore } from "@/pinia/index.js";

import { useRouter } from 'vue-router';

const router = useRouter();

  
const handleUpload = (file) => {
     
  let imageInfo = {
        id:Math.floor(Math.random() * 1000),
        name: file.name,
        type: file.type,
        size: file.size,
    };
     
      const reader = new FileReader();
      reader.onload = (e) => {
        imageInfo.url = e.target.result
        const dataStore = useDataStore();
        dataStore.setImages(imageInfo);
        
        // storeData.setData(e.target.result);
     

      };
      reader.readAsDataURL(file.raw);
      alert("image uploaded successfully")
    }
const beforeUpload = () =>{
      return false;
    }
const goToDisplayPage = () =>{
      router.push('/display');
    }


</script>
