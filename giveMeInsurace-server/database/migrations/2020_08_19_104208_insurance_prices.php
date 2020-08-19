<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class InsurancePrices extends Migration
{
     /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('insurance_prices', function (Blueprint $table) {
            $table->id();
            $table->integer('company_id');
            $table->year('start_year');
            $table->year('end_year');
            $table->integer('compeherensive');
            $table->integer('compulsory');
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
        Schema::dropIfExists('insurance_prices');
    }
}
