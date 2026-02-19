import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

export default function Button({children, className, ...attributes}: ButtonProps) {
    return  <button className={`btn ${className}`} {...attributes} >{children}</button>
}