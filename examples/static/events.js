(function(){
    $.ajax({
        url:'database/fetch_events.php',
        data:{'u_id':u_id},
        type:'GET',
        success: function(data){
            if($.isEmptyObject(data)){
                $('#pg1').html('No events for you! Create a new event!');
            }
            else{
                var uL={
                    ul:{
                        tag:'ul',
                        attrs:{'id':'events-list','data-role':'listview'},
                        append_to:'#pg1'
                    }
                };
                var Li={};
                var a={};
                var h2={};
                var p={};
                for(x in data){
                    Li[x]={
                        tag:'li',
                        attrs:{'id':'event-li-'+x},
                        append_to:'#events-list'
                    };
                    a[x]={
                        tag:'a',
                        attrs:{'id':'event-a-'+x,'href':'#popup','data-rel':'popup','data-position-to':'window'.'data-transition':'pop'},
                        append_to:'#event-li-'+x
                    };
                    h[x]={
                        tag:'h2',
                        attrs:{'id':'event-title-'+x},
                        append_to:'#event-a-'+x
                    };
                    p[x]={
                        tag:'p',
                        attrs:{'id':'event-description-'+x},
                        append_to:'#event-a-'+x
                    };
                    p_aside[x]={
                        tag:'p',
                        attrs:{'id':'event-date-'+x,'class':'ui-li-aside'},
                        append_to:'#event-a-'+x
                    };
                }
                    
            }//else
            dom_builder(uL);
            dom_builder(Li);
            dom_builder(a);
            dom_builder(h);
            dom_builder(p);
            dom_builder(p_aside);
        }
    });  
})();
