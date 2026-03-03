import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533749047139-189de3cf06d3?q=80&w=2400')] bg-cover bg-center opacity-20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-6"
        >
          <Clock className="w-16 h-16 mx-auto text-amber-500 mb-6" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 bg-clip-text text-transparent"
        >
          Voyagez à travers les siècles
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 font-light"
        >
          Une expérience temporelle luxueuse et inoubliable
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
        >
          Découvrir nos destinations
        </motion.button>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-amber-500 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-amber-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
