<?php

use App\Http\Controllers\Api\ItemController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('items', ItemController::class);
Route::get('searchByType/{type}',[ItemController::class,'searchByType']);
Route::get('searchByTitle/{title}',[ItemController::class,'searchByTitle']);
Route::get('searchBySlug/{slug}',[ItemController::class,'searchBySlug']);
Route::get('filtering/{type}',[ItemController::class,'filtering']);


