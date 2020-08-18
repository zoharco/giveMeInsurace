<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Car extends Model
{
    protected $fillable = [
        'vehicleNumber', 
        'modelCode', 
        'year', 
        'road_ascent_date', 
        'description', 
        'air_bags', 
        'gear_type', 
        'esp', 
        'fcw', 
        'ldw'
    ];

}
