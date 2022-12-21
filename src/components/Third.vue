<template>
  <div class="mainpage-container">
    <div id="popular" style="top: -100px; position: relative;"></div>
    <div class="mainpage">
      <div class="responsive-container">
        <h6>Популярное</h6>
        <div class="horizontal-content">
          <div class="top">
            <h3>Предлагаем посетить <span class="h-blue">самые</span><br/>
              <span class="h-blue">актуальные маршруты страны</span>
            </h3>
            <router-link :to="'/tours'">
              <div class="goto">
                  <span>Посмотреть все маршруты</span>
                  <div class="arrow-right"></div>
              </div>
            </router-link>
          </div>
          <div class="down">
            <template 
              v-for="(tour, index) in popular"
              :key="tour.id"
            >
              <div
                v-if="index < 4"
                class="tour-card"
                :style="'background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url(http://russia-tourism/storage/'+tour.image+')'"
              >
                <div class="bottom">
                  <div class="title">{{ tour.title }}</div>
                  <div class="cities">{{ tour.start_city.title }} &mdash; {{ tour.finish_city.title }}</div>
                </div>
              </div>
            </template>
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
  
  