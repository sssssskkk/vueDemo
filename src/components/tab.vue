<template>
	<div class="buttons-tab">
		<a href="javascript:;" class="tab-link button" :class="{'active':selected==''}" v-link="{ path: '/' }">推荐</a>
		<a href="javascript:;" class="tab-link button" :class="{'active':selected=='paihang'}" v-link="{ path: '/paihang' }">排行榜</a>
		<a href="#tab3" class="tab-link button" :class="{'active':selected=='person'}" v-link="{ path: '/person' }">我的</a>
	</div>
</template>
<script>
	module.exports={
		data:function(){
			return{
				selected:''
			}
		},
		created:function(){
			this.selected=window.location.href.split('/').pop();
		}
	}
</script>