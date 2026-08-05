import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from "vue-router";
import HomeView from "./views/HomeView.vue";
import NotFoundView from "./views/NotFoundView.vue";
import {createI18n} from "vue-i18n";
import plLang from "./i18n/pl.lang.ts";
import enLang from "./i18n/en.lang.ts";

const i18n = createI18n({
  locale: "pl",
  fallbackLocale: 'en',
  messages: {
    pl: plLang(),
    en: enLang()
  }
})

const router = createRouter({
  routes: [
    { path: '/', component: HomeView },
    { path: '/:pathMatch(.*)*', component: NotFoundView },
  ],
  history: createWebHistory(),
});

createApp(App)
  .use(router)
  .use(i18n)
  .mount('#app')
