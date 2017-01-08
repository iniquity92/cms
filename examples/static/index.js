var profile={
    image_block:{
        tag:'div',
        attrs:{'id':'image_holder'},
        append_to:'#pg1'
    },
    image_edit_span:{
        tag:'span',
        attrs:{'id':'image_edit_span'},
        append_to:'#image_holder'
    },
    image_edit_btn:{
        tag:'a',
        attrs:{'id':'pencil_image','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'image_edit'},
        append_to:'#image_edit_span'
    },
    image:{
        tag:'img',
        attrs:{'id':'profile_img','name':'profile_img','height':'150','width':'150','src':'static/img/lighthouse.jpg.jpg'},
        append_to:'#image_holder'
    },
    profile_name_holder:{
        tag:'div',
        attrs:{'id':'profile_name_holder'},
        append_to:'#pg1'
    },
     profile_name_edit_span:{
        tag:'span',
        attrs:{'id':'profile_name_edit_span'},
        append_to:'#profile_name_holder'
    },
    profile_name_edit_btn:{
        tag:'a',
        attrs:{'id':'pencil_profile_name','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'profile_name_edit'},
        append_to:'#profile_name_edit_span'
    },
    profile_name:{
        tag:'h3',
        attrs:{'id':'profile_name','innerText':'Some Name For The profile'},
        append_to:'#profile_name_holder'
    },
   address_line_1_p:{
        tag:'p',
        attrs:{'id':'addr_line_1_p'},
        append_to:'#pg1'
    },
    addr_line_1_edit_span:{
        tag:'span',
        attrs:{'id':'addr_line_1_edit'},
        append_to:'#addr_line_1_p'
    },
    addr_line_1_edit_btn:{
        tag:'a',
        attrs:{'id':'pencil_line_1','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'edit_line_1'},
        append_to:'#addr_line_1_edit'
    },
    address_line_1:{
        tag:'code',
        attrs:{'id':'profile_addr_line1','innerText':'SomeLandmark, Locality'},
        append_to:'#addr_line_1_p'
    },
    address_line_2_p:{
        tag:'p',
        attrs:{'id':'addr_line_2_p'},
        append_to:'#pg1'
    },
    addr_line_2_edit_span:{
        tag:'span',
        attrs:{'id':'addr_line_2_edit'},
        append_to:'#addr_line_2_p'
    },
    addr_line_2_edit_btn:{
        tag:'a',
        attrs:{'id':'pencil_line_2','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'edit_line_2'},
        append_to:'#addr_line_2_edit'
    },
    address_line_2:{
        tag:'code',
        attrs:{'id':'profile_addr_line2','innerText':'City, State, Pincode-900786'},
        append_to:'#addr_line_2_p'
    }
};

function line_editor(e){
    e.preventDefault();
    //alert('Change the inner HTML to show the form');
    alert('inside line_editor');
    var target_element = '';
    var target_parent = $('#'+e.target.id).parent().parent();
    switch(e.target.id){
        case 'pencil_profile_name':
            
            target_element = target_parent.children('#profile_name');
            break;
        case 'pencil_line_1':
            target_element = target_parent.children('#profile_addr_line1');
            break;
        case 'pencil_line_2':
            target_element = target_parent.children('#profile_addr_line2');
            break;
    }
    alert('executed switch inside line editor');
    var text = target_element.text();
    var target_id = target_element.attr('id');
    var target_parent_id = target_parent.attr('id');
   // if(document.getElementById('#edit_form_'+target_id)==null){
    alert('defined the target elements and parent elements');
        var _form = {
	        edit_form_profile_name:{
	    	    tag:'form',
		        attrs:{'id':'edit_form_'+target_id,'method':'post'},
                append_to:'#'+target_parent_id
		    },
            form_input:{
                tag:'input',
                attrs:{'id':'edit_'+target_id+'_input','type':'text','value':text},
                append_to:'#edit_form_'+target_id
            },
            form_submit:{
                tag:'input',
                attrs:{'id':'edit_'+target_id+'_submit','type':'submit','value':'Apply','class':'ui-btn ui-btn-inline'},
                append_to:'#edit_form_'+target_id
            }
        };
        alert('defined the form element');
        $('#'+e.target.id).remove();
        alert('e.target.remove() got executed');
        target_element.remove();
        alert('target_element.remove() got executed');
        dom_builder(_form);
        alert('exiting line builder');
}

$('#pg1').on('tap','#pencil_image',function(e){
    e.preventDefault();
    alert('Show file explorer!');
});

/*$('#maincontent').on('click','#pencil_profile_name,#pencil_line_1,#pencil_line_2',function(e){
    alert('yaaozza!');
    line_editor(e);
    
});*/
$('#pg1').on('tap','#pencil_profile_name,#pencil_line_1,#pencil_line_2',function(e){
    alert('Yo found me!');
    line_editor(e);
    
});
$('#pg1').on('submit','#edit_form_profile_name,#edit_form_profile_addr_line1,#edit_form_profile_addr_line2',function(e){
    e.preventDefault();
    //alert('You reached me!');
    var input_element = e.target.children[0].children[0];
    var form_parent = e.target.parentElement;
    var text = input_element.value;
    var edit_button_container = $('#'+e.target.id).siblings()[0].id;
    var L = {};

    switch(e.target.id){
        case 'edit_form_profile_name':
            L = {
                profile_name:{
                    tag:'h3',
                    attrs:{'id':'profile_name','innerText':text},
                    append_to:'#'+form_parent.id
                },
                 profile_name_edit_btn:{
                    tag:'a',
                    attrs:{'id':'pencil_profile_name','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'profile_name_edit'},
                    append_to:'#'+edit_button_container
                }

            };
            break;
        case 'edit_form_profile_addr_line1':
            L = {
                    addr_line_1_edit_btn:{
                        tag:'a',
                        attrs:{'id':'pencil_line_1','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'edit_line_1'},
                        append_to:'#'+edit_button_container
                    },
                    address_line_1:{
                        tag:'code',
                        attrs:{'id':'profile_addr_line1','innerText':text},
                        append_to:'#'+form_parent.id
                    }
            };
            break;
        case 'edit_form_profile_addr_line2':
            L={
                addr_line_2_edit_btn:{
                    tag:'a',
                    attrs:{'id':'pencil_line_2','href':'#','class':'ui-btn ui-icon-edit ui-corner-all ui-btn-icon-notext','innerText':'edit_line_2'},
                    append_to:'#'+edit_button_container
                },
                address_line_2:{
                    tag:'code',
                    attrs:{'id':'profile_addr_line2','innerText':text},
                    append_to:'#'+form_parent.id
                }
            };
            break;

    }
    $('#'+e.target.id).remove();
    dom_builder(L);
});
(function(){
    dom_builder(profile);
})();
