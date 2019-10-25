import Vue from 'vue'
import VueRouter from 'vue-router'
import yummyNav from '../components/yummyNav.vue'
import yummyList from '../components/yummyList.vue'
import yummyWrite from '../components/yummyWrite.vue'
import yummyView from '../components/yummyView.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: yummyNav},
        { path: '/list', component: yummyList},
        { path: '/write', component: yummyWrite},
        { path: '/view', component: yummyView}
    ]
})

export default  router