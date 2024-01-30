import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router'
import ElementPlus from "element-plus"
import 'element-plus/dist/index.css'
import App from './App.vue';
import Home from "./pages/Home.vue"
import Contact from "./pages/Contact.vue"
import About from "./pages/About.vue"
import ProductPage from "./pages/ProductPage.vue"
import SingleProduct from "./pages/SingleProduct.vue"
import DisplaySec from "./pages/DisplaySec.vue"
import UploadSec from "./pages/UploadSec.vue"
import { createPinia } from 'pinia';
import "./main.css"

const routes = [{
    path:"/" , component: Home 
},{
    path:"/about" , component: About 
},{
    path:"/product" , component: ProductPage 
},{
    path:"/product/:id" , component: SingleProduct 
},{
    path:"/contact" , component: Contact 
},{
    path:"/upload" , component: UploadSec 
},{
    path:"/display" , component: DisplaySec 
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
