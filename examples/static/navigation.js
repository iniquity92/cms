var buttons = ['users','announcements','groups','events','teams'];
var lis={};
var control_groups={};
var add_buttons={};
var link_buttons={};

for(var x in buttons){
    lis[buttons[x]]={
        tag:'li',
        attrs:{'id':'panel_li_'+buttons[x]},
        append_to:'#panel-list-ul'
    };
    control_groups[buttons[x]]={
        tag:'div',
        attrs:{'id':'nav_'+buttons[x],'data-role':'controlgroup','data-type':'horizontal'},
        append_to:'#panel_li_'+buttons[x]
    };
    add_buttons[buttons[x]]={
        tag:'a',
        attrs:{'id':buttons[x]+'_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':buttons[x]+'_add_button','href':'#'},
        append_to:'#nav_'+buttons[x]+'> .ui-controlgroup-controls'
    };
    link_buttons[buttons[x]]={
        tag:'a',
        attrs:{'id':buttons[x]+'_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':buttons[x].toUpperCase()},
        append_to:'#nav_'+buttons[x]+'> .ui-controlgroup-controls'
    };
}


var panels = {
    panel_left:{
        tag:'a',
        attrs:{'id':'panel-left','href':'#nav-panel','data-icon':'bars','data-iconpos':'notext','innerText':'Menu'},
        append_to:'#page-header'
    }
};

var navigation = {
    nav_panel:{
        tag:'div',
        attrs:{'id':'nav-panel','data-role':'panel','data-display':'push','data-theme':'b'},
        append_to:'#data-role-pg1'
    },
    panel_list_ul:{
        tag:'ul',
        attrs:{'id':'panel-list-ul','data-role':'listview'},
        append_to:'#nav-panel'
    }    
};

(function(){
    dom_builder(panels);
    dom_builder(navigation);
    dom_builder(lis);
    dom_builder(control_groups);
    dom_builder(add_buttons);
    dom_builder(link_buttons);
    
})();


