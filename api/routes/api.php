<?php

use App\Http\Controllers\PostController;
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

Route::get('/posts',[PostController::class,'index']);
Route::post('/post',[PostController::class,'store']);
Route::post('/post/update/{id}',[PostController::class,'update']);
Route::get('/post/edit/{id}',[PostController::class,'edit']);
Route::delete('/post/{id}',[PostController::class,'destroy']);