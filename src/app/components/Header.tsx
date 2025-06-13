"use client";
import Link from "next/link";
import Image from 'next/image'

import { useState } from "react";

;
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    const navLinks = [
        { href: "#sobre", label: "Sobre" },
        { href: "#habilidades", label: "Habilidades" },
        { href: "#servicos", label: "Serviços" },
        { href: "#contato", label: "Contato" },
    ];
    return (
        <header className="fixed top-0 w-full bg-white-500 shadow-md z-50">

            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* Logo alinhada à esquerda */}
                <div className="flex-shrink-0">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={75}
                            height={35}
                            className="cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </Link>
                </div>

                {/* Menu Desktop à direita */}
                <nav className="hidden md:flex space-x-4 items-center animate-fadeIn">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-purple-700 text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:border hover:border-purple-700 hover:bg-white hover:shadow-md"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Menu Hamburger - Mobile */}
                <div
                    className="md:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label="Abrir Menu"
                >
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                </div>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <div className="md:hidden relative bg-white shadow-lg px-6 py-4 flex flex-col space-y-3 animate-fadeIn z-40">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-purple-700 font-medium text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:border hover:border-purple-700 hover:bg-white hover:shadow-md"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>
            )}

        </header>
    );
}