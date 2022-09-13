import { useState, useEffect } from 'react';
import { Head, Link, useForm, usePage } from '@inertiajs/inertia-react';


export default function Navbar() {
    const { auth } = usePage().props

    const [filteredCompanies, setFilteredCompanies] = useState([]);

    const handleCompany = (event) => {
        let searchTitle = event.target.value.toLowerCase();
        console.log(searchTitle == "")
        if (searchTitle == "") {
            setFilteredCompanies([]);
            return;
        }
        let filteredCompanies = auth.companies.filter((company) => {
            return company.name.toLowerCase().includes(searchTitle)
        })
        setFilteredCompanies(filteredCompanies);
    }


    return (
        <div className="navbar bg-base-100 shadow-md px-5 md:px-[5rem]">
            <div className="flex-1">
                <Link href='/dashboard' className="normal-case text-xl">AFCHub</Link>
            </div>
            <div className="flex-none gap-2 md:gap-[4.25rem]">
                <div className="form-control">
                    <input onChange={handleCompany} type="text" placeholder="Search Companies" className="input input-bordered focus:outline-none focus:ring-0" />
                </div>
                {
                    filteredCompanies.length > 0 &&
                    <div className="bg-white shadow-lg absolute right-16 md:right-[11rem] top-[4.2rem] w-52 rounded-md z-10">
                        <ul>
                            {
                                filteredCompanies.map((company) => <li key={company.id} className="p-2 cursor-pointer rounded-sm border-grey-100 border-[1px] hover:bg-orange-400 hover:text-white">
                                    <Link href={`/companies/` + company.id}>{company.name}</Link>
                                </li>)}

                            {/* <li className="p-2 rounded-sm border-grey-100 border-[1px] hover:bg-orange-400 hover:text-white">Software</li> */}
                        </ul>
                    </div>
                }

                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a href='/companies' className="justify-between">
                                Companies
                            </a>
                        </li>
                        <li>
                            <a href='/profile' className="justify-between">
                                Update Profile
                            </a>
                        </li>
                        <li><a href='/logout'>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}