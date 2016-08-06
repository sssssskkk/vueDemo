<template>
	<header id="m-hd" class="bar bar-nav">
		<a href="javascript:;" class="icon icon-prevs pull-left"  v-link="{ path: '/paihang' }"></a>
		<h1 class="title">{{title}}</h1>
	</header>
	<div class="content list" v-infinite-scroll="loadMore()" infinite-scroll-disabled="busy" infinite-scroll-distance="50">	
		<div class="list-bg">
			<span :style="{'width':'100%','height':'100%','display':'block','background-image':'url('+banner+')','background-repeat':'no-repeat','background-size':'auto 100%','background-position':'center'}"></span>
		</div>
		<div class="list-block media-list">
			<ul>
				<li v-waves.block v-for='item in items' @click='oneClick(item)'>
					<div class="item-content">
						<div class="item-media">{{item.num}}</div>
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
		<div class="infinite-scroll-preloader">
			<div class="preloader" v-if="loaded"></div>
		</div>
		
	</div>
</div>
<loading v-if='!loaded'></loading>
</template>
<script>
	var loader = require('../components/loader');
	var loading = require('../components/Loading');
	var AddPlayList = require('../store/actions').addPlayList;
	var CutSong = require('../store/actions').cutSongByIndex;
	module.exports = {
		data:function(){
			return {
				showList:[],
				items: [],
				busy:false,
				loaded:false,
				done:false,
				title:'',
				start:0,
				banner:''
			}
		},
		components: {
			'loading':loading
		},
		computed:{
			length:function(){
				return this.items.length
			}
		},
		created:function(){
			this.title=decodeURIComponent(window.location.href.split('/').pop())
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
		methods:{

			oneClick:function(item){

				this.$http.get('/img/' + item.id).then(function(res){
					item.img=res.data.img
					this.$http.get('/song/' + item.id).then(function (res) {
						item.url = res.data;
						this.addSong(item);
						var $music= this.$root.$children[0].$els.music;
						if($music){
							$music.pause();
							$music.src = '';

							if(this.playList.indexOf(item)>-1){
								this.cutSong(this.playList.indexOf(item));
							}else{
								this.cutSong(this.songListLen-1);
							}
							
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
			},
			
			loadMore:function(){
				if (this.busy) {
					return
				}
				if(this.done){
					loader.hide()
					return
				}
				this.busy = true;
				let scroller = $('.list');
				var name = window.location.href.split('/').pop();

				this.$http.get('/paihang/'+name,{count:20,start:this.start}).then(function(res){

					this.loaded=true;

					this.banner=res.data.banner;
					this.showList = res.data.list;
					if(this.showList.length<20){
						this.done=true;
					}
					for(var i=0;i<this.showList.length;i++){
						this.items.push(this.showList[i]);
					}
					this.start+=20;
					this.busy = false;
				}, function (res) {
					console.error('error: ' + res.status);
				});
			}
		}
	};
</script>
