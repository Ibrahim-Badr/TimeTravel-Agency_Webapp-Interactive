import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Brain, ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: Array<{
    text: string;
    value: 'culture' | 'adventure' | 'elegance';
  }>;
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Quelle expérience vous attire le plus ?',
    options: [
      { text: 'Visiter des musées et rencontrer des artistes', value: 'culture' },
      { text: 'Explorer des terres sauvages et mystérieuses', value: 'adventure' },
      { text: 'Assister à des événements mondains prestigieux', value: 'elegance' }
    ]
  },
  {
    id: 2,
    question: 'Comment préférez-vous passer votre temps libre ?',
    options: [
      { text: 'Lire des livres et apprendre de nouvelles choses', value: 'culture' },
      { text: 'Faire du sport et vivre des sensations fortes', value: 'adventure' },
      { text: 'Déguster des mets raffinés dans un cadre luxueux', value: 'elegance' }
    ]
  },
  {
    id: 3,
    question: 'Quel type d\'hébergement choisiriez-vous ?',
    options: [
      { text: 'Une demeure historique chargée d\'histoires', value: 'culture' },
      { text: 'Un campement sous les étoiles en pleine nature', value: 'adventure' },
      { text: 'Un palace avec service de conciergerie', value: 'elegance' }
    ]
  },
  {
    id: 4,
    question: 'Quelle serait votre souvenir idéal ?',
    options: [
      { text: 'Une œuvre d\'art ou un manuscrit rare', value: 'culture' },
      { text: 'Une photo d\'un moment extraordinaire', value: 'adventure' },
      { text: 'Un bijou ou un objet de luxe d\'époque', value: 'elegance' }
    ]
  }
];

const recommendations = {
  culture: {
    destination: 'Florence 1504',
    description: 'La Renaissance italienne vous appelle ! Rencontrez les plus grands artistes de l\'histoire.',
    color: 'from-purple-500 to-pink-500'
  },
  adventure: {
    destination: 'Crétacé -65M',
    description: 'L\'aventure ultime vous attend parmi les dinosaures du Crétacé !',
    color: 'from-green-500 to-emerald-500'
  },
  elegance: {
    destination: 'Paris 1889',
    description: 'La Belle Époque parisienne est faite pour vous ! Vivez le luxe à la française.',
    color: 'from-amber-500 to-orange-500'
  }
};

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Array<'culture' | 'adventure' | 'elegance'>>([]);
  const [showResult, setShowResult] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (value: 'culture' | 'adventure' | 'elegance') => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getRecommendation = () => {
    const counts = answers.reduce((acc, answer) => {
      acc[answer] = (acc[answer] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const recommendation = Object.entries(counts).sort(([, a], [, b]) => b - a)[0][0] as keyof typeof recommendations;
    return recommendations[recommendation];
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setShowResult(false);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
          >
            <Brain className="w-20 h-20 mx-auto text-amber-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Quiz Temporel IA
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Laissez notre intelligence artificielle déterminer la destination parfaite pour votre voyage dans le temps
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsStarted(true)}
              className="px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 text-lg font-semibold rounded-full shadow-2xl hover:shadow-amber-500/50 transition-all duration-300"
            >
              Commencer le quiz
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  }

  if (showResult) {
    const recommendation = getRecommendation();
    return (
      <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
          >
            <Sparkles className="w-20 h-20 mx-auto text-amber-500 mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Votre destination idéale
            </h2>
            <div className={`inline-block px-8 py-3 bg-gradient-to-r ${recommendation.color} text-white text-3xl font-bold rounded-2xl mb-6`}>
              {recommendation.destination}
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              {recommendation.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-gray-900 font-semibold rounded-full shadow-xl hover:shadow-amber-500/50 transition-all duration-300"
              >
                Réserver ce voyage
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={resetQuiz}
                className="px-8 py-4 backdrop-blur-xl bg-white/10 border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300"
              >
                Recommencer
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl"
        >
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <span className="text-amber-400 font-semibold">
                Question {currentStep + 1} sur {questions.length}
              </span>
              <span className="text-gray-400">
                {Math.round(((currentStep + 1) / questions.length) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                className="h-full bg-gradient-to-r from-amber-500 to-amber-600"
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                {questions[currentStep].question}
              </h3>

              <div className="space-y-4">
                {questions[currentStep].options.map((option, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleAnswer(option.value)}
                    className="w-full p-6 backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl text-left text-white hover:bg-white/10 hover:border-amber-500/50 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{option.text}</span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-amber-500 transform group-hover:translate-x-1 transition-all" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {currentStep > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={handlePrevious}
              className="mt-8 flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Retour
            </motion.button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
