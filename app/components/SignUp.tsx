'use client';
import React from "react";

export default function SignUp () {
    return (
        <section id="signup" className="w-full flex flex-col items-center py-12 px-4">
            <h1 className="text-center mb-6">Sign your school up today</h1>

            <div className="w-full max-w-2xl bg-base-100 rounded-2xl border border-base-200 shadow-sm overflow-hidden">
                <iframe
                    /* Form Link goes here */
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfYourFormIDHere/viewform?embedded=true"
                    className="w-full h-[900px] border-0"
                    title="Registration Form"
                >
                    Loading form...
                </iframe>
            </div>
        </section>
    );
}