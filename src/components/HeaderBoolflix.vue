<template>
  <header>
    <h2>BOOLFLIX</h2>
    <form action="" @submit.prevent="$emit('search', string)">
      <input type="text" v-model="string">
      <button>Cerca</button>
    </form>
  </header>
</template>

<script>
export default {
    name: "HeaderBoolflix",
    data() {
      return {
        string: '',
      }
    }
}
</script>

<style scoped lang="sass">

</style>