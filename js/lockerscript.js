var baseUrl = false;

$(document).ready(function() {
    if(baseUrl === false) window.alert("Couldn't find your locker, you might need to add a config.js (see https://me.singly.com/Me/devdocs/)");
});

$(function() {
    // be careful with the limit, some people have large datasets ;)
    $.getJSON(baseUrl + '/Me/photos/', {'limit':10}, function(data) {

        if(!data || !data.length) return;
        var html = "";
        console.log()
        for(var i in data)
        {
            $("<div class=\"polaroid\"><img src='"+data[i].url+"' /></div> ").appendTo(".polaroidcontainer");
        }
        
        setuppolaroids ();
    });
});

