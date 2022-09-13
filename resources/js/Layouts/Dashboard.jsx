import Toast from "../Components/Toast";

import { usePage } from '@inertiajs/inertia-react'
import Navbar from "../Components/Navbar";


export default function DashboardLayout({ children }) {
    const { flash } = usePage().props

    return (
        <>
            <Navbar />
            <div className="bg-slate-100 min-h-screen">
                {children}
            </div>

            {flash.success && (
                <Toast type="success" message={flash.success} />
            )}

            {flash.error && (
                <Toast type="error" message={flash.error} />
            )}


        </>
    )
}