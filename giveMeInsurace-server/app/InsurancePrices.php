<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InsurancePrices extends Model
{
    protected $fillable = [
        'company_id', 
        'start_year', 
        'end_year', 
        'compeherensive', 
        'compulsory'
    ];
}
