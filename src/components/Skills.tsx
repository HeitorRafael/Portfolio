import React from 'react';
import { motion } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  skills: Skill[];
  translations: {
    skills: {
      title: string;
    };
  };
}

const SkillIcon: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => {
  // Mapeamento dos ícones baseado na imagem que você enviou
  const getSkillIcon = (iconName: string) => {
    const icons: Record<string, string> = {
      figma: '🎨',
      git: '📚', 
      css: '🎨',
      html: '📄',
      java: '☕',
      vscode: '💻',
      intellij: '🧠'
    };
    
    return icons[iconName] || '⚡';
  };

  const getSkillColor = (index: number) => {
    const colors = [
      'from-blue-400 to-blue-600',
      'from-green-400 to-green-600', 
      'from-purple-400 to-purple-600',
      'from-red-400 to-red-600',
      'from-yellow-400 to-yellow-600',
      'from-indigo-400 to-indigo-600',
      'from-pink-400 to-pink-600'
    ];
    
    return colors[index % colors.length];
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      className={`bg-gradient-to-br ${getSkillColor(index)} p-6 rounded-2xl shadow-lg text-white text-center card-hover`}
    >
      <div className="text-4xl mb-4">
        {getSkillIcon(skill.icon)}
      </div>
      <h3 className="font-bold text-lg">
        {skill.name}
      </h3>
    </motion.div>
  );
};

const Skills: React.FC<SkillsProps> = ({ skills, translations }) => {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {translations.skills.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <SkillIcon 
              key={skill.name} 
              skill={skill} 
              index={index}
            />
          ))}
        </div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="text-white mb-6">
              <h3 className="text-2xl font-bold mb-4">📧 heitorbdelfino@gmail.com</h3>
              
              <div className="flex justify-center space-x-8">
                <a 
                  href="https://www.linkedin.com/in/heitor-rafael-bezerra-delfino-129760187/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>📱</span>
                  <span>LinkedIn</span>
                </a>
                
                <a 
                  href="https://instagram.com/seu_instagram" // Substitua pelo seu Instagram
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors"
                >
                  <span>📸</span>
                  <span>Instagram</span>
                </a>
                
                <a 
                  href="https://github.com/seu_github" // Substitua pelo seu GitHub
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <span>🐱</span>
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
