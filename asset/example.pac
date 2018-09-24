function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCase();

    var site_list = [
        ,'torproject.org'
        ,'twitter.com'
        ,'twimage.com'
        ,'twimg.com'
        ,'t.co'
        ,'bit.ly'
        ,'box.net'
        ,'dropbox.com'
        ,'dropboxstatic.com'
        ,'slideshare.net'
        ,'embedly.com'
        ,'wordpress.com'
        ,'wp.com'
        ,'gravatar.com'
        ,'wikipedia.org'
        ,'wikimedia.org'
        ,'wiktionary.org'
        ,'wikimediafoundation.org'

        ,'line.me'
        ,'vimeo.com'
        ,'media.expedia.com'
        ,'epubxp.com'
        ,'epubxmag.com'
        ,'mitbbs.com'
        ,'iask.ca'
        ,'yvr.ca'
        ,'bbc.com'
        ,'bbc.co.uk'
        ,'dw.com'
        ,'wsj.com'
        ,'rthk.org.hk'

        ,'bbkz.net'
        ,'pixnet.net'
        ,'hinet.net'
        ,'taipei'
        ,'tw'

//        ,'github.com'
//        ,'stackexchange.com'
//        ,'stackoverflow.com'
//        ,'sstatic.net'
        ,'w3schools.com'
        ,'angularjs.org'
        ,'flask.pocoo.org'
        ,'virmach.com'

        ,'facebook.com'
        ,'facebook.net'
        ,'fbcdn.net'
        ,'akamaihd.net'
        ,'instagram.com'

        ,'goo.gl'
        ,'google.co*'
        ,'google.com*'
        ,'blogspot*'
        ,'blogger.com'
        ,'ggpht.com'
        ,'youtube.com'
        ,'ytimg.com'
        ,'googlevideo.com'
        ,'youtu.be'
        ,'appspot.com'
        ,'googleusercontent.com'
        ,'googlesyndication.com'
        ,'gstatic.com'
        ,'googleapis.com'
        ,'googlecode.com'
        ,'gmail.com'
        ,'chrome.com'
        ,'googleadsserving.cn'
    ];

    var exp_list = [ ];

    for(var index = 0;index<site_list.length;index++){
        if(host==site_list[index] ||
            shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:27658";
        }
    }
    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "SOCKS5 127.0.0.1:27658";
        }
    }
    return "DIRECT";
}
