import Vue from 'vue'
import App from './components/App'

window.onload = () => {
  new Vue({
    el: '#app',
    components: { App },
    template: '<app/>',
  });
};
