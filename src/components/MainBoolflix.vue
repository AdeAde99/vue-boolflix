<template>
  <main>
    <MovieCard v-for="movie in arrMovies" :key="movie.id" :movieData="movie" />
  </main>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';

export default {
    name: "MainBoolflix",
    components: {
      MovieCard,
    },
};
</script>

<style scoped lang="sass">

</style>