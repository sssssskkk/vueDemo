var Search = require('./pages/SearchView');
var Main = require('./pages/MainView');
var Bang = require('./pages/BangView');
var Paihang = require('./pages/PaihangView');
var PaihangDetail = require('./pages/paihangDetail');
var BangDetail = require('./pages/BangDetail');
var Person = require('./pages/Person');

module.exports=function(router){
	router.map({
	    '/': {
	    	name: 'index',
	        component: Main
	    },
	    '/:id': {
	    	name: 'bang',
	        component: BangDetail
	    },
	    '/paihang': {
	    	name: 'paihang',
	        component: Paihang
	    },
	    '/paihang/:name': {
	    	name: 'paihangDetail',
	        component: PaihangDetail
	    },
	    '/person': {
	    	name: 'person',
	        component: Person
	    },
	    '/search': {
	    	name: 'search',
	        component: Search
	    }
	});
}