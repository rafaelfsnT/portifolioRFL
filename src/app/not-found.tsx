'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
    return (
        <main className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] text-purple-700 px-4 text-center">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-6xl font-bold mb-4"
            >
                404
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="text-lg mb-6"
            >
                Opa! Página não encontrada.
            </motion.p>
            <Link
                href="/"
                className="bg-purple-700 hover:bg-purple-800 text-white py-2 px-6 rounded-full transition"
            >
                Voltar para o início
            </Link>
        </main>
    );
}
