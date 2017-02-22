<template>
	<div class="hybris">
		<div class="row help">
			<h3 class="col-xs-12">提出问题求助:</h3>
			<div class="col-xs-12">
				<span>问题：</span>
				<input type="text" class="title" placeholder="有问题求助"/>
			</div>
			<div class="col-xs-12">
				问题描述：
			</div>
			<div class="col-xs-12">
				<textarea class="col-xs-12"></textarea>
			</div>
		</div>
		<div class="row">
			<h3 class="col-xs-12">{{this.title}}</h3>
			<ol class="col-xs-12">
				<li v-for="question in questions">
					<a :href="question.url">{{question.msg}}</a>
				</li>
			</ol>
		</div>

	</div>
</template>

<script>
export default {
  name: 'hybris',
  data () {
    return {
			title:'Questions:',
			questions:[
				{msg:'Hybris 怎么玩？',url:''},
				{msg:'Hybris 怎么玩？',url:''},
				{msg:'Hybris 怎么玩？',url:''},
				{msg:'Hybris 怎么玩？',url:''}
			]
    }
  }
}
</script>
