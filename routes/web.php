<?php

use App\Http\Controllers\Admin\CompanyController;
use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\ProfileController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use Illuminate\Support\Facades\Auth;

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
    return redirect()->route('login');
});

Route::middleware('guest')->group(function () {
    Route::get('login', [LoginController::class, 'index'])->name('login');
    Route::post('login', [LoginController::class, 'post'])->name('login.post');

    Route::get('register', [RegisterController::class, 'index'])->name('register');
    Route::post('register', [RegisterController::class, 'post'])->name('register.post');
});


Route::middleware('auth')->group(function () {
    Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::prefix('companies')->group(function () {
        Route::get('', [CompanyController::class, 'index'])->name('companies');
        Route::get('/{id}', [CompanyController::class, 'view'])->name('companies.view');
        Route::get('/{id}/edit', [CompanyController::class, 'edit'])->name('companies.edit');
        Route::post('/{id}/edit', [CompanyController::class, 'update'])->name('companies.update');
        Route::post('register', [CompanyController::class, 'register'])->name('company.register');
        Route::get('/{id}/delete', [CompanyController::class, 'delete'])->name('company.delete');
    });

    Route::get('profile', [ProfileController::class, 'index'])->name('profile');
    Route::post('profile', [ProfileController::class, 'post'])->name('profile.post');

    Route::get('logout',  function () {
        Auth::logout();
        return redirect()->route('login');
    });
});
