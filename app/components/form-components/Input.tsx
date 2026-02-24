import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children?: React.ReactNode;
}


export default function Input({children, type, className, id, ...attributes}: InputProps) {
    return <fieldset className="fieldset w-full">
        <legend className="fieldset-legend pr-2 pb-1">
            {children}
        </legend>
        <input
            id={id}
            type={type ?? "text"}
            className={`input border-base-200 ${className}`}
            {...attributes}
        />
    </fieldset>
}