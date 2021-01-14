import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  VueRouter from 'vue-router';
import FormUser from './components/FormUser.vue';
import Task from './components/Task.vue'
import NewFinancialAsset from './components/NewFinancialAsset.vue';
import Manage from './components/Manage.vue';
import Dashboard from './components/Dashboard';
import Home from './components/Home.vue';
import Login from './components/Login.vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    { path: "/home", component: Home,
      children: [
        {
          path: "",
          component: Login
        },
        {
          path: "sign-in", 
          component: FormUser
    
        }, 
      ]
    },
    { path: "/", component: Home },
    { path: "/dashboard", component: Dashboard,
      children: [
        {
          path: "manage",
          component: Manage
        },
        {
          path: "",
          component: Manage
        },
        {
          path: "new-user", 
          component: FormUser
    
        }, 
        {
          path: "task", 
          component: Task
        },
        {
          path: "new-financial-asset",
          component: NewFinancialAsset
        },
        {path: 'foo', component: Dashboard }
      ]
    
    },
    
    
  ]
  
})
new Vue({
  vuetify ,
  router,
  iconfont: 'md',
  render: h => h(App)
}).$mount('#app')
