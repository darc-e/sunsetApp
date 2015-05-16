<?php

class Products extends Illuminate\Database\Eloquent\Model {

    protected $table = "products";
    protected $primaryKey ="prod_id";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    
    
}
