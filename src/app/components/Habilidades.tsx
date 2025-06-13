'use client';

import { faCss3Alt, faFlutter, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { faLightbulb, faUsers, faSeedling, faBullseye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';

export default function Habilidades() {
    const skills = [
        { name: "CSS", icon: faCss3Alt, level: 70 },
        { name: "React", icon: faReact, level: 75 },
        { name: "JavaScript", icon: faJsSquare, level: 80 },
        { name: "Flutter", icon: faFlutter, level: 85 },
    ];

    const sortedSkills = skills.sort((a, b) => b.level - a.level);
    return (
        <section
            id="habilidades"
            className="flex flex-col items-center justify-center pt-20 min-h-screen px-4"
        >
            {/* Título Habilidades */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-700 text-[2rem] md:text-[2.5rem] font-bold pb-10"
            >
                Habilidades
            </motion.h1>

            {/* Cards de Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-5xl">
                {sortedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="w-full p-5 bg-gray-100  rounded-xl shadow-md flex flex-col items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <FontAwesomeIcon icon={skill.icon} size="3x" className="text-purple-700 mb-2" />
                        <h3 className="font-semibold text-lg">{skill.name}</h3>

                        {/* Barra de progresso */}
                        <div className="flex items-center w-full mt-3">
                            <div className="w-full bg-gray-300  rounded h-2 relative overflow-hidden">
                                <motion.div
                                    className="bg-purple-700 h-2 rounded"
                                    initial={{ width: 0 }}
                                    animate={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <span className="ml-3 font-bold text-purple-700">{skill.level}%</span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Título Soft Skills */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-700 text-[2rem] md:text-[2.5rem] font-bold pt-20 pb-10"
            >
                Soft Skills
            </motion.h1>

            {/* Cards de Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-6xl">
                {[
                    { icon: <FontAwesomeIcon icon={faLightbulb} size="3x" />, label: "Criatividade" },
                    { icon: <FontAwesomeIcon icon={faUsers} size="3x" />, label: "Trabalho em Equipe" },
                    { icon: <FontAwesomeIcon icon={faSeedling} size="3x" />, label: "Adaptabilidade" },
                    { icon: <FontAwesomeIcon icon={faBullseye} size="3x" />, label: "Foco" },
                ].map((soft, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center justify-center bg-gray-100 p-6 rounded-xl shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <div className="text-purple-700 mb-2">{soft.icon}</div>
                        <h3 className="text-lg font-semibold">{soft.label}</h3>
                    </motion.div>
                ))}
            </div>
        </section>

    );
}


