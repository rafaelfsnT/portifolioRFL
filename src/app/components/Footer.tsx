'use client';

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-white py-10 px-5">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Ícones Sociais */}
                <div className="flex justify-center gap-6">
                    <a
                        href="mailto:rafaelf_santos08@outlook.com"
                        aria-label="Enviar e-mail"
                        className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    >
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                    <a
                        href="https://github.com/rafaelfsnT"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="https://www.instagram.com/rafaelfsan/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 rounded"
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                </div>

                {/* Texto do rodapé */}
                <p className="text-sm opacity-70 text-center md:text-right">
                    © {new Date().getFullYear()} Rafael Fassina dos Santos. Todos os direitos reservados.
                </p>
            </div>

            {/* Linha separadora */}
            <div className="max-w-7xl mx-auto border-t border-gray-700 mt-8" />
        </footer>
    );
}
