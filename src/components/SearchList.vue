<template>
    <div class="">
        <ul class="m-list" id="searchList" v-if="searchList">
            <li class="m-list-item" v-waves.block v-for="item in searchList" >
                <a href="javascript:;" class="container ratina-bd bd-b" @click="onItemClick(item)">
                    <div class="ellipsis">{{item.name}}-{{item.id}}</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
var AddPlayList = require('../store/actions').addPlayList;
var CutSong = require('../store/actions').cutSongByIndex;

module.exports = {

    props: {
        searchList: Array
    },
    vuex: {
        getters: {
            playList: function (state) {
                return state.playList;
            },
            songListLen:function(state){
                return state.playList.length;
            }
        },
        actions: {
            addSong: AddPlayList,
            cutSong: CutSong
        }
    },
    methods: {
        onItemClick: function (item) {

            this.$http.get('/img/'+item.id).then(function(res){

                item.img=res.data.img

            }, function (res) {
                console.error('error: ' + res.status);
            });
            
            this.$http.get('/song/' + item.id).then(function (res) {
                item.url = res.data;
                this.addSong(item);
                var $music= this.$root.$children[0].$els.music;
                if($music){
                    $music.pause();
                    $music.src = '';
                    this.cutSong(this.songListLen-1);
                    $music.src = item.url;
                    $music.play();
                }else{
                    return;
                }
            }, function (res) {
                console.error('error: ' + res.status);
            });

        }
    }
};
</script>
