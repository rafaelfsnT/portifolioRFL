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
            className="flex flex-col items-center justify-center pt-20 min-h-screen overflow-x-hidden"
        >
            {/* Título */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-700 text-4xl md:text-5xl font-bold mb-12"
            >
                Habilidades
            </motion.h1>

            {/* Hard Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-4 max-w-[95vw] md:max-w-5xl">
                {sortedSkills.map((skill, index) => (
                    <motion.div
                        key={index}
                        className="bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300 flex flex-col items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <FontAwesomeIcon icon={skill.icon} size="3x" className="text-purple-600 mb-4" />
                        <h3 className="font-semibold text-xl text-gray-800 mb-2">{skill.name}</h3>
                        <div className="w-full">
                            <div className="relative h-3 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{ duration: 1 }}
                                />
                            </div>
                            <p className="text-right text-sm font-semibold text-purple-700 mt-2">{skill.level}%</p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Título Soft Skills */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-purple-700 text-4xl md:text-5xl font-bold mt-24 mb-12"
            >
                Soft Skills
            </motion.h2>

            {/* Soft Skills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-[95vw] md:max-w-6xl">
                {[
                    { icon: faLightbulb, label: "Criatividade" },
                    { icon: faUsers, label: "Trabalho em Equipe" },
                    { icon: faSeedling, label: "Adaptabilidade" },
                    { icon: faBullseye, label: "Foco" },
                ].map((soft, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center bg-gray-50 border border-gray-200 p-6 rounded-2xl shadow hover:shadow-lg transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 * index }}
                    >
                        <FontAwesomeIcon icon={soft.icon} size="3x" className="text-purple-600 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-800">{soft.label}</h3>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
