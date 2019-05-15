import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import Profile from "@/components/Profile";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Login",
      component: Login
    },
    {
      path: "/welcome",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/leanie-profile",
      name: "leanie-profile",
      component: Profile
    }
  ]
});
