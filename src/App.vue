<template>
  <comingSoon msg="Coming Soon"/>
</template>

<script>
import comingSoon from './components/comingSoon'

export default {
  name: 'App',
  components: {
    comingSoon
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
