/*global $, window, */

$(window).ready(function () {
 
    "use strict";
    
    var url_blog = "http://www.arabic-designer.tk",
        num_post = 10;
    
    var ajaxOPtion = {
        
        url: '' + url_blog + "/feeds/posts/default" + '',
        dataType: "jsonp",
        type: "get",
        success: function (data) {
        
            var p,
                s = '',
                pt,
                entry = data.feed.entry;
            if (entry !== undefined) {
                
                s = "<ul>";
                
                for (var i = 0; i < entry.length; i++) {
                     
                     for (var j = 0; j < entry[i].link.length; j++)
                        
                         if (entry[i].link[j].rel == "alternate"){
                             
                             p = entry[i].link[j].href; break;
                             
                             
                         }
                            
                            pt = entry[i].title.$t;
                    
                    s += '<li><a href="' + p + '" target="_blank">' + pt + '</a></li>'
                            
                    
                     }
                
                    s += "</ul>";
                
                    $("#recentpostbreaking").html(s);
                
                function t () {
                    
                    $("#recentpostbreaking li:first").slideUp(function () {
                        
                        $("#recentpostbreaking ul").slideDown();
                        
                        
                    })
                    
                    
                }
                
                
                setInterval(function(){ t() }, 5000);
                
                
                
            } else {
                
                $('#recentpostbreaking').html('<span>No result!</span>');
            }
        
        
        
        },error: function () {
            
            $('#recentpostbreaking').html('<strong>Error Loading Feed!</strong>');
        }
        
        
    }
    
    
    $.ajax(ajaxOPtion);
    
    
    
});
