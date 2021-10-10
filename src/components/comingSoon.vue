<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <a href="https://github.com/effati78/effati78.com" target="_blank" rel="noopener">github.com</a>
  </div>
</template>

<script>
export default {
  name: 'ComingSoon',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
