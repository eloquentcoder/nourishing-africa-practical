import { useState, useEffect } from 'react';

import InputError from './InputError';
import TextInput from './TextInput';
import PrimaryButton from './PrimaryButton';

import { useForm } from '@inertiajs/inertia-react';

export default function CreateCompany() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        name: '',
        location: ''
    });

    useEffect(() => {
        return () => {
           data.email = "",
           data.name = "",
           data.location = ""
        };
    }, []);


    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post('/companies/register');
    };

    return (
    <div className="card card-compact w-full bg-base-100 p-5">
        <form onSubmit={submit} className="card-body flex flex-col md:flex-row space-y-2 md:space-y-0">
            <div className="w-full md:w-1/4">
                <TextInput
                    type="text"
                    name="name"
                    value={data.name}
                    autoComplete="name"
                    required={true}
                    placeholder="Enter Company Name"
                    handleChange={onHandleChange}
                />
                {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                <InputError message={errors.name} className="mt-1 text-xs" />
            </div>
            <div className="w-full md:w-1/4">
                <TextInput
                    type="email"
                    name="email"
                    value={data.email}
                    autoComplete="email"
                    required={true}
                    placeholder="Enter Company Email"
                    handleChange={onHandleChange}
                />
                {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                <InputError message={errors.email} className="mt-1 text-xs" />
            </div>
            <div className="w-full md:w-1/4">
                <TextInput
                    type="text"
                    name="location"
                    value={data.location}
                    autoComplete="location"
                    required={true}
                    placeholder="Enter Company Location"
                    handleChange={onHandleChange}
                />
                {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                <InputError message={errors.location} className="mt-1 text-xs" />
            </div>
            <PrimaryButton text="Add" processing={processing} />
        </form>
    </div>
    );

}