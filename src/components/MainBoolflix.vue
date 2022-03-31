<template>
  <main>
    <MovieCard v-for="movie in arrMovies" :key="movie.id" :movieData="movie" />
    <SeriesCard v-for="series in arrSeries" :key="series.id" :seriesData="series" />
  </main>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import SeriesCard from '@/components/SeriesCard.vue';

export default {
    name: "MainBoolflix",
    components: {
      MovieCard,
      SeriesCard,
    },
    props: {
      arrMovies: Array,
      arrSeries: Array,
    }
};
</script>

<style scoped lang="sass">

</style>