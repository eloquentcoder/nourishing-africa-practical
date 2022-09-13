import { useState, useEffect } from 'react';

import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import InputError from '../../Components/InputError';
import PrimaryButton from '../../Components/PrimaryButton';
import TextInput from '../../Components/TextInput';
import DashboardLayout from "../../Layouts/Dashboard";




export default function EditCompany({ company }) {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: company.email,
        name: company.name,
        location: company.location
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

        post(`/companies/${company.id}/edit`);
    };


    return (
        <DashboardLayout>
            <Head title="Edit Company" />

            <div className="px-5 md:px-[5rem] py-10">
                <div>
                    <div className="flex justify-between">
                        <div className="font-bold text-2xl mb-3">Edit {company.name} Company</div>
                    </div>
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
                            <PrimaryButton text="Edit" processing={processing} />
                        </form>
                    </div>
                </div>
            </div>



        </DashboardLayout>
    );
}