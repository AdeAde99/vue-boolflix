<template>
    <div>
        <div>{{ movieData.title }}</div>
        <div>{{ movieData.originalTitle }}</div>
        <div>{{ movieData.originalLanguage }}</div>
        <div>{{ movieData.rating }}</div>
    </div>
</template>

<script>
export default {
    name: "MovieCard",
    props: {
        movieData: Object,
    }
}
</script>

<style scoped lang="sass">

</style>