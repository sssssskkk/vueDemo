<template>
    <div class="m-main clear-fix">
        <ul class="m-list clearfix" id="ShowList">
            <li class="m-list-item" v-waves.block v-for="item in showList" class="">
                <a href="javascript:;" v-link="{name:'bang', params:{id: item.id}}">
                    <span class='bang-mask'>
                <span class='icon icon-music x-music'></span>
                    {{item.num}}
                    </span>
                    <img class="bang-img" :src="item.img">
                    <p class="bang-text">{{item.name}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
var TuijianDetail=require('../pages/BangDetail');

module.exports = {
    components:{
        'bang-detail':TuijianDetail
    },
    props: {
        showList: Array
    }
};
</script>
