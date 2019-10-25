import Vue from 'vue'
import VueRouter from 'vue-router'
import yummyMenu from '../components/yummyMenu.vue'
import yummyList from '../components/yummyList.vue'
import yummyWrite from '../components/yummyWrite.vue'
import yummyView from '../components/yummyView.vue'


Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: yummyMenu},
        { path: '/list/:cid', component: yummyList},
        { path: '/write/:bid', component: yummyWrite},
        { path: '/view/:bid', component: yummyView}
    ]
})

export default  router