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

export default {
  components: {
    First,
    Second,
    Third,
    Footer,
  },
  data() {
    return {
      tours: [],
    };
  },
  methods: {
  },
  created() {
    fetch('http://russia-tourism/api/tours')
      .then((response) => response.json())
      .then((data) => this.tours = data.tours)
  },
  mounted() {

  },
};
</script>

