<template>
  <div class="firstpage">
    <Header/>
    <div class="responsive-container">
      <div class="firstpage-container">
        <div class="main-text">
          <span>Туры по России</span>
          <span>&mdash; больше, чем</span>
          <span>путешествие</span>
        </div>
        <div class="counter-container">
          <transition name="fade">
            <div class="counter" :key="curr_count.count">
              <div class="counter_number">
                {{ curr_count.count }}
              </div>
              <div class="counter_text">
                {{ curr_count.title }}
              </div>
            </div>
          </transition>
        </div>
      </div>
      <div class="secondary-text">
        посетите места, где мечтали побывать
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  components: {
    Header,
  },
  data() {
    return {
      curr_counter: 0,
      titles: [
        {
          count: 1118,
          title: 'Городов',
        },
        {
          count: 48,
          title: 'Туров',
        },
        {
          count: 542,
          title: 'Отзыва',
        },
      ],
    };
  },
  methods: {
  },
  created() {
    let i = 0;
    setInterval(() => {
      i++
      this.curr_counter = i % 3
    }, 2000);
  },
  computed: {
    curr_count() {
      return this.titles[this.curr_counter];
    },
  },
  mounted() {

  },
};
</script>
  
<style lang="scss">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  
}
</style>