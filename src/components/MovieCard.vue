<template>
    <div>
        <h1 v-show="movieData.image =='https://image.tmdb.org/t/p/w342null'">{{movieData.title}}</h1>
        <img :src="movieData.image" alt="">
        <div>{{ movieData.title }}</div>
        <div>{{ movieData.originalTitle }}</div>
        <font-awesome-icon icon="fa-solid fa-star" />
        <font-awesome-icon icon="fa-regular fa-star" />
        <div>{{ movieData.originalLanguage }}</div>
        <country-flag :country='movieData.originalLanguage' size='normal'/>
        <div>{{ movieData.rating }}</div>
    </div>
</template>

<script>

export default {
    name: "MovieCard",
    props: {
        movieData: Object,
    },
    methods: {
        
    }
}



</script>

<style scoped lang="sass">

</style>