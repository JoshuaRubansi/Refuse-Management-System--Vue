import Dashboard from '../views/Dashboard.vue'

import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history : createWebHistory(),
    routes: [
        {
            path: '/',
            component: Dashboard 
        },
        {
            path: '/About',
            component: ()=> import('../views/About.vue')
        },
        {
            path: '/Clients',
            component: ()=> import('../views/Client.vue')
        },
        {
            path: '/Customers',
            component: () => import('../views/Customers.vue')
        }
       
    ]
})
 export default router 