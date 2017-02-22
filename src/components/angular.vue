<template>
	<div class="">
		<div class="row sd">
			<h3>{{this.title}}</h3>
			<div class="col">{{msg}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'angualr',
  data () {
    return {
			title:'Angular',
			msg:'Hello Angualr'
    }
  }
}
</script>

<style lang="less">
 .sd{color:blue;}
</style>
