import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    children: React.ReactNode;
}


export default function Input({children, type, className, id, ...attributes}: InputProps) {
    return <fieldset className="px-2 py-4 max-w-fit">
        <label className="label pr-2 pb-1" htmlFor={id}>
            {children}
        </label>
        <input
            id={id}
            type={type ?? "text"}
            className={`input border border-neutral rounded-field ${className}`}
            {...attributes}
        />
    </fieldset>
}