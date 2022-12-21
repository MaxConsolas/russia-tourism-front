<template>
  <main>
    <First/>
    <Second/>
    <Third/>
    <Footer/>
  </main>
</template>

<script>
import First from '@/components/First.vue';
import Second from '@/components/Second.vue';
import Third from '@/components/Third.vue';
import Footer from '@/components/Footer.vue';

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
  created() {
  },
  mounted() {

  },
};
</script>

