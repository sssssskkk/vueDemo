<template>
    <header id="m-hd" class="bar bar-nav base-color">
        <a href="javascript:;" class="icon icon-prevs pull-left base-icon-color"  v-link="{ path: '/' }"></a>
        <h1 class="title base-icon-color">{{title}}</h1>
    </header>
</template>

<script>
module.exports = {
	props:{
		title:String
	}
};
</script>
