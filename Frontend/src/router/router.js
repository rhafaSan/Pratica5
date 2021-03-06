import { createWebHistory, createRouter } from 'vue-router';

import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue';
import ShowAll from '@/views/ShowAll.vue';
import ShowPeople from '@/views/ShowPeople.vue';
import Update from '@/views/Update.vue';
import Delete from '@/views/Delete.vue';

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      name: 'Home',
      path: '/',
      component: Home
    },
    {
      name: 'Register',
      path: '/register',
      component: Register
    },
    {
      name: 'ShowAll',
      path: '/show-all',
      component: ShowAll
    },
    {
      name: 'ShowPeople',
      path: '/:id',
      component: ShowPeople
    },
    {
      name: 'Update',
      path: '/update/:id',
      component: Update
    },
    {
      name: 'Delete',
      path: '/delete/:id',
      component: Delete
    }
  ]
})

export default router;