<template>
	<div class="">
		<div class="row">
			<h3>{{this.title}}</h3>
			<div class="col">{{msg}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'react',
  data () {
    return {
			title:'React',
			msg:'Hello React'
    }
  }
}
</script>

<style scoped>

</style>
