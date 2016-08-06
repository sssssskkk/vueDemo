var cheerio = require('cheerio');

exports.kuwo = {
    searchUrl: 'http://sou.kuwo.cn/ws/NSearch',
    songUrl: 'http://antiserver.kuwo.cn/anti.s?format=mp3|aac&type=convert_url&response=url',
    parse: function(body, key, pn) {
        var $ = cheerio.load(body),
            $list = $('.m_list ul li'),
            $page = $('.page'),
            list = [];
        $list.each(function(i, el) {
            var $this = $(el);

            list.push({
                id: 'MUSIC_'+parseInt($this.find('input[name="musicNum"]').val()),
                name: $this.find('.m_name a').attr('title'),
                album: $this.find('.a_name a').attr('title'),
                singer: $this.find('.s_name a').attr('title')
            });
        });

        $page.find('a').each(function(i, el) {
            var $this = $(el),
                href = $this.attr('href');

            if (href !== '#@') {
                var num = href.split('=').reverse()[0];
                $this.attr('data-option', JSON.stringify({
                    key: key,
                    pn: num
                }));
            }

            $this.attr('href', 'javascript:;');
        });

        return {
            page: $page.html(),
            list: list
        };
    }
};



exports.list = {
    LisUrl:'http://www.kuwo.cn/?catalog=yueku2016',
    baseUrl:'http://www.kuwo.cn',
    parse:function(body){
        var $ = cheerio.load(body),
        lis=$('#song ul li'),
        list=[];


        lis.each(function(i, el) {
            var $this = $(el);
            var src='http://www.kuwo.cn'+$this.find('.name a').attr('href')

            list.push({
                href:src,
                id:src.split('?')[1].split('=')[1],
                img:$this.find('.cover img').attr('data-src'),
                num:$this.find('em').text(),
                name:$this.find('.name a').text()
            });
        });

        return {
            list:list
        }

        
    }
}


exports.paihang={
    url:'http://www.kuwo.cn/bang/index',
    parse:function(body){
        var $ = cheerio.load(body),
        lis=$('#chartsContent .leftNav .classify ul li'),
        list=[];

        lis.each(function(index,item){
            var $this = $(item);
            list.push({
                name:$this.attr('data-name'),
                img:$this.find('img').attr('src')

            })
        })

        return {
            paihang:list
        }
    }
}


exports.bangs={
    baseUrl:'http://www.kuwo.cn/bang/content?name=',
    parse:function(body,count,start){

        var $ = cheerio.load(body),
        banner=$('.banner img').attr('src'),
        lis=$('.listMusic li'),
        result='',
        banner='',
        list=[];

        lis.each(function(index,item){
            var $this=$(item);
            list.push({
                num:$this.find('.num').text(),
                name:$this.find('.name a').text(),
                src:$this.find('.name a').attr('href'),
                singer:$this.find('.artist a').text(),
                album:JSON.parse($this.find('.tools').attr('data-music')).album,
                id:JSON.parse($this.find('.tools').attr('data-music')).id
            })
        })

        result=list.splice(start,count);

        banner=$('.banner img').attr('src');




        return {
            list:result,
            banner:banner
        }





    }
}


exports.tuijian={
    baseUrl:'http://www.kuwo.cn/playlist/content?pid=',
    parse:function(body,count,start,id){
        var $=cheerio.load(body),
        title='',
        tits=$('.leftNav ul li'),
        lis=$('.listMusic li'),
        titles=[],
        list=[];

        tits.each(function(index,item){
            var $this=$(item);

            titles.push({
                id:$this.find('.name').attr('data-id'),
                title:$this.find('.name').text()
            })

        })

        for(var i=0;i<titles.length;i++){
            if(titles[i].id===id){
                title=titles[i].title;
            }
        }





        lis.each(function(index,item){
            var $this=$(item);

            list.push({
                num:$this.find('.num').text(),
                name:$this.find('.name a').text(),
                singer:$this.find('.artist a').text(),
                album:JSON.parse($this.find('.tools').attr('data-music')).album,
                id:JSON.parse($this.find('.tools').attr('data-music')).id
            })
        })

        result=list.splice(start,count);

        return {
            title:title,
            list:result
        }

    }
}
