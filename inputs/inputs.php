<?php
    namespace inputs;
    //include_once("classes/elements.php");
    //include("classes/elements.php");
    class Input extends \element\Elements{
        //private $type;
        private $options;
        //private static $count=0;
        public function __construct(){
            $this->options = array();
        }
        public function input($options){
            $input_tag = $this->create_elements("input",TRUE,$options);
            echo $input_tag."\n";
        }
        public function  textarea($options){
            $textarea_tag = $this->create_elements("input",FALSE,$options);
            echo $textarea_tag."\n";
        }
        public function select($options){
            $select_tag = $this->create_elements("select",FALSE,$options);
            echo $select_tag."\n";
        }
        public function option($options,$values){
            $options_tag ="";
            foreach($values as $v){
                $options_tag .= $this->create_elements("option",FALSE,$options);
                $options_tag .= $v;
                $options_tag .= "</option>\n";
            }
        }
        public function button($options){
            $button_tag = $this->create_elements("button",FALSE,$options);
            echo $button_tag."\n";
        }
    }
?>