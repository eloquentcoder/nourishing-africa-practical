import { useState, useEffect } from 'react';

export default function Toast({ message, type, className }) {
    const [showAlert, setShowAlert] = useState(true);

    useEffect(() => {
        setShowAlert(true)
    }, []);

    const hideAlert = () => {
        setShowAlert(false);
    }

    return (
        <>
            {
                showAlert && <div className={`absolute top-5 right-2 flex items-center space-x-3 shadow-lg p-3 text-white rounded-lg ${type == 'success' ? 'bg-green-600' : 'bg-red-600'} text-white` + className}>
                    <span>
                        {type == 'success' ? 'Yaay' : 'Ooops'}! {message}
                    </span>
                    <svg onClick={hideAlert} className="w-5 h-5 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
            }
        </>


    );
}