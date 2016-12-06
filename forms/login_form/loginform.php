<?php
    namespace form\login_form;
    include_once("../form.php");

    class LoginForm extends \form\Form{
        private $form_attr;

        public function __construct(){
            $this->form_attr = array(
                "id"=>"login",
                "name"=>"login",
                "action"=>"login.php",
                "method"=>"post",
                "enctype"=>"application/www-form-url-encoded"
            );
        }
        public function form_body(){
            $form_body = $this->form_tag();
            //invole the input class to create fields 
        }
    }
?>