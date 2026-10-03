import type { Metadata } from 'next';
import "./globals.css";
import Link from 'next/link';
import React from "react";
import lanlogo from "@/assets/lan logo.png"

export const metadata: Metadata = {
    title: "Lan+",
    icons: {
        icon: lanlogo.src
    }
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="es">
        <body className="bg-slate-900 text-white antialiased min-h-screen flex flex-col">
        <nav className="border-b bg-slate-900 border-slate-800 p-3 flex justify-between items-center">
            <Link href="/" className="text-2xl text-brand-lavender font-bold tracking-tighter ml-10 my-1">
                LAN
                <span className="text-brand-lime">+</span>
            </Link>
            <div className="space-x-8 font-medium mr-10 my-1">
                <Link href="/art">Art</Link>
                <Link href="/worlds">Worlds</Link>
                <Link href="/profile">Profiles</Link>
                <Link href="https://www.curseforge.com/minecraft/mc-mods/lan" className="text-black text-shadow-cyan-800 bg-brand-lime rounded-full px-5 py-3 border-slate-900 border-spacing-y-1.5">Install</Link>
            </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="">
            <section className="bg-slate-950 py-12 border-t border-slate-900 text-center">
                <p className="text-slate-500 text-sm">
                    Made for the Lan+ community.
                </p>
            </section>
        </footer>
        </body>
        </html>
    );
}
