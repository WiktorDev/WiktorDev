import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./views/HomeView.vue";
import NotFoundView from "./views/NotFoundView.vue";

createApp(App)
  .use(createRouter({
    routes: [
      { path: '/', component: HomeView },
      { path: '/:pathMatch(.*)*', component: NotFoundView },
    ],
    history: createWebHistory(),
  }))
  .mount('#app')
