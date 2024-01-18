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
},
]

const router = createRouter({
    history:createWebHistory(),
    routes
})

const app = createApp(App)

app.use(ElementPlus)
app.use(router)
app.mount('#app')
