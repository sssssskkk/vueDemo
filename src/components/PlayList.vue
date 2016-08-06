<template>
    <div class="clearfix">
        <div class="list-block media-list bang-list">
            <div v-if="songListLen==0" class='no-song'>还未收听歌曲~</div>
            <ul id="playList" v-if="playList">
                <li v-waves.block v-for="item in playList" data-index="{{$index + 1}}">

                    <div class="item-content" @click="hello($index,item)">
                        <div class="item-inner">
                            <div class="item-title-row">
                                <div class="item-title">{{item.name}}</div>
                            </div>
                            <div class="item-subtitle">{{item.singer}} - {{item.album||'未知专辑'}}</div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    var CutSong = require('../store/actions').cutSongByIndex;

    module.exports = {

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
                cutSong: CutSong
            }
        },

        methods:{
            hello:function(index,item){
                var $music= this.$root.$children[0].$els.music;
                $music.pause();
                $music.src = '';
                this.cutSong(index);
                $music.src = item.url;
                $music.play();
            }
        }
    };
</script>

<style type="less" scoped>
    .no-song{
        font-size: .8rem;
        color:#555;
        text-align: center;
        padding: 3rem;
    }
</style>


