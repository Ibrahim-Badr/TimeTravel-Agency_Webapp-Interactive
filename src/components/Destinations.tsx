import { motion } from 'framer-motion';
import { MapPin, Calendar, Sparkles } from 'lucide-react';

const destinations = [
  {
    id: 1,
    title: 'Paris 1889',
    era: 'Belle Époque',
    description: 'Découvrez l\'inauguration de la Tour Eiffel et la splendeur de l\'Exposition universelle',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2000',
    date: '1889',
    highlights: ['Tour Eiffel', 'Exposition Universelle', 'Art Nouveau']
  },
  {
    id: 2,
    title: 'Crétacé -65M',
    era: 'Dinosaures',
    description: 'Voyagez à l\'époque des géants et observez les derniers jours du Crétacé',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000',
    date: '-65 000 000',
    highlights: ['T-Rex', 'Tricératops', 'Volcans']
  },
  {
    id: 3,
    title: 'Florence 1504',
    era: 'Renaissance',
    description: 'Rencontrez Michel-Ange et Léonard de Vinci au sommet de leur art',
    image: 'https://images.unsplash.com/photo-1543429258-8c6ab3852da8?q=80&w=2000',
    date: '1504',
    highlights: ['Michel-Ange', 'Léonard de Vinci', 'Art Renaissance']
  }
];

export default function Destinations() {
  return (
    <section className="py-24 px-4 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Nos Destinations
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explorez les époques les plus fascinantes de l'histoire
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10" />

              <div className="relative h-[500px] overflow-hidden">
                <motion.img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end backdrop-blur-[2px] bg-gradient-to-t from-gray-900/95 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-2 text-amber-400 text-sm">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-semibold">{destination.era}</span>
                  </div>

                  <h3 className="text-3xl font-bold text-white">
                    {destination.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {destination.description}
                  </p>

                  <div className="flex items-center gap-2 text-amber-500 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{destination.date}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {destination.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full text-xs text-amber-300"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  <button className="w-full mt-4 px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-semibold rounded-full hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300">
                    Réserver maintenant
                  </button>
                </motion.div>
              </div>

              <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end group-hover:opacity-0 transition-opacity duration-300">
                <div className="flex items-center gap-2 text-amber-400 text-sm mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-semibold">{destination.era}</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {destination.title}
                </h3>
                <div className="flex items-center gap-2 text-gray-300 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{destination.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
