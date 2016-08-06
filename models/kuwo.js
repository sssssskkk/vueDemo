var request = require('../lib/request');
var api = require('../lib/api').kuwo;
var List = require('../lib/api').list;
var Paihang = require('../lib/api').paihang;
var Bangs = require('../lib/api').bangs;
var Tuijian = require('../lib/api').tuijian;

exports.search = function(params) {

    var key = params.key,
    pn = params.pn;

    return request(api.searchUrl + '?type=music')
    .get(params)
    .then(function(body) {
        return api.parse(body, key, pn);
    });
};

exports.download = function(id) {

    return request(api.songUrl)
    .get({
        rid: id
    })
    .then(function(body) {
        return body;
    });
};


exports.list = function() {

    return request(List.LisUrl)
    .get()
    .then(function(body) {
        return List.parse(body);
    });
};

exports.paihang = function() {

    return request(Paihang.url)
    .get()
    .then(function(body) {
        return Paihang.parse(body);
    });
};


exports.bangs = function(params,query) {
    var name=encodeURIComponent(params.name);
    var count=query.count;
    var start=query.start;

    return request('http://www.kuwo.cn/bang/content?name='+name)
    .get()
    .then(function(body) {
        return Bangs.parse(body,count,start);
    });
};


exports.tuijian=function(params,query){
    var id=params.id;
    var count=query.count;
    var start=query.start;
    return request('http://www.kuwo.cn/playlist/index?pid='+id)
    .get()
    .then(function(body){
        return Tuijian.parse(body,count,start,id)
    })
}


exports.img=function(params){
    var rid=params.id;
    return request('http://www.kuwo.cn/webmusic/sj/dtflagdate?flag=6&rid='+rid)
    .get()
    .then(function(data){
        var img=data.split(',')[1];
        return {
            img:img
        }
    })
}
