
 <template>
    <div v-if="dataStore.uploadedImg && dataStore.uploadedImg.length > 0" class="image-sec">
  <div v-for="image in dataStore.uploadedImg" :key="image.url" class="image-card">
    <img :src="image.url" :alt="image.url">
    <div class="btn-sec">
      <button class="del-btn" @click="dataStore.deleteImages(image.id)">Delete</button>
      <button class="dwd-btn" @click="downloadable(image.url)">download</button>
    </div>
  </div>
  </div>
  <div v-else class="nothing">
    <h3>Oops.. No Images to Show...!!</h3>
  </div>
</template>

<script setup>
import { useDataStore } from '@/pinia/index.js';

const dataStore = useDataStore ();

const downloadable = (url)=>{
    const a = document.createElement("a");
    a.href = url;
    a.download = url.split('/').pop();
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

</script>

<style scoped> 
.image-sec{
  width:90vw;
  height:max-content;
  margin:20px auto;
  background-color: beige;
  display: flex;
  flex-wrap:wrap;
  gap:50px;
}
.image-card{
  width:300px;
  height:410px;
  margin:20px auto;
}
img{
  width:100%;
  height:95%;
  object-fit: cover;
}
.btn-sec{
  display: flex;
  justify-content: space-around;
}
button{
  width:120px;
  height:30px;
  padding:5px 8px;
  border-radius: 8px;
}
.del-btn{
  background-color: red;
  font-weight:bold;
}
.dwd-btn{
  color:wheat;
  background-color: black;
  font-family: 'Courier New', Courier, monospace;
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
