import App from '@/App.vue';
import BootStrapVue from 'bootstrap-vue';
import Vue from 'vue';
import {CreateElement} from 'vue';

Vue.use(BootStrapVue);

// @ts-ignore
const v = new Vue({
    el: '#app',
    render: (createElement: CreateElement) => createElement(App),
});
