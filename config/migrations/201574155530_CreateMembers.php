<?php

use Phpmig\Migration\Migration;

class CreateMembers extends Migration
{
    protected $tableName;

    /* @var \Illuminate\Database\Schema\Builder $schema */
    protected $schema;
    
    public function init()
    {
        $this->tableName = 'members';
        $this->schema = $this->get('schema');
    }

    /**
     * Do the migration
     */
    public function up()
    {
        /* @var \Illuminate\Database\Schema\Blueprint $table */
        $this->schema->create($this->tableName, function ($table)
        {
            $table->increments('id');
            
            $table->string('myattr');
        });
    }

    /**
     * Undo the migration
     */
    public function down()
    {
        $this->schema->drop($this->tableName);
    }
}
