import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Post/HomeView.vue";
import CreateView from "../views/Post/CreateView";
import EditView from "../views/Post/EditView";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/posts/create",
    name: "create",
    component: CreateView,
  },
  {
    path: "/posts/edit/:id",
    name: "edit",
    component: EditView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
