import VueRouter from 'vue-router'
import HomeView from './views/Home.vue'
import ListView from './views/List.vue'
import AddView from './views/Add.vue'
import EditView from './views/Edit.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/list', component: ListView },
    { path: '/add', component: AddView },
    { path: '/udpate/:id', component: EditView }
];

const router = new VueRouter({
    routes
});

export default router