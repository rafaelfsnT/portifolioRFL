'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#f9f9f9] px-6 text-center text-purple-700">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-xl p-12 max-w-md w-full"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-7xl font-extrabold mb-2 select-none"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl mb-6 flex justify-center items-center gap-2"
          aria-label="Ícone triste"
        >
          <span role="img" aria-hidden="true" className="text-4xl">😕</span>
          <p>Opa! Página não encontrada.</p>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 text-sm text-purple-600"
        >
          Parece que essa página não existe ou foi removida. Tente voltar para o início.
        </motion.p>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link
            href="/"
            className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-3 px-8 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition"
          >
            Voltar para o início
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
