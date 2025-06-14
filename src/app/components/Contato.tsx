'use client';

import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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
// requisiçao formspree
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
        <section id="contato" className="py-20 px-4 flex justify-center">
            <div className="w-full max-w-6xl flex flex-wrap bg-white rounded-xl shadow-md overflow-hidden">
                {/* Lado esquerdo - Info */}
                <div className="bg-gradient-to-br from-purple-700 via-purple-800 to-indigo-900 text-white flex-1 p-12 flex flex-col gap-8 justify-center min-w-[280px] rounded-l-xl shadow-xl">
                    <h1 className="text-4xl font-extrabold tracking-wide drop-shadow-lg">Entre em Contato</h1>

                    <div className="flex flex-col gap-6 text-lg">
                        <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105">
                            <Mail size={26} className="text-white transition-colors" />
                            <a
                                href="mailto:rafaelf_santos08@outlook.com"
                                className="underlinedecoration-2 underline-offset-4 transition-colors"
                            >
                                E-mail profissional
                            </a>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer transition-transform hover:scale-105">
                            <Mail size={26} className="text-white  transition-colors" />
                            <a
                                href="mailto:rafaelfss.sant05@gmail.com"
                                className="underlinedecoration-2 underline-offset-4 transition-colors"
                            >
                                E-mail pessoal
                            </a>
                        </div>
                    </div>

                    {/* Ícones sociais */}
                    <div className="flex gap-8 mt-6">
                        <a
                            href="https://github.com/rafaelfsnT"
                            target="_blank"
                            className="text-white text-3xl  transition-colors hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rafael-fassina-dos-santos-40805626a/"
                            target="_blank"
                            className="text-white text-3xl  transition-colors hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a
                            href="https://www.instagram.com/rafaelfsan/"
                            target="_blank"
                            className="text-white text-3xl  transition-colors hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>

                {/* Lado direito - Formulário */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex-1 p-10 min-w-[280px] rounded-r-xl shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <h2 className="text-3xl text-center font-bold text-purple-700 mb-2">Fale Conosco</h2>
                        <p className="text-gray-600 text-base mb-4">
                            <strong>Seu feedback é fundamental para o meu aprimoramento contínuo.</strong>
                        </p>

                        {/* Campos do formulário */}
                        {/* Nome */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700 mb-1">Nome</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Seu nome completo"
                                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="seu@email.com"
                                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Mensagem */}
                        <div className="flex flex-col">
                            <label className="text-sm font-semibold text-gray-700 mb-1">Mensagem</label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="Digite sua mensagem aqui..."
                                className="px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Botão */}
                        <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full bg-gradient-to-r from-purple-700 to-indigo-700 text-white font-bold py-3 rounded-md shadow-md hover:shadow-lg transition"
                        >
                            {status === "loading" ? "Enviando..." : "Enviar Mensagem"}
                        </motion.button>

                        {/* Feedback de envio */}
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3 mt-4 rounded-md border border-green-400 bg-green-50 px-4 py-3 shadow-md text-green-700 font-semibold"
                                role="alert"
                            >
                                <FontAwesomeIcon icon={faCheckCircle} className="text-green-600" />
                                <span>Sua mensagem foi enviada com sucesso!</span>
                            </motion.div>
                        )}
                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center gap-3 mt-4 rounded-md border border-red-400 bg-red-50 px-4 py-3 shadow-md text-red-700 font-semibold"
                                role="alert"
                            >
                                <FontAwesomeIcon icon={faTimesCircle} className="text-red-600" />
                                <span>Algo deu errado. Tente novamente.</span>
                            </motion.div>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>

    )
}