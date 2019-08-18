import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home/home";
import BeMember from "@/components/BeMember/beMember"
import BuyServices from "@/components/Services/BuyServices/BuyServices"
import FoodServices from "@/components/Services/FoodServices/foodServices"
import PostJob from "@/components/PostJob/PostJob"
import JobPortal from "@/components/JobPortal/JobPortal"
import OurServices from "@/components/Services/OurServices"
Vue.use(Router);
export default new Router({
  mode: "history",
  routes: [
    {path: "/",name: "home",component: Home},
    {path: "/MemberShip",name: "MemberShip",component: BeMember},
    {path: "/BuyServices",name: "BuyServices",component: BuyServices},
    {path: "/FoodServices",name: "FoodServices",component: FoodServices},
    {path: "/JobPosting",name: "PostJob",component: PostJob},
    {path: "/JobPortal",name: "JobPortal",component: JobPortal},
    {path: "/OurServices",name: "OurServices",component: OurServices},
  ]
});
