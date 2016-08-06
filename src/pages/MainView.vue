<template>
    <div id="main-view" class='Main clear-fix' transition="fade-out-left" transition-mode="in-out">
        <music-header></music-header>
        <bang-view></bang-view>
    </div>
</template>

<script>
var Header = require('../components/Header');
var List = require('../components/PlayList');
var Bang = require('./BangView');

module.exports = {
    components: {
        'music-header': Header,
        'bang-view': Bang,
        'play-list': List
    }
};

</script>
