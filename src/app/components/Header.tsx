"use client";
import Image from 'next/image';
import { useState } from "react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { href: "#sobre", label: "Sobre" },
        { href: "#habilidades", label: "Habilidades" },
        { href: "#servicos", label: "Serviços" },
        { href: "#contato", label: "Contato" },
    ];

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        const section = document.querySelector(targetId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 w-full bg-white shadow-md z-50 overflow-x-hidden">
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between px-4 md:px-6 py-4">
                <div className="flex-shrink-0">
                    <a href="#inicio" onClick={(e) => handleScroll(e, "#inicio")}>
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            width={75}
                            height={35}
                            className="cursor-pointer object-contain transition-transform duration-300 hover:scale-105"
                            priority
                        />
                    </a>
                </div>

                {/* Menu Desktop */}
                <nav className="hidden md:flex space-x-4 items-center animate-fadeIn">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-purple-700 text-lg font-medium px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:text-white hover:shadow-md"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Ícone Hamburger */}
                <button
                    className="md:hidden flex flex-col space-y-1 cursor-pointer"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Fechar Menu" : "Abrir Menu"}
                    type="button"
                >
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                    <span className="w-6 h-0.5 bg-purple-700"></span>
                </button>
            </div>

            {/* Menu Mobile */}
            {menuOpen && (
                <nav className="md:hidden fixed top-[64px] left-0 w-full bg-white shadow-lg px-4 py-4 flex flex-col space-y-3 animate-fadeIn z-50">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleScroll(e, link.href)}
                            className="text-purple-700 font-medium text-lg px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105 hover:bg-purple-700 hover:text-white hover:shadow-md"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            )}
        </header>
    );
}
