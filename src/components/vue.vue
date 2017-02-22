<template>
	<div class="continer">
		<div class="row">
			<h3>双向数据绑定:</h3>
			<div class="col">
				<input v-model="msg">
				<span>输入: {{msg}}</span>
				<pre>this.msg = "{{this.msg}}"</pre>
				<button v-on:click="changeMsg">This.msg="Rory Wu"</button>
			</div>
			<div class="col">
				<pre>
					data () {
						return {
							msg:'Rory Wu',
						}
					}
				</pre>
			</div>
		</div>
		<div class="row">
			<h3>filter过滤器:</h3>
			<div class="col">
				<input v-model="msgs">
				<span>{{msgs | upFn}}</span>
			</div>
			<div class="col">
				<pre>
					filters:{
						upFn(value){
							 if (!value) return '';
							 return value.toUpperCase();
						}
					}k
				</pre>
			</div>
		</div>
	</div>

</template>

<script>
export default {
  name: 'vue',
  data () {
    return {
			msg:'Rory Wu',
			msgs: 'sdsadsds',
    }
  },
	methods : {
		changeMsg(){
			this.msg = "Rory Wu";
		}
	},
	filters:{
		upFn(value){
			 if (!value) return '';
			 return value.toUpperCase();
		}
	}
}
</script>

<style scoped>

</style>
