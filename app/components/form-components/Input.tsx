import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: React.ReactNode;
}


export default function Input({children, type, className, id, ...attributes}: InputProps) {
    return <fieldset className="flex flex-wrap py-1">
        <label className="label pr-2 pb-1" htmlFor={id}>
            {children}
        </label>
        <input
            id={id}
            type={type ?? "text"}
            className={`input border-base-200 ${className}`}
            {...attributes}
        />
    </fieldset>
}