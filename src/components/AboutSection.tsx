import { Users, Calendar, Award, MapPin, Heart, Trophy, Gift, Target, Star, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ContactSection from './ContactSection';
import SponsorsSection from './SponsorsSection';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="section bg-marfil overflow-hidden snap-start">
      <div className="container">
        <motion.h2 
          className="section-title text-verde"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          ref={ref}
        >
          Sobre el Torneo
        </motion.h2>
        <motion.p 
          className="subtitle text-medianoche/80 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Grand Slam Padel es más que un torneo. Es una experiencia que busca posicionarse como el evento de padel más prestigioso del estado de Jalisco, conectando a jóvenes en un ambiente vibrante.
        </motion.p>

        {/* Tournament Benefits */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ 
            delay: 0.4, 
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: <Trophy className="w-8 h-8 text-beige" />,
              title: "Premios Exclusivos",
              description: "Más de $100,000 MXN en premios para los ganadores"
            },
            {
              icon: <Gift className="w-8 h-8 text-beige" />,
              title: "Kit de Bienvenida",
              description: "Kit exclusivo para todos los jugadores participantes"
            },
            {
              icon: <Target className="w-8 h-8 text-beige" />,
              title: "Formato Premium",
              description: "Canchas premium y garantía de 3 partidos mínimo"
            },
            {
              icon: <Star className="w-8 h-8 text-beige" />,
              title: "Reconocimientos",
              description: "Trofeos y visibilidad en redes sociales"
            },
            {
              icon: <Zap className="w-8 h-8 text-beige" />,
              title: "Experiencias Únicas",
              description: "Activaciones de marcas y experiencias exclusivas"
            },
            {
              icon: <Users className="w-8 h-8 text-beige" />,
              title: "Primera Edición",
              description: "Sé parte de un torneo que marcará historia"
            }
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-verde/10 backdrop-blur-sm p-6 rounded-lg border border-verde/20"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(37, 88, 79, 0.15)"
              }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-4">
                {benefit.icon}
                <h3 className="text-lg font-semibold text-verde">{benefit.title}</h3>
              </div>
              <p className="text-medianoche/80">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-verde mb-4">Nuestra Visión</h3>
              <p className="text-medianoche/80">
                Impulsar el crecimiento del padel en México, creando una comunidad dentro y fuera de la cancha.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="mr-3 text-beige flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">Jóvenes 18-26</h4>
                    <p className="text-sm text-medianoche/70">Competencia de Alto Nivel</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Calendar className="mr-3 text-beige flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">23-24 Agosto</h4>
                    <p className="text-sm text-medianoche/70">2025</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Award className="mr-3 text-beige flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">Ambiente Exclusivo</h4>
                    <p className="text-sm text-medianoche/70">Experiencias únicas</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="flex items-start"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="mr-3 text-beige flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold">La Red Club De Padel</h4>
                    <p className="text-sm text-medianoche/70">Zapopan, Jalisco</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="relative">
              <motion.img 
                src="https://imgur.com/5zPSIVL.png" 
                alt="Torneo de Padel" 
                className="rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-beige p-4 rounded-lg shadow-lg"
                initial={{ scale: 0 }}
                animate={{ scale: inView ? 1 : 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="text-xl font-semibold text-marfil">1ª Edición</div>
                <div className="text-sm text-marfil">Zapopan 2025</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-verde mb-8 text-center">Responsabilidad Social</h3>
          <motion.div 
            className="bg-verde/10 p-8 rounded-lg flex flex-col md:flex-row items-center gap-8"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex-shrink-0">
              <img 
                src="https://imgur.com/2d3jmxd.jpg" 
                alt="Logo Fundación Escalar"
                className="w-48 h-auto object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">Casa Hogar Escalar</h4>
              <p className="text-medianoche/80">
                En cada edición apoyamos a una institución. Este año nos enorgullece colaborar con Casa Hogar Escalar, ubicada en Colegio Del Aire, Paseo de la Noria 1500, Zapopan, Jalisco.
              </p>
            </div>
            <Heart className="text-beige flex-shrink-0 hidden md:block" size={48} />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-verde mb-8 text-center">Cobertura Mediática</h3>
          <p className="subtitle text-medianoche/80 max-w-3xl mx-auto mb-8">Tu marca tendrá presencia en medios de alto impacto.</p>
          <div className="bg-verde p-8 rounded-lg text-center">
            <div className="text-4xl font-bold text-marfil mb-2">+350,000</div>
            <div className="text-xl text-marfil/80">Impresiones o vistas esperadas</div>
            <div className="mt-4 text-marfil/60">
              A través de Instagram, TikTok, Players, Gente Bien y El Mural
            </div>
          </div>
        </motion.div>

        {/* Convocatoria Section */}
        <motion.div 
          className="mt-24"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <h3 className="text-2xl font-semibold text-verde mb-8 text-center">Convocatoria</h3>
          <div className="flex justify-center">
            <motion.a
              href="https://drive.google.com/file/d/1XGBhcbAaAE1hkMAFcCIpF1d9DPskbz_p/view?usp=sharinghttps://drive.google.com/file/d/1XGBhcbAaAE1hkMAFcCIpF1d9DPskbz_p/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-beige text-marfil rounded-lg hover:bg-verde transition-colors duration-300 transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Descargar Convocatoria
            </motion.a>
          </div>
        </motion.div>

        <div className="mt-16">
          <SponsorsSection />
        </div>

        <div className="mt-12">
          <ContactSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;