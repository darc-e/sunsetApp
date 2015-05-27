<?php

class Product extends Illuminate\Database\Eloquent\Model {

    protected $table = "products";
    public $timestamps = false;
    
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    public function profile(){
    	return $this->belongsTo('Profiles', 'prof_id');
    }
    public function colour(){
    	return $this->belongsTo('Colours', 'colour_id');
    }
    public function fraction(){
    	return $this->belongsTo('Fractions', 'height_id');
    }
}
