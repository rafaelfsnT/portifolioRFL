"use client";
import { useRef, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    const typewriterRef = useRef<HTMLHeadingElement | null>(null);

    useEffect(() => {
        const text = "< Software Developer />";
        let index = 0;
        let isAdding = true;

        function type() {
            if (typewriterRef.current) {
                typewriterRef.current.innerHTML = text.substring(0, index);
            }

            if (isAdding) {
                if (index < text.length) {
                    index++;
                    setTimeout(type, 75);
                } else {
                    isAdding = false;
                    setTimeout(type, 1000);
                }
            } else {
                if (index > 0) {
                    index--;
                    setTimeout(type, 75);
                } else {
                    isAdding = true;
                    setTimeout(type, 1000);
                }
            }
        }

        type();
    }, []);

    return (
        <section
            id="inicio"
            className="flex items-center justify-center min-h-screen px-4 pt-20"
        >
            <div className="w-full max-w-6xl flex flex-col items-center text-center">
                <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-purple-700 pb-4">
                    Rafael Fassina Dos Santos
                </h1>
                <h2
                    ref={typewriterRef}
                    id="typewriter"
                    className="text-[1.5rem] md:text-[1.8rem] text-purple-700 border-r-2 border-purple-700 pr-1 whitespace-nowrap overflow-hidden h-8 leading-8 animate-blink-caret"
                ></h2>

                {/* Ícones sociais */}
                <div className="flex gap-10 mt-10 text-purple-700 text-2xl">
                    <Link
                        href="https://github.com/rafaelfsnT"
                        target="_blank"
                        className="hover:opacity-30 transition-opacity duration-300"
                    >
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                        target="_blank"
                        className="hover:opacity-30 transition-opacity duration-300"
                    >
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </Link>
                    <Link
                        href="https://www.instagram.com/rafaelfsan/"
                        target="_blank"
                        className="hover:opacity-30 transition-opacity duration-300"
                    >
                        <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </Link>
                </div>
            </div>
        </section>

    );
};
