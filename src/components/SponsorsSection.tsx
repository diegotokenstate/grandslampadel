import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SponsorCarousel from './SponsorCarousel';

interface Sponsor {
  name: string;
  image: string;
  link: string;
}

const sponsors: Sponsor[] = [
  {
    name: "Birkenstock",
    image: "https://imgur.com/vx6TqhD.jpg",
    link: "https://www.instagram.com/birkenstockmexico/"
  },
  {
    name: "Electrolit",
    image: "https://imgur.com/w9Iy2Ju.jpg",
    link: "https://www.instagram.com/electrolit/"
  },
  {
    name: "Atajo Outdoors",
    image: "https://imgur.com/rCo7Vxe.jpg",
    link: "https://www.instagram.com/atajooutdoors/"
  },
  {
    name: "Red Cola",
    image: "https://imgur.com/MPA3x5d.jpg",
    link: "https://www.instagram.com/redcolamx/"
  },
  {
    name: "Betterware",
    image: "https://imgur.com/ZFHJVOJ.jpg",
    link: "https://www.instagram.com/betterwaremexico/"
  },
  {
    name: "Wu Nutrition",
    image: "https://imgur.com/lGviTeM.jpg",
    link: "https://wunutrition.com/"
  },
  {
    name: "Medusa Solar",
    image: "https://imgur.com/PKqlmEQ.jpg",
    link: "https://www.medusasolar.com/"
  },
  {
    name: "Skarch",
    image: "https://imgur.com/lvxHkHB.jpg",
    link: "https://www.instagram.com/skarchmexico/"
  },
  {
    name: "Premier Nuts",
    image: "https://imgur.com/KwFWu98.jpg",
    link: "https://www.instagram.com/premier.nuts/"
  },
  {
    name: "Come Verde",
    image: "https://imgur.com/yLDFa4k.jpg",
    link: "https://www.comeverde.mx/"
  },
  {
    name: "Omigoto",
    image: "https://imgur.com/yjSCL5S.jpg",
    link: "https://www.instagram.com/omigotomx/"
  }
];

const SponsorsSection = () => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-marfil overflow-hidden" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-verde mb-4">Patrocinadores Destacados</h2>
          <p className="text-medianoche/80">Orgullosos de contar con el apoyo de marcas líderes en el mundo del padel</p>
        </motion.div>

        <SponsorCarousel sponsors={sponsors} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.button
            onClick={() => navigate('/patrocinadores')}
            className="inline-flex items-center px-8 py-4 text-base font-semibold text-verde border-2 border-verde rounded-lg hover:bg-verde hover:text-marfil transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-verde focus:ring-offset-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Ver todos los patrocinadores
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;