import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import { useState, useEffect } from 'react';
import PrimaryButton from '../../Components/PrimaryButton';
import DashboardLayout from "../../Layouts/Dashboard";

// import InputError from '../../Components/InputError';
// import PrimaryButton from '../../Components/PrimaryButton';
import TextInput from '../../Components/TextInput';
import InputError from '../../Components/InputError';

export default function Profile() {

    const { auth } = usePage().props;

    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: auth.user.name,
        mobile: auth.user.mobile,
        country: auth.user.country,
        email: auth.user.email,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };


    // const togglePassword = () => {
    //     setShowPassword(!showPassword);
    // }

    const submit = (e) => {
        e.preventDefault();
        post('/profile');
    };


    return (
        <DashboardLayout>
            <Head title="Update Profile" />

            <div className="px-5 md:px-[5rem] py-10">
                <div className="flex justify-between">
                    <div className="font-bold text-2xl mb-3">Update Profile</div>
                </div>
                <div className="card card-compact w-full bg-base-100 p-5">
                    <form onSubmit={submit} className="card-body flex flex-col space-y-4">
                        <div className="w-full">
                            <p className="mb-1">User name</p>
                            <TextInput
                                type="text"
                                name="name"
                                value={data.name}
                                autoComplete="name"
                                required={true}
                                placeholder="Enter Name"
                                handleChange={onHandleChange}
                            />
                            {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                            <InputError message={errors.name} className="mt-1 text-xs" />
                        </div>
                        <div className="w-full">
                            <p className="mb-1">User email</p>
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
                        <div className="w-full">
                            <p className="mb-1">User mobile</p>
                            <TextInput
                                type="text"
                                name="mobile"
                                value={data.mobile}
                                autoComplete="mobile"
                                required={true}
                                placeholder="Enter Mobile Number"
                                handleChange={onHandleChange}
                            />
                            {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                            <InputError message={errors.location} className="mt-1 text-xs" />
                        </div>
                        <div className="w-full">
                            <p className="mb-1">User country</p>
                            <TextInput
                                type="text"
                                name="country"
                                value={data.country}
                                autoComplete="tel"
                                required={true}
                                placeholder="Enter Country"
                                handleChange={onHandleChange}
                            />
                            {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                            <InputError message={errors.country} className="mt-1 text-xs" />
                        </div>
                        <PrimaryButton text="Update Profile" processing={processing} />
                    </form>
                </div>
            </div>
        </DashboardLayout>
    );
}