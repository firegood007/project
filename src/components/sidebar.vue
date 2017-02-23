<template>
  <div class="row">
    <div class="col-xs-12">
      <ul>
        <li><router-link to="/factory">智慧工厂</router-link></li>
        <li><router-link to="/ctrlight">照明控制</router-link></li>
        <li><router-link to="/situation">场景预设</router-link></li>
        <li><router-link to="/group">分组控制</router-link></li>
        <li><router-link to="/setting">定时设置</router-link></li>
        <li><router-link to="/source">能源管理</router-link></li>
        <li><router-link to="/env">环境感知</router-link></li>
        <li><router-link to="/power">能效分析</router-link></li>
        <li><router-link to="/savesource">节能报告</router-link></li>
      </ul>
    </div>
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
