import "./globals.css";
import Link from 'next/link';
import React from "react";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="bg-slate-900 text-white antialiased">
        <nav className="border-b border-slate-800 p-3 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
                LAN
                <span className="text-green-500">+</span>
            </Link>
            <div className="space-x-6 text-sm font-medium">
                <Link href="/art" className="hover:text-blue-400 transition-colors">Art</Link>
                <Link href="/worlds" className="hover:text-blue-400 transition-colors">Worlds</Link>
                <Link href="/profile"
                      className="bg-blue-600 hover:bg-blue-500 px-4 py-1.5 rounded-full transition-colors">
                    Profiles
                </Link>
            </div>
        </nav>
        <main>{children}</main>
        <footer className="p-10 text-center text-slate-500 text-sm">

        </footer>
        </body>
        </html>
    );
}
