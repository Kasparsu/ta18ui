import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
Vue.config.productionTip = false;
Vue.use(Vuetify);
export default new Vuetify({ })
let app = new Vue({
    el: '#app',
    vuetify: new Vuetify()
 
});

