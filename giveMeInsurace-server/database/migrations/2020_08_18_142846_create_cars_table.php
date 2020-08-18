<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCarsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cars', function (Blueprint $table) {
            $table->id();
            $table->string('vehicleNumber')->unique();
            $table->string('modelCode')->unique();
            $table->year('year');
            $table->date('road_ascent_date');
            $table->string('description');
            $table->integer('air_bags');
            $table->tinyInteger('gear_type');
            $table->tinyInteger('esp');
            $table->tinyInteger('fcw');
            $table->tinyInteger('ldw');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cars');
    }
}
