<template>
  <div class="popup-container">
    <div class="popup" id="popup">
      <div class="left">
        <h3>Осталось<br/>
          немного, <br/>
          <span class="h-blue">
            до отправки<br/>
            заявки
          </span>
        </h3>
        <h6>
          Оставьте свои данные и контакты,<br/>чтобы мы могли с Вами связаться!
        </h6> 
        <div class="inputs">
          <input type="text" v-model="surname" placeholder="Введите фамилию">
          <input type="text" v-model="name" placeholder="Введите имя">
          <input type="tel" v-model="tel" placeholder="Введите телефон">
        </div>
        <div class="goto" @click="send()">
          <span>Оставить заявку</span>
          <div class="arrow-right"></div>
        </div>
      </div>
      <div class="right">
        <div class="selected-tour-container">
          <div class="selected-tour-label">Выбранный тур:</div>
          <div class="selected-tour">
            <Tour :tour="tour"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapState } from 'vuex';
import Tour from '@/components/Tour.vue';

export default {
  components: {
    Tour,
  },
  data() {
    return {
      name: '',
      surname: '',
      tel: '',
    };
  },
  methods: {
    async send() {
      if (!this.name.length || !this.surname.length || !this.tel.length) {
        alert('Заполните все поля');
        return false;
      }

      const params = {
        name: this.name,
        surname: this.surname,
        tel: this.tel,
        tour_id: this.tour.id
      };

      const options = {
          method: 'POST',
          body: JSON.stringify( params )  
      };

      await fetch('http://russia-tourism/api/bid', options)
      this.$store.commit('setTour', '');
      alert('Заявка успешно отправлена! Ждите нашего звонка.')
    },
  },
  computed: mapState({
    tour: 'tour',
  }),
  created() {
  },
  mounted() {

  },
};
</script>