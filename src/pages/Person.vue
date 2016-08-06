<template>
	<div id="main-view" class='Main clear-fix' transition="fade-out-left" transition-mode="in-out">
		<music-header></music-header>
		<div class="content padbtm-40" id="search-view" transition="fade-in-left" transition-mode="out-in">
			<tab></tab>
			<play-list></play-list>
		</div>
	</div>
</template>
<script>
	var header=require('../components/Header')
	var PlayList=require('../components/PlayList')
	var tab=require('../components/tab')
	module.exports = {
		components:{
			'music-header':header,
			'play-list':PlayList,
			'tab':tab
		}
	};
</script>
