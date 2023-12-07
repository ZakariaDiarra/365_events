import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import './assets/styles.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import store from './store'

library.add(faThumbsUp, faComment, faHeart)



const app = createApp(App);

app.use(router);

app.use(store);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
