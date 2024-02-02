import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import App from './App.vue';
import Home from "./pages/Home.vue"
import { createPinia } from 'pinia';
import "./main.css"

const routes = [{
    path:"/" , component: Home 
},{
    path:"/about" , component: ()=> import("./pages/About.vue")
},{
    path:"/product" , component: ()=> import("./pages/ProductPage.vue") 
},{
    path:"/product/:id" , component: ()=> import("./pages/SingleProduct.vue") 
},{
    path:"/contact" , component: ()=> import("./pages/Contact.vue") 
},{
    path:"/upload" , component: ()=> import("./pages/UploadSec.vue") 
},{
    path:"/display" , component: ()=> import("./pages/DisplaySec.vue") 
},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App)
const pinia = createPinia()
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')
