import { GrandSlamLogo } from './icons/GrandSlamLogo';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-auto flex flex-col items-start overflow-hidden">
      {/* Static background with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[#25584f] mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-br from-verde/90 to-beige/90" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zM22.344 0L13.858 8.485 15.272 9.9l9.9-9.9h-2.828zM32 0h-2.827L15.414 13.757l1.415 1.415L32 0zm-9.414 0l-9.9 9.9 1.415 1.414L25.272 0h-2.686zm-6.172 0L4.686 11.728l1.415 1.414L19.1 0h-2.686zM0 0c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314C-1.314.486-.828 0 0 0zm0 2.628c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314 0-.828.486-1.314 1.314-1.314zm2.628-2.628c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314 0-.828.486-1.314 1.314-1.314zm0 2.628c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314 0-.828.486-1.314 1.314-1.314zm2.628-2.628c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314 0-.828.486-1.314 1.314-1.314zm0 2.628c.828 0 1.314.486 1.314 1.314 0 .828-.486 1.314-1.314 1.314-.828 0-1.314-.486-1.314-1.314 0-.828.486-1.314 1.314-1.314z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <GrandSlamLogo className="w-[600px] h-[400px] mx-auto" />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.2, 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            <Link 
              to="/registro"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-verde bg-marfil rounded-lg hover:bg-[#A8E0D9] transition-colors duration-300 transform hover:scale-105"
            >
              Inscríbete
            </Link>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            className="text-xl md:text-2xl text-marfil/90 font-light mt-8 leading-relaxed"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.4, 
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            El inicio de una nueva era en el padel.
            <br />
            Un torneo que conecta a jóvenes en un ambiente vibrante.
          </motion.p>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
              delay: 0.8, 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            }}
          >
            {[
              { number: "23-24", label: "Agosto 2025" },
              { number: "160", label: "Jugadores" },
              { number: "300+", label: "Visitantes" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-marfil/10 backdrop-blur-sm p-6 rounded-lg border border-marfil/20"
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-3xl font-bold text-marfil mb-1">{stat.number}</div>
                <div className="text-marfil/80">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;