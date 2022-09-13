import React, { useEffect, useRef } from 'react';

export default function TextInput({
    type = 'text',
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    placeholder,
    handleChange,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            type={type}
            name={name}
            onChange={(e) => handleChange(e)}
            value={value}
            placeholder={placeholder}
            autoComplete={autoComplete}
            required={required}
            className={`text-sm w-full px-3 py-2 bg-slate-100 rounded-md focus:outline-none` + className}
        />
    );
}
