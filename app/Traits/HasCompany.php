<?php


namespace App\Traits;

use App\Exceptions\CompanyThresholdExceededException;

trait HasCompany
{
    public function fetchCompanies()
    {
        return $this->companies;
    }

    public function createCompany($name, $email, $location)
    {
        if ($this->hasFullCompany()) {
            throw new CompanyThresholdExceededException($message = "You cannot add any more companies");
        }
        $company = $this->companies()->create([
            'name' => $name,
            'email' => $email,
            'location' => $location,
        ]);

        return $company;
    }

    public function hasFullCompany()
    {
        $company_count = $this->companies;
        if (count($company_count) == 3) {
            return true;
        }
        return false;
    }
}
