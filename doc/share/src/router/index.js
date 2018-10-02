import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import article from '@/components/article';
import main from '@/components/main';
import person from '@/components/person';
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/person',
      name: 'person',
      component: person
    }
  ]
})
