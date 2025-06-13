'use client';

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function Contato() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("loading");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const res = await fetch("https://formspree.io/f/xoveqala", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                },
                body: formData,
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    };
    return (
        <section id="contato" className="py-20 px-4 bg-gradient-to-b from-[#f4f4f9] to-[#e8e8f3] flex justify-center">
            <div className="w-full max-w-6xl flex flex-wrap bg-white rounded-xl shadow-md overflow-hidden">
                {/* Lado esquerdo - Informações */}
                <div className="bg-purple-700 text-white flex-1 p-10 flex flex-col gap-6 justify-center min-w-[280px]">
                    <h1 className="text-3xl font-bold">Entre em Contato</h1>

                    <div className="flex items-center gap-3 text-lg">
                        <Mail size={22} />
                        <a
                            href="mailto:rafaelf_santos08@outlook.com"
                            className="hover:opacity-80 transition"
                        >
                            E-mail profissional
                        </a>
                    </div>

                    <div className="flex items-center gap-3 text-lg">
                        <Mail size={22} />
                        <a
                            href="mailto:rafaelfss.sant05@gmail.com"
                            className="hover:opacity-80 transition"
                        >
                            E-mail pessoal
                        </a>
                    </div>

                    {/* Ícones sociais */}
                    <div className="flex gap-5 mt-4">
                        <a
                            href="https://github.com/rafaelfsnT"
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>
                        <a
                            href="https://www.instagram.com/rafaelfsan/"
                            target="_blank"
                            className="hover:scale-110 transition-transform"
                        >
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                    </div>
                </div>

                {/* Lado direito - Formulário */}
                <div className="flex-1 p-10 min-w-[280px]">
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <h2 className="text-2xl font-semibold text-purple-700 mb-2">Fale Conosco</h2>

                        <label className="text-base font-bold">Nome</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none"
                        />

                        <label className="text-base font-bold">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none"
                        />

                        <label className="text-base font-bold">Mensagem</label>
                        <textarea
                            name="message"
                            rows={4}
                            required
                            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none"
                        />

                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-purple-700 text-white font-bold py-3 rounded-md hover:bg-purple-800 transition"
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        </motion.button>

                        {status === "success" && (
                            <p className="text-green-600 text-center mt-4">
                                Sua mensagem foi enviada com sucesso!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-600 text-center mt-4">
                                Algo deu errado. Tente novamente.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>

    )
}