<template>
  <header>
    <div class="header-container" :class="addclass">
      <div class="logo-container">
        <div class="logo"></div>
      </div>
      <div class="menu-container">
        <div class="menu">
          <div class="menu-element">
            Туры
          </div>
          <div class="menu-element">
            Популярное
          </div>
          <div class="menu-element">
            О нас
          </div>
          <!-- <div class="menu-element">
            Отзывы
          </div> -->
          <div class="menu-element">
            Контакты
          </div>
          <div class="menu-element lens">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    addclass: {
      default: '',
    }
  },
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
  
  