import Vue from "vue";
import Router from "vue-router";
import Login from "@/components/Login";
import Welcome from "@/components/Welcome";
import Description from "@/components/Description";
import Profile from "@/components/Profile";
import Wizard from "@/components/Wizard";

Vue.use(Router);

export default new Router({
  routes: [{
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
      path: "/description",
      name: "description",
      component: Description
    },
    {
      path: "/wizard",
      name: "wizard",
      component: Wizard
    },
    {
      path: "/leanie-profile",
      name: "leanie-profile",
      component: Profile
    }
  ]
});
