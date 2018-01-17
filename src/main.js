import Vue from 'vue';
import App from './App.vue';
import ChaInput from './CharacteristicInput.vue';

new Vue({
    el: '#app',
    render: h => h(App),
    components: {
        ChaInput
    }
});