<template>
  <div class="footer" id="footer">
    <div class="responsive-container">
        <div class="content-container">
          <div class="left">
            <img src="@/assets/img/commas.svg" alt="">
            <div class="quote">
              Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта.
            </div>
            <div class="contact">
              <div class="tel">8 800 555 3535</div>
              <div class="address">Студенческая 7</div>
            </div>
          </div>
          <div class="logo">
            <img src="@/assets/img/logo.svg" alt="">
          </div>
          <div class="right">
            <div class="menu">
              <div class="menu-el">
                <router-link to="/tours">
                  Туры
                </router-link>
              </div>
              <div class="menu-el">
                <router-link to="/#popular">
                  Популярное
                </router-link>
              </div>
              <div class="menu-el">
                <router-link :to="'/#about'">
                  О нас
                </router-link>  
              </div>
              <div class="menu-el">
                Отзывы
              </div>
              <div class="menu-el">
                <a href="#footer">
                Контакты
                </a>
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
  
  