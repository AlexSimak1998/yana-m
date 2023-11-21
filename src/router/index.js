import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/MainPAges.vue'
import Abaut from '../pages/AbautPAges.vue'
import CardPages from '../pages/CardPages.vue'




const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/CardPages/:id/:title/:price/:material/:size/:color/:images',
    name: 'CardPages',
    component: CardPages,
    props: true,
    beforeEnter(to, from, next) {
      window.scrollTo(0, 0);
      next();
    }
  },
  {
    path: '/Abaut',
    name: 'Abaut',
    component: Abaut

  }
]


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;