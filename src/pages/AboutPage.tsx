import React from 'react';
import { Users, Target, Award, Star, Zap, Heart, Trophy, Flag } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ThreeBackground from '../components/ThreeBackground';

const AboutPage = () => {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-marfil to-verde/5">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
          style={{ 
            backgroundImage: 'url("https://imgur.com/K9kyHH0.jpg")',
            opacity: 0.6
          }}
        />
        <div className="absolute inset-0 bg-medianoche/60 z-0" />
        <ThreeBackground />

        <motion.div 
          className="container relative z-10"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center">
            <h1 className="text-6xl md:text-7xl font-heading font-bold text-marfil mb-6">
              Origen del Torneo
            </h1>
            <p className="text-xl md:text-2xl text-marfil/90 max-w-3xl mx-auto">
              Una iniciativa que transforma el padel
            </p>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <div 
        ref={contentRef}
        className="container py-24"
      >
        {/* Origin Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-verde/10 to-beige/10 p-12 rounded-2xl shadow-xl">
                <h2 className="text-4xl font-heading font-bold text-verde mb-8">La Historia Detrás del Torneo</h2>
                <div className="space-y-6 text-lg text-medianoche/80">
                  <p>
                    Grand Slam Padel nace de la pasión por el deporte y la visión de tres jóvenes emprendedores 
                    que identificaron la necesidad de elevar el nivel de los torneos de padel.
                  </p>
                  <p>
                    Inspirados por los grandes torneos internacionales y la creciente popularidad del padel 
                    entre los jóvenes, decidimos crear un evento que no solo destacara por su nivel competitivo, 
                    sino también por su capacidad de generar conexiones significativas.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex items-center justify-center p-12 bg-gradient-to-br from-verde/5 to-beige/5 rounded-2xl">
              <img 
                src="https://imgur.com/TGi4zvB.png" 
                alt="GRAND SLAM PADEL Logo"
                className="w-full max-w-[300px] h-auto object-contain"
              />
            </div>
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Award className="w-8 h-8" />,
                    title: "Excelencia",
                    description: "Buscamos la perfección en cada detalle",
                    bgColor: "bg-gradient-to-br from-verde/20 to-verde/5"
                  },
                  {
                    icon: <Star className="w-8 h-8" />,
                    title: "Innovación",
                    description: "Reimaginamos la experiencia del torneo",
                    bgColor: "bg-gradient-to-br from-beige/20 to-beige/5"
                  },
                  {
                    icon: <Heart className="w-8 h-8" />,
                    title: "Pasión",
                    description: "Ponemos el corazón en cada aspecto",
                    bgColor: "bg-gradient-to-br from-verde/15 to-beige/15"
                  },
                  {
                    icon: <Zap className="w-8 h-8" />,
                    title: "Dinamismo",
                    description: "Energía y movimiento constante",
                    bgColor: "bg-gradient-to-br from-beige/15 to-verde/15"
                  }
                ].map((value, index) => (
                  <motion.div
                    key={index}
                    className={`${value.bgColor} p-6 rounded-xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300 h-full flex flex-col items-center justify-center`}
                    whileHover={{ y: -5 }}
                  >
                    <div className="w-12 h-12 bg-marfil rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-verde">{value.icon}</div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-verde">{value.title}</h3>
                    <p className="text-sm text-medianoche/80">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <h2 className="text-4xl font-heading font-bold text-verde mb-8">Nuestros Valores</h2>
              <p className="text-lg text-medianoche/80 mb-8">
                En Grand Slam Padel, nuestros valores son el pilar fundamental que guía cada decisión y acción. 
                Buscamos la excelencia en cada detalle, innovamos constantemente para ofrecer experiencias únicas, 
                y ponemos toda nuestra pasión en crear un torneo excepcional.
              </p>
              <img 
                src="https://imgur.com/NC7U8MJ.jpg" 
                alt="Valores del Torneo"
                className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Committee Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-4xl font-heading font-bold text-verde mb-12 text-center">
            Comité Organizador
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alejandro Aceves Gómez",
                image: "https://imgur.com/iqkSb7t.jpg",
                bgColor: "bg-gradient-to-br from-verde/20 to-beige/5",
                objectPosition: "top"
              },
              {
                name: "Sebastián Salido Gómez-Ibarra",
                image: "https://imgur.com/f9smK0k.jpg",
                bgColor: "bg-gradient-to-br from-beige/20 to-verde/5",
                objectPosition: "top"
              },
              {
                name: "Carlos Manuel Saucedo De La Madrid",
                image: "https://imgur.com/BnaovUW.jpg",
                bgColor: "bg-gradient-to-br from-verde/15 to-beige/15",
                objectPosition: "center"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                className={`${member.bgColor} p-8 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300`}
                whileHover={{ y: -5 }}
              >
                <div className="w-32 h-32 rounded-full mb-6 mx-auto overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: member.objectPosition }}
                  />
                </div>
                <h3 className="text-lg font-semibold text-center text-verde">{member.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-heading font-bold text-verde mb-8">Nuestra Visión</h2>
              <div className="space-y-8">
                {[
                  {
                    icon: <Trophy className="w-8 h-8 text-verde" />,
                    title: "Excelencia Deportiva",
                    description: "Elevar el nivel competitivo del padel, creando un torneo de referencia nacional"
                  },
                  {
                    icon: <Flag className="w-8 h-8 text-verde" />,
                    title: "Impacto Social",
                    description: "Fomentar la comunidad y el networking a través del deporte, creando conexiones duraderas"
                  }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-verde/10 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-verde">{item.title}</h3>
                      <p className="text-medianoche/80">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://imgur.com/ZJUZiAq.jpg" 
                alt="Visión del Torneo"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Quote Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="md:w-1/2">
              <div className="bg-gradient-to-br from-verde/10 to-beige/10 p-12 rounded-2xl shadow-xl">
                <blockquote className="text-3xl font-heading italic text-verde mb-6">
                  "El inicio de una nueva era en el padel. Un torneo que conecta a jóvenes en un ambiente vibrante y exclusivo."
                </blockquote>
                <cite className="text-xl text-medianoche/80 font-body block text-right">
                  — GRAND SLAM PADEL
                </cite>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://imgur.com/35rmI5v.jpg" 
                alt="Ambiente del Torneo"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Sponsorship Section */}
        <motion.section 
          className="mb-32"
          initial="hidden"
          animate={contentInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="bg-gradient-to-br from-verde/10 to-beige/10 p-12 rounded-2xl shadow-xl border border-verde/20">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-heading font-bold text-verde mb-6 text-center">
                Haz Crecer Tu Marca Con Nosotros
              </h2>
              <p className="text-xl text-medianoche/80 mb-12 text-center">
                Únete como patrocinador oficial y forma parte de la nueva era del padel
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div 
                  className="bg-marfil/5 backdrop-blur-sm p-8 rounded-xl border border-verde/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-verde mb-4">Beneficios Premium</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Visibilidad destacada en el evento</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Promoción en redes sociales</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Menciones exclusivas durante el torneo</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Espacios publicitarios premium</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div 
                  className="bg-marfil/5 backdrop-blur-sm p-8 rounded-xl border border-verde/10"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold text-verde mb-4">Alcance Garantizado</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>+300 asistentes presenciales</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>+100k alcance en Instagram</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Cobertura en medios locales</span>
                    </li>
                    <li className="flex items-center gap-3 text-medianoche/80">
                      <Star className="w-5 h-5 text-verde flex-shrink-0" />
                      <span>Networking con marcas premium</span>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <div className="text-center">
                <p className="text-lg text-medianoche/80 mb-8">
                  Descubre cómo tu marca puede brillar en el evento de padel más exclusivo
                </p>
                <motion.a
                  href="https://wa.me/5213319426363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 text-lg font-medium text-marfil bg-verde rounded-lg hover:bg-beige transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contacta a Nuestro Equipo Comercial
                </motion.a>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;