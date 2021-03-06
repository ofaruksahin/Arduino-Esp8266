import Vue from 'vue'
import VueRouter from 'vue-router'


import auth from './auth'
import dashboard from './dashboard'
import device from './device'

import { Guard } from './guard'

Vue.use(VueRouter)

const routes = [
    auth,
    dashboard,
    device
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

Guard(router);

export default router