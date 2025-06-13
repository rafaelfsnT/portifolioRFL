'use client';
export default function Sobre() {
    return (
        <section
            id="sobre"
            className="flex flex-col items-center justify-center pt-20 min-h-screen px-4"
        >
            <h1 className="text-purple-700 text-[2rem] md:text-[2.5rem] font-bold pb-10">
                Sobre Mim
            </h1>

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 w-full max-w-6xl">
                {/* Imagem */}
                <div className="flex justify-center md:justify-start flex-1">
                    <img
                        src="/perfil.jpg"
                        alt="Rafael"
                        className="w-[300px] h-[320px] rounded-full object-cover border-2 border-purple-700"
                    />
                </div>

                {/* Texto */}
                <div className="flex-1">
                    <p className="text-[#9B4DFF] text-[1.1rem] md:text-[1.3rem] leading-7 md:leading-[1.8rem] text-justify px-2 md:px-5 tracking-wide">
                        Olá! Meu nome é Rafael, sou desenvolvedor brasileiro, apaixonado pela tecnologia e inovação.
                        Atualmente, estou focado no aprimoramento contínuo das minhas habilidades e no aprendizado de novas
                        ferramentas e tecnologias. Tenho grande interesse em atuar nas áreas de desenvolvimento Mobile e Web,
                        sempre buscando criar soluções eficientes e de alta qualidade. Minha missão é contribuir para o
                        crescimento da tecnologia, oferecendo experiências digitais únicas e funcionalmente avançadas.
                    </p>
                </div>
            </div>
        </section>
    );
}