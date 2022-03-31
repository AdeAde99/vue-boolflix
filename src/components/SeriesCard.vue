<template>
    <div>
        <img :src="seriesData.image" alt="">
        <div>{{ seriesData.title }}</div>
        <div>{{ seriesData.originalTitle }}</div>
        <div>{{ seriesData.originalLanguage }}</div>
        <country-flag :country='seriesData.originalLanguage' size='normal'/>
        <div>{{ seriesData.rating }}</div>
    </div>
</template>

<script>


export default {
    name: "SeriesCard",
    props: {
        seriesData: Object,
        flag: Boolean,
    },
    methods: {
        
    }
}



</script>

<style scoped lang="sass">

</style>