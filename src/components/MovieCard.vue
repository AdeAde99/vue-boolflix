<template>
    <div>
        <div>{{ movieData.title }}</div>
        <div>{{ movieData.original_title }}</div>
        <div>{{ movieData.original_language }}</div>
        <div>{{ movieData.vote_average }}</div>
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