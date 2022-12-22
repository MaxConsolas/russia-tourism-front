import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

const app = createApp(App)


const store = createStore({
  state () {
    return {
      tours: [],
      tour: '',
    }
  },
  mutations: {
  setTours (state, tours) {
    state.tours = tours;
  },
    setTour (state, tour) {
    state.tour = tour;
  }
  }
})

app.use(store)

app.use(router)

app.mount('#app')
