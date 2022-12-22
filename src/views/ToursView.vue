<template>
  <main>
    <Header addclass="black"/>
    <div class="mainpage-container">
      <div class="mainpage">
        <div class="responsive-container">
          <div class="tour-list">
            <Tour v-for="tour in tours" :key="tour.id" :tour="tour"/>
          </div>
        </div>  
      </div>
    </div>
    
  </main>
</template>

<script>
import Header from '@/components/Header.vue';
import Tour from '@/components/Tour.vue';
import { mapState } from 'vuex';

export default {
  components: {
    Header,
    Tour,
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: mapState({
    tours: 'tours',
  }),

  mounted() {

  },
};
</script>

