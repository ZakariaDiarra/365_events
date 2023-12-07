

import { createRouter, createWebHistory } from "vue-router"

import HomePage from '../components/HomePage.vue'
import EventList from '../components/EventList.vue'
import EventDetail from '../components/EventDetail.vue'
import UserDashboard from '../components/UserDashboard.vue'
import PaymentPage from '../components/PaymentPage.vue'

import CategoryPage from '../components/CategoryPage.vue';

import UserLogin from '../components/UserLogin.vue'
import UserRegister from '../components/UserRegister.vue'





const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/events',
        name: 'EventList',
        component: EventList
    },
    {
        path: '/events/:id',
        name: 'EventDetail',
        component: EventDetail
    },
    {
        path: '/userdashboard',
        name: 'UserDashboard',
        component: UserDashboard
    },
    {
        path: '/payment/:eventId',
        name: 'PaymentPage',
        component: PaymentPage,
        props: true
    },
    {
        path: '/userlogin',
        name: 'UserLogin',
        component: UserLogin
    },
    {
        path: '/userregister',
        name: 'UserRegister',
        component: UserRegister
    },
    {
        path: '/category/:categoryName',
        name: 'CategoryPage',
        component: CategoryPage,
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
