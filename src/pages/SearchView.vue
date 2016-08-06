<template>
    <header class="bar bar-nav base-color" id="m-hd" transition="fade-in-left" transition-mode="out-in">
        <div class="flex-row">
            <a href="javascript:;" class="icon icon-prevs pull-left base-icon-color" v-link="{ path: '/' }">
            </a>
            <div class="flex-col m-key-wrap">
                <input type="text" class="m-key base-icon-color" v-model="key" placeholder="歌名 / 艺人 / 专辑">
                <a href="javascript:;" class="m-key-icon base-icon-color" @click="search" >
                    <i class="icon icon-search icon-lg"></i>
                </a>
            </div>
        </div>
    </header>
    <search-list :search-list="searchList"></search-list>
    <loading v-if='!loaded'></loading>

</template>

<script>
var List = require('../components/SearchList');
var search = require('../components/SearchShow');
var loading = require('../components/Loading');

module.exports = {
    data: function () {
        return {
            key: '夜空中最亮的星',
            searchList: [],
            loaded:true
        }
    },
    components: {
        'search-list': search,
        'loading':loading
    },
    methods: {
        search: function () {
            if(!this.key.trim()) {
                return;
            }
            this.loaded=false;
            this.$http.get('/search/' + this.key + '/1').then(function(res){
               this.loaded=true;
               this.searchList = res.data.list;
           }, function (res) {
            console.error('error: ' + res.status);
        });
        }
    }
};
</script>
