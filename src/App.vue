<template>
  <div id="app" class="container-fluid">
    <div class="header row">
      <div class="col-xs-12">Objectival Life&Technologies</div>
    </div>
    <div class="main row">
      <sidebar class="col-xs-2"/>
      <div class="content col-xs-10">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import sidebar from './components/sidebar'
  export default {
    name: 'app',
    components: {sidebar}
  }
</script>
