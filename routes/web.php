<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('get/employee/list', [App\Http\Controllers\EmployeeController::class, 'getEmployeeList'])->middleware('auth');
Route::post('get/individual/employee/details', [App\Http\Controllers\EmployeeController::class, 'getEmployeeDetails']);
Route::post('update/employee/data', [App\Http\Controllers\EmployeeController::class, 'updateEmployee']);
Route::delete('delete/employee/data/{id}', [App\Http\Controllers\EmployeeController::class, 'deleteEmployee']);
Route::post('create/employee/data', [App\Http\Controllers\EmployeeController::class, 'createEmployee']);




