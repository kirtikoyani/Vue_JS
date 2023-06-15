import {createWebHistory,createRouter} from 'vue-router'
import RhomePage from './components/RhomePage.vue'
import RloginPage from './components/RloginPage.vue'
import RprofilePage from './components/RprofilePage.vue'
import PageNotfound from './components/404Page.vue'
const routes=[
    {
        name:'homePage',
        path:'/',
        component:RhomePage
    },
    {
        name:'loginPage',
        path:'/login/:id',
        component:RloginPage
    },
    {
        name:'profilePage',
        path:'/profile/:name',
        component:RprofilePage
    },
    {
        name:'pageNotFound',
        path:'/:pathMatch(.*)*',
        component:PageNotfound
    }
];

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;