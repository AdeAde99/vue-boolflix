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

<style scoped lang="scss">
  h2 { color: #9e0000;
   }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5vh;

    background-color: black;
    h2 {
      margin-left: 3rem;
    }
    form {
      margin-right: 3rem;
      button {
        background-color: #9e0000;
      }
    }
  }
</style>