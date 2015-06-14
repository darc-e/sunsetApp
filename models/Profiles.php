<?php

class Profiles extends Illuminate\Database\Eloquent\Model {

    protected $table = "profiles";
    public $timestamps = false;
    
    // need to explicitly cast attributes of type Integer, Float, Boolean i
    
    public function products()
    {
        return $this->hasMany('Products', 'prof_id');
    }
    
    public function colours()
    {
        return $this->hasManyThrough('Colours', 'Products', 'prof_id', 'id');
    }
}
