var music = require('../controllers/music');
var path = require('path');

module.exports = function(app) {

    app.get('/search/:key/:pn', music.search);

    app.get('/song/:id', music.download);

    app.get('/bang',music.home);

    app.get('/paihang',music.paihang);

    app.get('/paihang/:name',music.bangs);

    app.get('/:id',music.tuijian);

    app.get('/img/:id',music.img);
    // app.get('/:id',function(req,res){
    // 	console.log(req.params)
    //     res.send(req.params)
    // })

    // app.get('/bang',music.list);

    // app.get('/person',music.person);

};
