<?php

namespace App\Http\Controllers;
use App\Models\Employee;

use Illuminate\Http\Request;
use Exception;
use Log;

class EmployeeController extends Controller
{
    public function getEmployeeList(){
        try{
            $employees = Employee::all();
            return response()->json($employees);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }

    public function getEmployeeDetails(Request $request){
        try{
            $employee = Employee::find($request->get('employeeId'));
            return response()->json($employee);
        }
        catch(Exception $e){
            Log::error($e);
        }
    }
}
