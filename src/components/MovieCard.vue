<template>
    <div>
        <img :src="movieData.image" alt="">
        <div>{{ movieData.title }}</div>
        <div>{{ movieData.originalTitle }}</div>
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
        flag: Boolean,
    },
    methods: {
        
    }
}



</script>

<style scoped lang="sass">

</style>