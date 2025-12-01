"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Servicos() {
  const projetos = [
    {
      title: "Projeto Hackathon",
      image: "/projeto2.png",
      description:
        "Projeto Hackathon de Avaliar Provas feito com Flutter e Spring Boot, gerando API e consumida dentro do aplicativo Flutter. Inclui login e permissões de usuário.",
      link: "https://github.com/rafaelfsnT/hackathon2K25",
    },
    {
      title: "Projeto Ecclesia",
      image: "/projeto3.png",
      description:
        "Projeto Ecclesia feito com Flutter e Firebase, permitindo gerenciar escalas de missas e agendamentos de uma igreja católica.",
      link: "https://github.com/rafaelfsnT/projeto-ecclesia",
    },
  ];

  return (
    <section
      id="servicos"
      className="flex flex-col items-center justify-center pt-24 pb-20 px-4 bg-white"
    >
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-purple-700 text-4xl font-extrabold text-center"
      >
        Meus Projetos
      </motion.h1>

      <div className="h-[3px] w-24 bg-purple-500 mx-auto mt-3 rounded-full"></div>

      <p className="text-purple-900 mt-4 text-lg opacity-80 max-w-xl text-center">
        Uma coleção dos meus projetos desenvolvidos com Flutter, Next.js e Spring Boot.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mt-14">
        {projetos.map((servico, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-xl border border-purple-100 p-6 flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
          >
            {/* Imagem */}
            <div className="w-full aspect-video relative rounded-2xl overflow-hidden mb-5 shadow-sm">
              <Image
                src={servico.image}
                alt={servico.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Título */}
            <h3 className="text-purple-700 font-bold text-2xl mb-3 text-center">
              {servico.title}
            </h3>

            {/* Descrição */}
            <p className="text-purple-900 text-base leading-relaxed mb-6 text-center opacity-90">
              {servico.description}
            </p>

            {/* Botão */}
            <a
              href={servico.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto bg-purple-600 text-white text-center py-3 rounded-full font-semibold shadow-md hover:bg-purple-700 hover:scale-[1.04] transition-all"
            >
              Ver Projeto
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}