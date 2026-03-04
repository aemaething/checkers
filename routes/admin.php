<?php

use App\Http\Controllers\Admin\DashboardController;
use Illuminate\Support\Facades\Route;

Route::prefix('admin')->name('admin.')->middleware(['is_admin'])->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('dashboard');
});
