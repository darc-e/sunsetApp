<?php

class Products extends Illuminate\Database\Eloquent\Model {

    protected $table = "products";
   
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    
    
}
