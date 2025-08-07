import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  translations: {
    hero: {
      name: string;
      title1: string;
      title2: string;
      quote: string;
    };
  };
}

const Hero: React.FC<HeroProps> = ({ translations }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <img
              src="/src/assets/images/profile.jpg" // Você precisará adicionar sua foto aqui
              alt="Heitor Rafael"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto object-cover border-4 border-white dark:border-gray-700 shadow-2xl"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {translations.hero.name}
          </motion.h1>

          {/* Titles */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-2 mb-8"
          >
            <p className="text-xl md:text-2xl text-gradient font-semibold">
              {translations.hero.title1}
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              {translations.hero.title2}
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl md:text-2xl italic text-gray-700 dark:text-gray-300 font-medium"
          >
            "{translations.hero.quote}"
          </motion.div>

          {/* Floating animation for the profile image */}
          <style>{`
            .animate-float {
              animation: float 6s ease-in-out infinite;
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
