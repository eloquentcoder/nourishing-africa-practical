<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('Dashboard/Profile');
    }

    public function post(UpdateProfileRequest $request)
    {
        $user = User::find(auth()->id());
        $user->update([
            'name' => $request->name,
            'email' => $request->email,
            'country' => $request->country,
            'mobile' => $request->mobile,
        ]);

        return redirect()->back()->with('success', 'User Profile Updated Successfully');
    }
}
