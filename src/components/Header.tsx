import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Beer, Beef, Sandwich, MessageCircle } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  language: 'pt' | 'en';
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
  translations: any;
}

const Header: React.FC<HeaderProps> = ({ 
  theme, 
  language, 
  onToggleTheme, 
  onToggleLanguage, 
  translations 
}) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/5585999999999', '_blank'); // Substitua pelo seu número
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass-effect"
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Navigation */}
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-lg font-bold text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
            >
              {translations.nav.home}
            </button>
            
            <div className="hidden md:flex space-x-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                {translations.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                {translations.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-800 dark:text-white hover:text-blue-500 transition-colors"
              >
                {translations.nav.skills}
              </button>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleTheme}
              className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all"
            >
              {theme === 'light' ? (
                <Coffee className="w-5 h-5" />
              ) : (
                <Beer className="w-5 h-5" />
              )}
            </motion.button>

            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onToggleLanguage}
              className="p-2 rounded-full bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 text-gray-800 dark:text-white hover:bg-white/30 dark:hover:bg-gray-800/30 transition-all"
            >
              {language === 'pt' ? (
                <Beef className="w-5 h-5" />
              ) : (
                <Sandwich className="w-5 h-5" />
              )}
            </motion.button>

            {/* Contact Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openWhatsApp}
              className="btn-primary flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{translations.nav.contact}</span>
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
