<?php

class Rabbets extends Illuminate\Database\Eloquent\Model {

    protected $table = "fractions";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    public function products()
    {
        return $this->belongsToMany('Products', 'rabbet' );
    }
    
    
}
