<template>
  <div class="mainpage-container" id="popular">
    <div class="mainpage">
      <div class="responsive-container">
        <h6>Популярное</h6>
        <div class="horizontal-content">
          <div class="top">
            <h3>Предлагаем посетить <span class="h-blue">самые</span><br/>
              <span class="h-blue">актуальные маршруты страны</span>
            </h3>
            <div class="goto">
              <span>Посмотреть все маршруты</span>
              <div class="arrow-right"></div>
            </div>
          </div>
          <div class="down">
            <div
              v-for="tour in popular"
              :key="tour.id"
              class="tour-card"
              :style="'background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(http://russia-tourism/storage/'+tour.image+')'"
            >
              <div class="bottom">
                <div class="title">{{ tour.title }}</div>
                <div class="cities">{{ tour.start_city.title }} &mdash; {{ tour.finish_city.title }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['tours'],
  components: {

  },
  data() {
    return {
    };
  },
  computed: {
    popular() {
      return this.tours.filter((tour) => tour.is_popular);
    },
  },
  methods: {
  },
  created() {
  },
  mounted() {

  },
};
</script>
  
  