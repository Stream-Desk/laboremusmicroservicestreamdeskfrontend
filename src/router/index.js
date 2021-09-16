import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/shared/Login.vue";
import Tickets from "../components/shared/Tickets.vue";
import RaiseTicket from "../components/raise_ticket.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  { path: "/raise-ticket", name: "RaiseTicket", component: RaiseTicket },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/tickets",
    name: "Tickets",
    component: Tickets,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
