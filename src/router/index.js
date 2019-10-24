import Vue from 'vue'
import VueRouter from 'vue-router'
import yummyNav from '../components/yummyNav.vue'
import yummyList from '../components/yummyList.vue'


Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: yummyNav},
        { path: '/list', component: yummyList},
    ]
})

export default  router