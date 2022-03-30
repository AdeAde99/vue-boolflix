<template>
  <header>
    <h2>BOOLFLIX</h2>
    <form action="" @submit.prevent="$emit('search', stringSearch)">
      <label for="search">
        <input type="text" v-model="stringSearch" id="search" name="search">
        <button>Cerca</button>
      </label>
    </form>
  </header>
</template>

<script>
export default {
    name: "HeaderBoolflix",
    data() {
      return {
        stringSearch: '',
      }
    }
}
</script>

<style scoped lang="sass">

</style>