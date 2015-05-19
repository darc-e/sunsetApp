<?php

class Profiles extends Illuminate\Database\Eloquent\Model {

    protected $table = "profiles";
    protected $primaryKey = "prof_id";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean i
    
    public function products()
    {
        return $this->belongsToMany('Products', 'prof_id' );
    }
}
