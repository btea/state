import Vue from 'vue';
import VueComposition from '@vue/composition-api';

Vue.use(VueComposition);
import App from './App.vue';
console.log(App);
new Vue({
	render: h => h(App),
}).$mount('#app');
