'use client';

export default function Servicos() {

    return (
        <section
            id="servicos"
            className="flex flex-col items-center justify-center pt-20 min-h-screen px-4"
        >
            <h1 className="text-purple-700 text-[2rem] md:text-[2.5rem] font-bold pb-10">Serviços</h1>

            <div className="flex flex-wrap justify-center gap-6 w-full max-w-6xl">
                {[

                    {
                        title: "Calculadora IMC Flutter",
                        image: "/projeto.png",
                        description:
                            "Trabalho com o intuito de calcular o IMC de uma pessoa, no começo das aulas em Flutter. Contém validações de campos vazios e de formatos incorretos.",
                        link: "https://github.com/rafaelfsnT/calculateimc-flutter",
                    },

                ].map((servico, index) => (
                    <div
                        key={index}
                        className="flex flex-col justify-between w-full md:w-[30%] min-h-[480px] bg-[#f7f7f7]  p-5 rounded-xl shadow-lg transition duration-300"
                    >
                        <h3 className="text-purple-700 mt-2 font-bold text-lg text-center">{servico.title}</h3>
                        <img
                            src={servico.image}
                            alt={`Imagem ${index + 1}`}
                            className="w-full h-[180px] object-cover rounded mt-4 mb-4"
                        />
                        <p className="text-justify text-purple-700  text-[1.1rem] leading-relaxed mb-4">
                            {servico.description}
                        </p>
                        <a
                            href={servico.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-white bg-purple-700 hover:bg-purple-800 text-lg py-2 px-6 rounded-full transition duration-300 hover:scale-105 text-center mt-auto"
                        >
                            Link projeto
                        </a>
                    </div>
                ))}
            </div>
        </section>
    )
}