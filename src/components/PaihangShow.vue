<template>
    <div class="paihang-main clearfix">
        <div class="list-block media-list paihang-list">
            <ul id="ShowList">
                <li  v-for="item in showList">
                    <a href="javascript:;" v-link="{name:'paihangDetail', params:{name: item.name}}" class="item-link item-content">
                        <div class="item-media"><img :src="item.img" style='width: 2.2rem;'></div>
                        <div class="item-inner" id='item-inner'>
                            <div class="item-title-row">
                                <div class="item-title">{{item.name}}</div>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    var AddPlayList = require('../store/actions').addPlayList;

    module.exports = {
        props: {
            showList: Array
        }
    };
</script>
