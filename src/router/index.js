import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import About from '../views/About.vue';
import youtube from '../views/youtube.vue';
import Layout from '../views/Layout1.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/youtube",
    name: "youtube",
    component: youtube
  },
  {
    path: "/layout",
    name: "layout",
    component: Layout
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`
  next()
})

export default router;
