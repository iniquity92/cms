/*(function(){
    $(document).ready(function(){
        var p = document.createElement('p');
        p.innerHTML = "<h1>King's never die and also see what I've become!</h1>";
        
        $('#pg1').append(p);
    });
    list_builder_form();
})();*/
    function create_tags(tag,attrs){
        var element = document.createElement(tag);
        for(var x in attrs){
            if(x==='innerText'){
                element.innerText=attrs[x];
            }
            else{
                element.setAttribute(x,attrs[x])
            }
       }
        return element;
    }
    function append(child,_parent){
        $(_parent)
            .append(child)
            .trigger('create');
        
    }
    /*function list_builder_form(){
        var tags={};
        var L = {
            form:{
                tag:'form',
                attrs: {'id':'list_form','name':'list_form','method':'post'},
                append_to:'#maincontent'
            },
            label_title:{
                tag:'label',
                attrs:{'id':'input_title_label','for':'list_title','innerText':'Title'},
                append_to:'#list_form'
            },
            input_title:{
                tag:'input',
                attrs: {'id':'list_title','name':'list_title','type':'text'},
                append_to:'#list_form'
            },
            label_description: {
                tag:'label',
                attrs: {'id':'input_list_description_label','for':'list_description','innerText':'Description'},
                append_to:'#list_form'
            },
            input_description:{
                tag:'input',
                attrs: {'id':'list_description','name':'list_description','type':'text'},
                append_to:'#list_form'
            },
            label_end_date:{
                tag:'label',
                attrs: {'id':'input_list_enddate_label','for':'list_end_date','innerText':'End Date'},
                append_to:'#list_form'
            },
            input_end_date:{
                tag:'input',
                attrs: {'id':'list_end_date','name':'list_end_date','type':'text'},
                append_to:'#list_form'
            }
        }

        for(var x in L){
            tags[x] ={'tag':create_tags(L[x]['tag'],L[x]['attrs']),
                    'append_to':L[x]['append_to']
            };
        }

        for(var x in tags){
            append(tags[x]['tag'],tags[x]['append_to']);
        }
    }

*/

function dom_builder(L){
	var tags={};
    for(var x in L){
        tags[x] ={'tag':create_tags(L[x]['tag'],L[x]['attrs']),
                    'append_to':L[x]['append_to']
        };
	}
    for(var x in tags){
            append(tags[x]['tag'],tags[x]['append_to']);
    }
}
