import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AddCard from "../views/AddCard";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },

    {
        path: '/subscribe/:coin',
        name: 'coin',
        component: AddCard
    },
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
