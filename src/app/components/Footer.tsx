'use client';

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
    return (
        <footer className="bg-[#121212] text-white text-center py-10 px-5">
            {/* Ícones Sociais */}
            <div className="flex justify-center gap-5 mb-5">
                <a
                    href="mailto:rafaelf_santos08@outlook.com"
                    className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
                <a
                    href="https://github.com/rafaelfsnT"
                    target="_blank"
                    className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a
                    href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                    target="_blank"
                    className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110"
                >
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a
                    href="https://www.instagram.com/rafaelfsan/"
                    target="_blank"
                    className="text-white text-2xl transition-transform duration-300 hover:text-purple-700 hover:scale-110"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>

            {/* Texto do rodapé */}
            <p className="text-sm opacity-70">
                © {new Date().getFullYear()} Rafael Fassina dos Santos. Todos os direitos reservados.
            </p>
        </footer>

    );
}
