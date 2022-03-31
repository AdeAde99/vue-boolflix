<template>
  <div id="app">
    <HeaderBoolflix @search="GetMovieData" />
    <MainBoolflix :arrMovies="arrMovies" :arrSeries="arrSeries" />
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix.vue';
import MainBoolflix from './components/MainBoolflix.vue';
import axios from 'axios';


export default {
  name: 'App',
  components: {
    MainBoolflix,
    HeaderBoolflix
  },
  data() {
    return {
      apiUrl: 'https://api.themoviedb.org/3/',
      apiKey: 'eddeb9cc139fc5540af4fe0bcd294c59',
      arrSeries: [],
      arrMovies: [],
      imgUrl: 'https://image.tmdb.org/t/p/w342',
    }
  },
  methods: {
    GetMovieData(stringSearch) {
      if (stringSearch !== '') {
        const objParams = {
          api_key: this.apiKey,
          language: 'it-IT',
          query: stringSearch,
        };

        
        this.axiosCall('movie', objParams);

        this.axiosCall('tv', objParams);
      } else {
        this.arrMovies = [];
        this.arrSeries = [];
      }
    },

    axiosCall(searchType, objParams) {
      axios(`${this.apiUrl}search/${searchType}`, {
        params: objParams,
      })
        .then((response) => {
          if (searchType === 'movie') {
            this.arrMovies = response.data.results.map((movie) => ({
              id: movie.id,
              title: movie.title,
              originalTitle: movie.original_title,
              originalLanguage: movie.original_language,
              rating: Math.ceil(movie.vote_average / 2),
              image: this.imgUrl + movie.poster_path,
            }));
          } else {
            this.arrSeries = response.data.results.map((series) => ({
              id: series.id,
              title: series.name,
              originalTitle: series.original_name,
              originalLanguage: series.original_language,
              rating: Math.ceil(series.vote_average / 2),
              image: this.imgUrl + series.poster_path,
            }));
          }
        });
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
