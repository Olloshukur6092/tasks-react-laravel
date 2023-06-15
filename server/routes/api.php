<?php

use App\Http\Controllers\API\CategoryController;
use App\Http\Controllers\API\ExerciseController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('category', [CategoryController::class, 'index']);
Route::post('category-add', [CategoryController::class, 'store']);
Route::get('exercise', [ExerciseController::class, 'index']);
Route::post('exercise-add', [ExerciseController::class, 'store']);
Route::get('exercise/{id}', [ExerciseController::class, 'show']);
