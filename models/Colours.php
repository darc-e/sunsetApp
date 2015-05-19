<?php

class Colours extends Illuminate\Database\Eloquent\Model {

    protected $table = "colours";
    protected $primaryKey = "colour_id";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean 
    
    public function products()
    {
        return $this->belongsToMany('Products', 'colour_id' );
    }
}
