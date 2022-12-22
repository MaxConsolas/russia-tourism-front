<script>
import { RouterLink, RouterView } from 'vue-router'
import { mapState } from 'vuex';
import Footer from '@/components/Footer.vue';
import Popup from '@/components/Popup.vue';

export default {
  components: {
    Footer,
    Popup,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: mapState({
    tour: 'tour',
  }),
  created() {
    fetch('http://russia-tourism/api/tours')
      .then((response) => response.json())
      .then((data) => {
        this.$store.commit('setTours', data.tours)
      })
  },
  mounted() {

  },
};
</script>

<template>
  <RouterView />
  <Footer/>
  <Transition name="fade">
    <Popup v-if="tour"/>
  </Transition>
</template>