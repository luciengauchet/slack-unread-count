// ==UserScript==
// @name        Unread Count for SLack
// @namespace   luciengauchet@github.com
// @include     *://*.slack.com/*
// @version     5
// @grant       none
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js
// ==/UserScript==

function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}

function main() {
setInterval(
    function(){
        var unreadCount = 0;
        $('.unread_highlight').each(function(){unreadCount += parseFloat($(this).html());});
        var re = /\((\d*)\)$/;
        var str = document.title;
        var subst = '('+unreadCount+')'; 
        var m;
        var result = document.title+' '+subst;
        if ((m = re.exec(str)) !== null) {
            var result = str.replace(re, subst);}
        document.title = result;
    },10000);}


$(window).load(function(){ 
    sleep(100);
    main();
})
