<template>
  <div class="mainpage-container">
    <div class="mainpage">
      <div class="responsive-container">
        <h6>Популярное</h6>
        <div class="horizontal-content">
          <div class="top">
            <h3>Предлагаю посетить <span class="h-blue">самые</span><br/>
              <span class="h-blue">актуальные маршруты страны</span>
            </h3>
            <div class="goto">
              <span>Посмотреть все маршруты</span>
              <div class="arrow-right"></div>
            </div>
          </div>
          <div class="down">
            <div
              v-for="kek in [1,2,3,4]"
              class="tour-card"
              style="background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3)), url('/src/assets/img/morning.jpg')"
            >
              <div class="bottom">
                <div class="title">Классика жанра</div>
                <div class="cities">Москва &mdash; Санкт-Петербург</div>
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
  components: {
  },
  data() {
    return {
    };
  },
  methods: {
  },
  created() {
  },
  mounted() {

  },
};
</script>
  
  