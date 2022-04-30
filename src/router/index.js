import { createRouter, createWebHistory } from 'vue-router';
import Client from '@/modules/client/views/Client.vue';


const routes = [
 
  {
    path: '/',
    name: 'Client',
    component: Client,
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
