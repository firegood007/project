<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/hybris">Hybris</router-link></li>
      <li><router-link to="/vue">Vue</router-link></li>
      <li><router-link to="/angular">Angular</router-link></li>
      <li><router-link to="/react">React</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'sidebar',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>
