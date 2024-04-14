<?php

use App\Http\Controllers\LatestWorkController;
use App\Http\Controllers\ReviewController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::post("/admin-login", [UserController::class, "login"]);
Route::get("/latest-work", [LatestWorkController::class, "getAll"]);
Route::get("/reviews", [ReviewController::class, "getAll"]);
Route::post("/reviews", [ReviewController::class, "createReview"]);
Route::get("/latest-work/details", [LatestWorkController::class, "details"]);
Route::middleware('auth:sanctum')->group(function () {
    Route::post("/logout", [UserController::class, "logout"]);
    Route::post("/ping", [UserController::class, "ping"]);
    Route::post("/latest-work", [LatestWorkController::class, "newLatestWork"]);
    Route::post("/latest-work/{lastWork}", [LatestWorkController::class, "editLatestWork"]);
    Route::delete("/latest-work/{lastWork}", [LatestWorkController::class, "deleteLatestWork"]);
});
