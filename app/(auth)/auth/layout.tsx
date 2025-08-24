import React from "react";

export default function AuthLayout({
    children,
}:
    { children: React.ReactNode; }) {
    return (
        <main className="flex flex-col items-center h-screen  bg-zinc-800">
            {children}
        </main>
    );
}
