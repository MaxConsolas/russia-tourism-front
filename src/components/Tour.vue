<template>
<div
  class="card"
  :style="'background-image: url(http://russia-tourism/storage/'+tour.image+')'"
>
  <div class="hover-link">
    <div class="hover-link-text">
      Оставить заявку
    </div>
  </div>
  <div class="bottom">
    <div class="title">{{ tour.title }}</div>
    <div class="cities">{{ tour.start_city.title }} &mdash; {{ tour.finish_city.title }}</div>
    <div class="date"><div class="icon"></div>{{ toLocale(tour.date) }}</div>
</div>
</div>
          
</template>

<script>
import moment from 'moment';
export default {
  props: ['tour'],
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
    toLocale(date) {
      moment.locale('ru');
      return moment(date).format('d MMMM');
    },
  },
  created() {
  },
  mounted() {

  },
};
</script>
  
  