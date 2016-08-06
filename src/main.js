var Vue = require('vue');
var VueRouter = require('vue-router');
var routerMap = require('./router');
var App = require('./App');
var infiniteScroll =  require('vue-infinite-scroll');
Vue.use(require('vue-directive-waves'));
Vue.use(require('vue-resource'));
Vue.use(VueRouter);
Vue.use(infiniteScroll);
var router = new VueRouter({
    transitionOnLoad: true
});
routerMap(router);
router.start(App, '#app');
