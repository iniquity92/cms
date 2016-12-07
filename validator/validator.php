<?php
    namespace validator;
/*
The Validator class validates form inputs for any kind of input. If the form validation
fails, form reloads with the fields erased and errors displayed alongside. If the 
validation passes, success page is displayed. 
     @author = iniquity92
     @note = Only public methods and properties in a class are available for the
     class instances created in your applications. 
     @List of public methods=
       @__construct(); initializes the instance variables
       @set_rules(args..); sets the rules for various fields in the form 
       @validate(args..); validates the field inputs against the rules
       @show_error_msg(args..);displays the error(s) along the field if the validation fails

    @List of Private and Protected properties:
        @field_name = Array of field names that needs to be valdated in the current form
        
        @human_readable_field = Array of Human readable field names of the fields above;
        
        @rules = Array of rules for each field. Rules are given as pipe separated string;
            for eg: required|min:5|max:10|type:alphanum
            required = to check if the field is mandatory;
            min:x = to check if the field is min x chars long;
            max:y = to check if the field is max y chars long;
            type:xyz = to check if the field matches the regular expression xyz;
        
        @usr_error_msg = An array of arrays of user defined messages for each error for each rule 
        specified $rule string;
            For eg: for a rule string required|max:5|type:/\b[a-z0-9]+\b/
            usr_error_msg[] = array(
                    "required"=>"FIELD is can't be left blank",
                    "max"=>"FIELD must be 5 chars long",
                    "type"=>"FIELD must match the regEx /\b[a-z0-9]+\b/"
            )  
        
        @index = A variable to properly index the variables listed above;

        @private _error_msg = An associative array of each field and it's errors keyed
        by the $field_name. 


*/
    class Validator{
        protected $field_name;
        protected $human_readable_field;
        protected $rules;
        protected $index;
        protected $usr_error_msg;
        private $_error_msg;

        public function __construct(){
            $this->field_name = array();
            $this->human_readable_field = array();
            $this->rules = array();
            $this->usr_error_msg = array();
            $this->_error_msg = array();
            $this->index=0;
        }

/*
    set_rules($field_name,$human_readable_field,$rules,$error_messages);

    sets the values for the fields.  

*/
        public function set_rules($field_name,$human_readable_field,$rules,$error_messages){
            $this->field_name[$this->index]=$field_name;
            $this->human_readable_field[$this->index]=$human_readable_field;
            $this->rules[$this->index]=$rules;
            $this->usr_error_msg[$this->index] = $error_messages;
            $this->index++;
        }
/*
    validate($form_data);
    
    Takes the $_POST/$_GET superglobal from the form instance as the $form_data argument.
    
    $fields = &$this->field_name;
    $hr_fields = &this->human_readable_field;
    $usr_msgs = &$this->usr_error_msg;
    we take references to $this->field_name, $this->human_readable_field,
    $this->usr_error_msg in $fields, $hr_fields and $usr_msgs respectively. Helps
    reducing the typing efforts slightly.

*/
        public function validate($form_data){
            $fields = &$this->field_name;
            $hr_fields = &$this->human_readable_field;
            $usr_msgs = &$this->usr_error_msg;
            $i=0;

            /*
                Check if $form_data has some data, otherwise no point in trying to validate
                an empty form;
            */
            if(count($form_data)>0){

                /*foreach field listed in the protected field_name array*/
                foreach($fields as $field){
                    /*create a rules array from the rules string for this field using explode*/
                    $rules = explode("|",$this->rules[$i]);
                    /*foreach rule in rules array */
                    foreach($rules as $rule){
                        /*seperate value from the rule name*/
                        $r = preg_split('/\:/',$rule);
                       
                        if(isset($form_data[$field])){
                            
                            if($r[0]==='count-max'&&((string)count($form_data[$field]))>$r[1]){
                                $this->set_error_msg($rule,$field,$hr_fields[$i],$usr_msgs[$i][$r[0]]);
                                break;
                            }
                            else if(!$this->check($form_data[$field],$rule)){
                                /*if the field fails the current rule, set_error_msg() using the 
                                current rule string $rule,
                                current field, $field
                                current fields human readable name, $hr_fields
                                current field's, current rule's error msg $usr_msg[][]
                                */
                                $this->set_error_msg($rule,$field,$hr_fields[$i],$usr_msgs[$i][$r[0]]);
                            }
                        }
                        else{
                            $this->set_error_msg($rule,$field,$hr_fields[$i],$usr_msgs[$i][$r[0]]);
                            break;
                        }
                        
                    }
                    /*increase the index variable*/
                    $i++;
                }
                /*If the _error_msg variable has some error_messages i.e. validation failed*/
                if(count($this->_error_msg)==0){
                    return TRUE;
                }
                /*No error msgs in _error_msg i.e. validation success*/
                else{
                    return FALSE;
                }
            }
            /*No form_data => form_empty => validation failed*/
            else{
                return FALSE;
            }
        }
/*
    check($string,$rule);
    Takes in user input $string and the $rule to be validated against.
    This function has no knowledge about the form fields etc, it just checks 
    a $string against a given $rule.
*/
        protected function check($string,$rule){
            /*$rule is a string like, rule_name:rule_argument. preg_split
              splits the $rule string at :(colon) to give us an array
              $r = array(
                  [0]=>rule_name,
                  [1]=>rule_argument
              )
            */
            $r = preg_split('/\:/',$rule);
            /*
                r[0] is used as a case key in a switch statement to move ahead with
                the $string validation against rule type;
            */
            switch($r[0]){
                case "required":
                    /* using regular expressions check if the input is all 
                       whitespace using preg_match. If yes, replace all the 
                       whitespaces with an empty quote, "". 
                    */
                    $p = '/^[\s\t\n\r]+$/';
                    preg_replace($p,"",$string);
                    /*  the $string is empty?validation failed:passed*/
                    if($string===""){
                        return FALSE;
                    }
                    else{
                        return TRUE;
                    }
                    break;
                case "min":
                    if(strlen(trim($string))<$r[1]){
                        return FALSE;
                    }
                    else{
                        return TRUE;
                    }
                    break;
                case "max":
                    if(strlen(trim($string))>$r[1]){
                        return FALSE;
                    }
                    else{
                        return TRUE;
                    }
                    break;
                case "type":
                    switch($r[1]){
                        case "alpha":
                            if(preg_match('/^[a-zA-Z]+$/',$string)){
                                return TRUE;
                            }
                            else{
                                return FALSE;
                            }
                            break;
                        case "num":
                            if(preg_match('/^\d+\$/',$string)){
                                return TRUE;
                            }
                            else{
                                return FALSE;
                            }
                            break;
                        case "alphanum":
                            if(preg_match('/^[a-zA-Z0-9_]+$/',$string)){
                                return TRUE;
                            }
                            else{
                                return FALSE;
                            }
                            break;
                        default:
                            if(preg_match($r[1],$string)){
                                return TRUE;
                            }
                            else{
                                return FALSE;
                            }
                            break;
                    }
                    break;
                case "count-min":
                    return TRUE;
                    break; 

            }
        }
        protected function set_error_msg($rule,$field,$hr_field,$usr_msg){
            
            $error = "rule '".$rule."' failed on ".$hr_field." : ".$usr_msg;
            $this->_error_msg[$field][]=$error;
            
        }
        public function show_error_msg($field){
            if(isset($this->_error_msg[$field])){
                foreach($this->_error_msg[$field] as $err){
                    echo "<span style='color:red'><small>".
                        $err."</small></span>";
                }
            }
        }
    }
?>