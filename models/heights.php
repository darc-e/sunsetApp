<?php

class Heights extends Illuminate\Database\Eloquent\Model {

    protected $table = "heights";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    public function products()
    {
        return $this->belongsToMany('Products', 'height_id' );
    }
    public function fraction(){
        return $this->belongsTo('Fractions', 'fraction_id');
    }
    
}
