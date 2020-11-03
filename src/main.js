import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import  VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import Task from './components/Task.vue'
import FinancialAsset from './components/FinancialAsset.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  routes: [
    {
      path: "/hello-world", 
      component: HelloWorld

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
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
