import Vue from "vue";
import VueRouter from "vue-router";
// import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'mylogin',
    component:()=> import('../views/MyLogin.vue')
  },
  {
    path:'/MyContent',
    name:'mycontent',
    component:()=>import('../views/MyContent.vue'),
    children:[
      {path:'1',component:()=>import('../views/content/ShouYe.vue')},
      {path:'2-1',name:"liebiao",component:()=>import('../views/content/LieBiao.vue')},
      {path:'2-2',component:()=>import('../views/content/DuoCeng.vue')},
    ]
  }
];

const router = new VueRouter({
  routes,
});

// router.beforeEach(function(to,from,next){
//   console.log(to,from)
//   if(to.path === '/login'){
//     next()
//   }else{
//     let token = localStorage.getItem('token')
//     if(!token)return next({path:'/login'})
//     if(token)return next()
//   }
// })
export default router;
