<template>
  <main>
    <First/>
    <Second/>
    <Third :tours="tours"/>
  </main>
</template>

<script>
import First from '@/components/First.vue';
import Second from '@/components/Second.vue';
import Third from '@/components/Third.vue';
import Footer from '@/components/Footer.vue';
import { mapState } from 'vuex';

export default {
  components: {
    First,
    Second,
    Third,
    Footer,
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
  created() {

  },
  mounted() {

  },
};
</script>

