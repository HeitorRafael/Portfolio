import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Download } from 'lucide-react';

interface AboutProps {
  translations: {
    about: {
      title: string;
      description: string;
      linkedinButton: string;
      resumeTitle: string;
      downloadButton: string;
    };
  };
}

const About: React.FC<AboutProps> = ({ translations }) => {
  const openLinkedIn = () => {
    window.open('https://www.linkedin.com/in/heitor-rafael-bezerra-delfino-129760187/', '_blank');
  };

  const downloadResume = () => {
    window.open('https://docs.google.com/document/d/1U3WFXHh_5VCA0fdnt-1UicoTlmGZ3PuqWxRnmH4M98k/edit?usp=sharing', '_blank');
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Who am I Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                {translations.about.title}
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {translations.about.description}
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openLinkedIn}
                className="btn-primary flex items-center space-x-2"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{translations.about.linkedinButton}</span>
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <img
                src="/src/assets/images/about-photo.jpg" // Adicione uma foto sua aqui
                alt="Heitor Rafael"
                className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
                onError={(e) => {
                  // Fallback quando a imagem não existir
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjUwMCIgZmlsbD0iI2YzZjRmNiIvPgogIDx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5TdWEgRm90byBBcXVpPC90ZXh0Pgo8L3N2Zz4=';
                }}
              />
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </motion.div>
          </motion.div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
              {translations.about.resumeTitle}
            </h3>
            
            <div className="bg-gray-50 dark:bg-gray-700 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="mb-8">
                <iframe
                  src="https://docs.google.com/document/d/1U3WFXHh_5VCA0fdnt-1UicoTlmGZ3PuqWxRnmH4M98k/preview"
                  className="w-full h-96 rounded-lg border-0"
                  title="Currículo"
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={downloadResume}
                className="btn-primary flex items-center space-x-2 mx-auto"
              >
                <Download className="w-5 h-5" />
                <span>{translations.about.downloadButton}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
