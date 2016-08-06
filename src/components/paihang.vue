<template>
    <div class="content padbtm-40" id="search-view" transition="fade-in-left" transition-mode="out-in">
        <tab></tab>
        <paihang-view :show-list="showList"></paihang-view>
    </div>
    <loading v-if='!loaded'></loading>
</template>
<script>
var paihangShow = require('./PaihangShow');
var tab = require('./tab');
var loading = require('./Loading');
module.exports = {
    data: function () {
        return {
            loaded: false,
            name:'',
            showList: []
        }
    },
    components:{
        'paihang-view':paihangShow,
        'tab':tab,
        'loading':loading
    },

    created:function(){
        this.paihang();
    },

    methods: {
        paihang: function () {
            this.$http.get('/paihang').then(function(res){
                this.showList = res.data.paihang;
                this.loaded=true

            }, function (res) {
                console.error('error: ' + res.status);
            });

        }
    }
};
</script>

<style>
   
</style>
