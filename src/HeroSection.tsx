import { GrandSlamLogo } from './icons/GrandSlamLogo';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5], [0.6, 0]);
  const cardsProgress = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative h-auto flex items-start pt-2 overflow-hidden snap-start"
    >
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'url("https://i.imgur.com/uXxgEnA.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          scale: backgroundScale,
          opacity: backgroundOpacity
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-medianoche/80 to-medianoche/95"></div>
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <GrandSlamLogo className="w-32 h-32 mx-auto mb-2" />
          </motion.div>
          
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-marfil mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <span className="text-verde">GRAND SLAM</span> PADEL
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-marfil/90 font-light"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            No es solo un torneo, es el inicio de una nueva era en el pádel de Jalisco.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link to="/registro" className="btn btn-secondary font-bold">
              Regístrate
            </Link>
          </motion.div>
          
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ opacity: cardsProgress }}
          >
            {[
              { title: "23-24 Agosto", subtitle: "2025" },
              { title: "160", subtitle: "Jugadores" },
              { title: "300+", subtitle: "Visitantes" }
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-beige/80 p-6 rounded-lg backdrop-blur-sm flex flex-col items-start justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-marfil text-3xl font-bold mb-2">{card.title}</div>
                <div className="text-marfil">{card.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;