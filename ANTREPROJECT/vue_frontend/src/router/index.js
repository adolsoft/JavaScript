import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView";
import AboutView from "../views/AboutView";
import ErrorView from "../views/ErrorView";
import UsersView from "../views/UsersView";
import LoginView from "../views/LoginView";
import TodoView from "../views/TodoView";
import AntrenorLoginView from "../views/AntrenorLoginView";
import ornek from   "../views/ornek1View";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/users',
    name: 'users',
    component: UsersView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/ornek',
    name: 'ornek',
    component: ornek,
  },
  {
    path: '/antrenorlogin',
    name: 'antrenorlogin',
    component: AntrenorLoginView,
  },
  {
    path: '/todo',
    name: 'todo',
    component: TodoView,
  },
  {
    path: '*',
    name: 'error',
    component: ErrorView,
  },
];

const router = new VueRouter({
  
  mode:'history', //sayfada ileri geli için bilgileri hafızada tut anlamındadır.
  routes,
});

// yukarıdaki komutları yazdıktan sonra bu sayfayı kullanabilmek için export etmemiz gerekiyor.
 export default router;
// bunuda main.js dosyasında import etmemiz gerekiyor.