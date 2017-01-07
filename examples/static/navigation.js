var tags = {};

var navigation = {
    users:{
        tag:'div',
        attrs:{'id':'nav_users','data-role':'controlgroup','data-type':'horizontal','class':'ui-controlgroup ui-controlgroup-horizontal ui-corner-all'},
        append_to:'#navigation'
    },
    announcements:{
        tag:'div',
        attrs:{'id':'nav_announcements','data-role':'controlgroup','data-type':'horizontal'},
        append_to:'#navigation'
    },
    groups:{
        tag:'div',
        attrs:{'id':'nav_groups','data-role':'controlgroup','data-type':'horizontal'},
        append_to:'#navigation'
    },
    events:{
        tag:'div',
        attrs:{'id':'nav_events','data-role':'controlgroup','data-type':'horizontal'},
        append_to:'#navigation'
    },
    teams:{
        tag:'div',
        attrs:{'id':'nav_teams','data-role':'controlgroup','data-type':'horizontal'},
        append_to:'#navigation'
    },
    users_add_button:{
        tag:'button',
        attrs:{'id':'users_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':'user_add_button'},
        append_to:'#nav_users > .ui-controlgroup-controls'
    },
    users_link_button:{
        tag:'a',
        attrs:{'id':'users_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':'Users'},
        append_to:'#nav_users > .ui-controlgroup-controls'
    },
    announces_add_button:{
        tag:'button',
        attrs:{'id':'announces_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':'announces_add_button'},
        append_to:'#nav_announcements > .ui-controlgroup-controls'
    },
    announces_link_button:{
        tag:'a',
        attrs:{'id':'announces_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':'Notices'},
        append_to:'#nav_announcements > .ui-controlgroup-controls'
    },
    groups_add_button:{
        tag:'button',
        attrs:{'id':'groups_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':'groups_add_button'},
        append_to:'#nav_groups > .ui-controlgroup-controls'
    },
    groups_link_button:{
        tag:'a',
        attrs:{'id':'groups_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':'Groups'},
        append_to:'#nav_groups > .ui-controlgroup-controls'
    },
    events_add_button:{
        tag:'button',
        attrs:{'id':'events_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':'events_add_button'},
        append_to:'#nav_events > .ui-controlgroup-controls'
    },
    events_link_button:{
        tag:'a',
        attrs:{'id':'events_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':'Events'},
        append_to:'#nav_events > .ui-controlgroup-controls'
    },
    teams_add_button:{
        tag:'button',
        attrs:{'id':'teams_add_btn','class':'ui-btn ui-corner-all ui-icon-plus ui-btn-icon-notext','innerText':'teams_add_button'},
        append_to:'#nav_teams > .ui-controlgroup-controls'
    },
    teams_link_button:{
        tag:'a',
        attrs:{'id':'teams_link_btn','class':'ui-btn ui-corner-all ui-shadow','href':'#','innerText':'Teams'},
        append_to:'#nav_teams > .ui-controlgroup-controls'
    },    
};

(function(){
    dom_builder(navigation);
    
})();


