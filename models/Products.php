<?php

class Products extends Illuminate\Database\Eloquent\Model {

    protected $table = "products";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    public function profile(){
    	return $this->belongsTo('Profiles', 'prof_id');
    }
    public function colour(){
    	return $this->belongsTo('Colours', 'colour_id');
    }
    public function height(){
    	return $this->belongsTo('Heights', 'height_id');
    }
    public function rabbet(){
        return $this->belongsTo('Fractions', 'rabbet');
    }
}
