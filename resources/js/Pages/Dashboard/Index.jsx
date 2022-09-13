import DashboardLayout from "../../Layouts/Dashboard";

import { useState, useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';
import CreateCompany from "../../Components/CreateCompany";
// import CreateCompany from "../../Components/CreateCompany";


export default function Dashboard({ companies }) {
    const { auth } = usePage().props

    return (
        <DashboardLayout>
            <Head title="Dashboard" />

            <div className="px-5 md:px-[5rem] py-10">
                <div>
                    <div className="font-bold text-2xl mb-3">Hello, {auth.user.name}</div>
                    <div className="alert border-2 border-orange-200 mb-8">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                            <span>You currently have {companies.length} registered companies. {
                                companies.length == 3 ? "You have reached the threshold. Contact Admin to increase this" : `You can still register ${3 - companies.length} more`
                            } </span>
                        </div>

                    </div>
                    <div>
                        <h1 className="font-bold my-2">Quick Add</h1>
                        <CreateCompany />
                    </div>
                </div>
            </div>
        </DashboardLayout>
    )
}