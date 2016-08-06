<template>
    <div class="content padbtm-40" id="search-view" transition="fade-in-left" transition-mode="out-in">
        <tab></tab>
        <show-list :show-list="showList"></show-list>
    </div>
    <loading v-if='!loaded'></loading>
</template>
<script>
var showList = require('./ShowList');
var loading = require('./Loading');
var tab = require('./tab');

module.exports = {
    data: function () {
        return {
            name:'',
            showList: [],
            loaded:false
        }
    },
    components:{
        'show-list':showList,
        'tab':tab,
        'loading':loading
    },
    created:function(){
        this.bang();
    },
    methods: {
        bang: function () {
            this.$http.get('/bang').then(function(res){
                this.showList = res.data.list;
                this.loaded=true;
            }, function (res) {
                console.error('error: ' + res.status);
            });
        }
    }
};
</script>
