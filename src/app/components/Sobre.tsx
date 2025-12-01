'use client';

import { motion } from 'framer-motion';

export default function Sobre() {
    return (
        <section
            id="sobre"
            className="flex flex-col items-center justify-center py-20 px-4 min-h-screen "
        >
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-700 text-4xl md:text-5xl font-bold mb-12"
            >
                Sobre Mim
            </motion.h1>

            {/* Conteúdo */}
            <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
                {/* Imagem */}
                <motion.div
                    className="flex justify-center flex-1"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <img
                        src="/perfil.jpeg"
                        alt="Foto de perfil"
                        className="w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full object-cover border-[3px] border-purple-600 shadow-lg"
                    />
                </motion.div>

                {/* Texto */}
                <motion.div
                    className="flex-1 text-justify px-2 md:px-5"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="text-gray-700 text-[1.1rem] md:text-[1.25rem] leading-relaxed tracking-wide">
                        Olá! Meu nome é <span className="text-purple-700 font-semibold">Rafael</span>, sou um desenvolvedor brasileiro apaixonado pela tecnologia e inovação.
                        Tenho me dedicado ao aprimoramento constante das minhas habilidades técnicas, explorando novas ferramentas e linguagens para criar soluções funcionais e elegantes.
                        <br /><br />
                        Me interesso especialmente pelas áreas de desenvolvimento <strong>Web</strong> e <strong>Mobile</strong>, buscando sempre entregar experiências digitais de alto nível.
                        Acredito que a tecnologia deve ser acessível, eficiente e impactante — e é nisso que concentro meus esforços como desenvolvedor.
                        <br /><br />
                        Estou pronto para encarar novos desafios e contribuir com projetos que façam a diferença!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
