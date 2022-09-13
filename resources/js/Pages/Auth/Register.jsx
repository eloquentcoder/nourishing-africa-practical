import { useState, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import Auth from '../../Layouts/Auth';
import TextInput from '../../Components/TextInput';
import InputError from '../../Components/InputError';
import PrimaryButton from '../../Components/PrimaryButton';

export default function Register({ countries }) {
    const [showPassword, setShowPassword] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        mobile: '',
        country: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };


    const togglePassword = () => {
        setShowPassword(!showPassword);
    }

    const submit = (e) => {
        e.preventDefault();
        post('/register');
    };

    return (
        <Auth>
            <Head title="Register" />
            <div className="flex flex-col items-center space-y-7 mt-12">
                <img src="/images/logo.png" alt="" className="" />
                <div className="text-center">
                    <h2 className="text-3xl font-bold">Hello there!</h2>
                    <p className="text-2xs">Sign up for a new account to manage your user and company accounts</p>
                </div>
                <form onSubmit={submit} className="flex flex-col space-y-3 w-[400px]">
                    <div>
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
                    <div>
                        <TextInput
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            required={true}
                            placeholder="Enter Email Address"
                            handleChange={onHandleChange}
                        />
                        {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                        <InputError message={errors.email} className="mt-1 text-xs" />
                    </div>
                    <div>
                        <TextInput
                            type="tel"
                            name="mobile"
                            value={data.mobile}
                            autoComplete="tel"
                            required={true}
                            placeholder="Enter Mobile Number"
                            handleChange={onHandleChange}
                        />
                        {/* <input type="text" handleChange={onHandleChange} value={data.email} isFocused={true} placeholder='Enter Email Address' className='text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none' /> */}
                        <InputError message={errors.email} className="mt-1 text-xs" />
                    </div>
                    <div>
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
                    <div className="relative">
                        <TextInput
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={data.password}
                            autoComplete="username"
                            required={true}
                            placeholder="Enter Password"
                            handleChange={onHandleChange}
                        />
                        <span onClick={togglePassword} className="inline absolute right-2 top-2 cursor-pointer">
                            {showPassword ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                                </svg> :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            }
                        </span>
                        <InputError message={errors.password} className="mt-1 text-xs" />
                    </div>
                    <PrimaryButton text="Register" processing={processing} />
                </form>
                <div className="pt-10 text-sm">
                    <p>Already Have An Account? Click <Link href="/login" className="text-blue-500">Here</Link> to Login</p>
                </div>
            </div>

        </Auth>
    );

}