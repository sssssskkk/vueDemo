<template>
 	<div id="main-view" class='Main clear-fix' transition="fade-out-left" transition-mode="in-out">
        <music-header></music-header>
        <paihang-view></paihang-view>
    </div>
</template>
<script>
var Header = require('../components/Header');
var List = require('../components/Player');
var Paihang = require('../components/paihang');
module.exports = {
    components: {
        'music-header': Header,
        'paihang-view':Paihang,
        'play-list': List
    }
};
</script>