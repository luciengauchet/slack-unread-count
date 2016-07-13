// ==UserScript==
// @name        Unread Count for Slack
// @namespace   luciengauchet@github.com
// @description An unread counter for Slack
// @version     1.1.0
// @match        *://*.slack.com/*
// @grant        none
// ==/UserScript==

function unreadCounter() {
  setInterval(function() {
    var unreadCount = 0;
    $('.unread_highlight').each(function() {unreadCount += parseFloat($(this).html()); });
    unreadCount += $('li.unread').size();
    var re = /\((\d*)\)$/;
    var str = document.title;
    var subst = '(' + unreadCount + ')';
    var m;
    var result = document.title + ' ' + subst;
    if ((m = re.exec(str)) !== null) {
      result = str.replace(re, subst);
    }
    document.title = result;
  }, 10000);
}

if (document.body) {
  unreadCounter();
};
