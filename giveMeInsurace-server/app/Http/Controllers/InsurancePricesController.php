<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class InsurancePricesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['getInsurances']]);
    }

    public function getInsurances(string $year) {
        $car = DB::table('insurance_prices')->where([
            ['start_year', '<=' , $year],
            ['end_year', '>=' , $year]
        ])->get();
        return response()->json($car);
    }
}
