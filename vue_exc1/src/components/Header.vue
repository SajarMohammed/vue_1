<style scoped>
.main {
  background-color: grey;
}

.head {
  padding: 0; /* Reset padding for the header */
}
/* .log{
    display: flex;
} */

.logo {
    /* flex: 1; */
  padding: 10px ;
  color: white;
  font-size: 20px;
  margin: 10px 39px;
}

.list {
  text-align: center;
  padding: 10px 20px;
  margin:10px 0px 10px 80px;
   /* flex: 1; */
  
   
}
.custom-links{
    text-decoration: none;
}

.titles {
  color: white;
 
  /* Add any other styles as needed */
}
</style>
<template>
    
    <el-container class="main">
        <el-header class="head">
            <el-row >
                <el-col :span="4" class="logo">logo</el-col>
            <el-col v-for="nav in navlinks" :key="nav.id" class="list" :span="2">
    <router-link :to="nav.url" class="custom-links"><h4 class="titles">{{ nav.title }}</h4></router-link>  </el-col>
    </el-row>
        </el-header>
    </el-container>
</template>

<script>
  export default{
    data(){
        return{
            navlinks: [
                {
                    id:1, title: "Home", url :"/"
                },
                {
                    id:2, title: "About", url :"/about"
                },
                 {
                    id:3, title: "Products", url :"/product"
                },
                {
                    id:4, title: "Contact", url :"/contact"
                },
            ]
        }
    }
  }
</script>