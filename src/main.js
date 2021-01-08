import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  VueRouter from 'vue-router';
import FormUser from './components/FormUser.vue';
import Task from './components/Task.vue'
import FinancialAsset from './components/FinancialAsset.vue';
import Manage from './components/Manage.vue';
import Dashboard from './components/Dashboard';
import HomeLogin from './components/HomeLogin.vue'
import 'material-design-icons-iconfont/dist/material-design-icons.css';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HomeLogin
    },
    {
      path: "/dashboard",
      component: Dashboard
    },
    {
      path: "/manage",
      component: Manage
    },
    {
      path: "/new-user", 
      component: FormUser

    }, 
    {
      path: "/task", 
      component: Task
    },
    {
      path: "/new-financial-asset",
      component: FinancialAsset
    }
    
  ]
})
new Vue({
  vuetify ,
  router,
  iconfont: 'md',
  render: h => h(App)
}).$mount('#app')
