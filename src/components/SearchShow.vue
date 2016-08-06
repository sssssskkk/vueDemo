<template>
	<div class="content list">	
		<div class="list-block media-list bang-list" id="searchList">
			<ul>
				<li v-waves.block v-for='item in searchList' @click='oneClick(item)'>
					<div class="item-content">
						<div class="item-inner">
							<div class="item-title-row">
								<div class="item-title">{{item.name}}</div>
							</div>
							<div class="item-subtitle">{{item.singer}}</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
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
		oneClick: function (item) {
			this.$http.get('/img/'+item.id).then(function(res){
                item.img=res.data.img
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
            }, function (res) {
                console.error('error: ' + res.status);
            });
		}
	}
};
</script>