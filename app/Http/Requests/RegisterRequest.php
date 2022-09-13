<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email' => 'email|required|unique:users',
            'name' => 'required',
            'password' => 'required',
            'country' => 'required|exists:country,nicename',
            'mobile' => 'required|unique:users'
        ];
    }

    public function messages()
    {
        return [
            'country.exists' => 'Kindly enter a valid country'
        ];
    }

}
