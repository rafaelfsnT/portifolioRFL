'use client';

import { motion } from "framer-motion";

export default function Servicos() {
    const projetos = [
        {
            title: "Calculadora IMC Flutter",
            image: "/projeto.png",
            description:
                "Aplicativo em Flutter para calcular o IMC de uma pessoa. Projeto introdutório com validação de campos vazios e formatos incorretos.",
            link: "https://github.com/rafaelfsnT/calculateimc-flutter",
        },
        // 642x562
        {
            title: "Projeto Hackathon",
            image: "/projeto2.png",
            description:
                "Projeto Hackathon de Avaliar Provas feito com Flutter e Spring Boot, gerando API e sendo consumidas dentro da aplicação Flutter. Aplicativo com tela de login, com validações de permissões do usuário.",
            link: "https://github.com/rafaelfsnT/hackathon2K25",
        },

    ];
    return (
        <section
            id="servicos"
            className="flex flex-col items-center justify-center pt-20 min-h-screen px-4 "
        >
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-purple-700 text-[2.5rem] font-bold pb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-purple-500"
            >
                Serviços
            </motion.h1>

            <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl mt-10">
                {projetos.map((servico, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="flex flex-col justify-between bg-white w-full md:w-[30%] min-h-[500px] p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
                    >
                        <h3 className="text-purple-700 font-extrabold text-xl text-center mb-2">
                            {servico.title}
                        </h3>
                        <img
                            src={servico.image}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-[180px] object-cover rounded-xl shadow-sm mb-4"
                        />
                        <p className="text-purple-800 text-justify text-base leading-relaxed mb-6">
                            {servico.description}
                        </p>
                        <a
                            href={servico.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-center py-3 rounded-full font-semibold hover:scale-105 transition-transform shadow-md"
                        >
                            Ver Projeto
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}