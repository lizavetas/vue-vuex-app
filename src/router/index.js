import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Carfinder from '@/components/Carfinder';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/where',
            name: 'Carfinder',
            component: Carfinder
        }
    ]
})
