<?php

class Colours extends Illuminate\Database\Eloquent\Model {

    protected $table = "colours";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    
    public function products()
    {
        return $this->belongsToMany('Products', 'colour_id' );
    }

    public function profiles()
    {
    	return $this->hasManyThrough('Products', 'Profiles', 'prof_id', 'colour_id');
    }
}
