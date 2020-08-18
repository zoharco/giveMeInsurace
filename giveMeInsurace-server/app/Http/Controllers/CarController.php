<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Car;
use Illuminate\Support\Facades\DB;

class CarController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getCar']]);
    }

    public function getCar(string $carNumber) {
        $car = DB::table('cars')->where('vehicleNumber', $carNumber)->first();
        return response()->json($car);
    }
}


 // public function create() {
    //     return view('Car.create');
    // }

    // public function store(Request $request) {
    //     $this->validate($request, [
    //     'vehicleNumber' => 'required', 
    //     'modelCode' => 'required', 
    //     'year' => 'required', 
    //     'road_ascent_date' => 'required', 
    //     'description', 
    //     'air_bags', 
    //     'gear_type', 
    //     'esp', 
    //     'fcw', 
    //     'ldw'
    //     ]);

    //     $car = new Car([
    //     'vehicleNumber' => $request->get('vehicleNumber'),
    //     'modelCode'  => $request->get('modelCode'), 
    //     'year'  => $request->get('year'), 
    //     'road_ascent_date' => $request->get('road_ascent_date'), 
    //     'description' => $request->get('description'), 
    //     'air_bags' => $request->get('air_bags'), 
    //     'gear_type' => $request->get('gear_type'), 
    //     'esp' => $request->get('esp'), 
    //     'fcw' => $request->get('fcw'), 
    //     'ldw' => $request->get('ldw')
    //     ]);
    //     $car->save();
    // }