var kuwo = require('../models/kuwo');

exports.search = function(req, res) {

    kuwo.search(req.params).then(function(data) {

        res.send(data);
    }, function(e) {
        console.log(e);
    });

};

exports.download = function(req, res) {

    kuwo.download(req.params.id).then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};



exports.home = function(req, res) {

    kuwo.list().then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};

exports.paihang = function(req, res) {

    kuwo.paihang().then(function(data) {
        res.send(data);
    }, function(e) {
        console.log(e);
    });

};

exports.bangs=function(req,res){
    kuwo.bangs(req.params,req.query).then(function(data){

        res.send(data);
    },function(e){
        console.log(e);
    })


}


exports.tuijian=function(req,res){
    kuwo.tuijian(req.params,req.query).then(function(data){
        res.send(data);
    },function(e){
        console.log(e);
    })
}


exports.img=function(req,res){
    kuwo.img(req.params).then(function(data){
        res.send(data)
    },function(e){
        console.log(e);
    })
}

