<?php 
    namespace form;
    //include_once("classes/elements.php");
    class Form extends \element\Elements{
        //private $count = 0; //change->static;
        private $form_attr;
        //private $def_attrs;//default attributes assigned when the constructor is called without any attributes

        public function __construct($options){
                $form_open_tag = $this->create_elements("form",FALSE,$options);
                echo $form_open_tag."\n";
        }
        
        
    }
?>