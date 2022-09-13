<?php

namespace App\Http\Controllers\Admin;

use App\Exceptions\CompanyThresholdExceededException;
use App\Http\Controllers\Controller;
use App\Http\Requests\CompanyRequest;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CompanyController extends Controller
{
    public function index(): Response
    {
        $companies = Company::where('user_id', auth()->id())->get();
        return Inertia::render('Dashboard/Companies', [
            'companies' => $companies
        ]);
    }

    public function register(CompanyRequest $request)
    {
        try {
            $user = User::find(auth()->id());
            $user->createCompany($request->name, $request->email, $request->location);
        } catch (CompanyThresholdExceededException $e) {
            return redirect()->back()->with('error', $e->getMessage());
        }

        return redirect()->back()->with('success', 'Company Created Successfully');
    }

    public function view(int $id)
    {
        $company = Company::find($id);
        return Inertia::render('Dashboard/ViewCompany', [
            'company' => $company
        ]);
    }

    public function edit(int $id)
    {
        $company = Company::find($id);
        return Inertia::render('Dashboard/EditCompany', [
            'company' => $company
        ]);
    }

    public function update(CompanyRequest $request, int $id)
    {
        $company = Company::find($id);
        $company->update([
            'name' => $request->name,
            'location' => $request->location,
            'email' => $request->email,
        ]);
        return redirect()->route('companies')->with('success', 'Company Edited Successfully');
    }

    public function delete(int $id)
    {
        $company = Company::find($id);
        $company->delete();

        return redirect()->route('companies')->with('success', 'Company Deleted Successfully');
    }
}
