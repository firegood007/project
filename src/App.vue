<template>
  <div id="app" class="container-fluid">
    <div class="header row">
      <div class="col-xs-3">
        <div class="log">log</div>
      </div>
      <div class="col-xs-9">
        <div class="row">
          <div class="left col-xs-9">
            <span>list</span>
            <span>home</span>
            <span>user</span>
          </div>
          <div class="right col-xs-3 text-right">
            <div class="select">select</div>
          </div>
        </div>
        
      </div>
    </div>
    <div class="sidebar row">
      <div class="col-xs-3">
        <sidebar/>
      </div>
      <div class="content col-xs-9">
          <router-view></router-view>
      </div>
    </div>
    <div class="footer row">
      
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
