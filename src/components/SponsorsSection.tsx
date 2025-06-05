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
    name: "Hornet Padel Pro",
    image: "https://imgur.com/AudiMfN.jpg",
    link: "https://www.instagram.com/hornetpadelpro/"
  },
  {
    name: "Salsa del Impostor",
    image: "https://imgur.com/4d1GxAS.jpg",
    link: "https://www.instagram.com/salsadelimpostor/"
  },
  {
    name: "Mare Co",
    image: "https://imgur.com/Qg7NvBZ.jpg",
    link: "https://www.instagram.com/mare__co/"
  },
  {
    name: "Medusa Solar",
    image: "https://imgur.com/PKqlmEQ.jpg",
    link: "https://www.medusasolar.com/"
  },
  {
    name: "Sangrita del Cuñado",
    image: "https://imgur.com/vAl1KTL.jpg",
    link: "https://www.instagram.com/sangrita.del.cunado/"
  },
  {
    name: "Mural",
    image: "https://imgur.com/oY5DYSn.jpg",
    link: "https://www.mural.com.mx/"
  },
  {
    name: "Smirnoff",
    image: "https://imgur.com/v5rvPQP.jpg",
    link: "https://www.instagram.com/smirnoffmx/"
  },
  {
    name: "Come Verde",
    image: "https://imgur.com/yLDFa4k.jpg",
    link: "https://www.comeverde.mx/"
  },
  {
    name: "Premier Nuts",
    image: "https://imgur.com/ygE1EiV.jpg",
    link: "https://www.instagram.com/premier.nuts/"
  },
  {
    name: "Mint Dreams",
    image: "https://imgur.com/paY1HOI.jpg",
    link: "https://www.instagram.com/mintdreamsmx/"
  },
  {
    name: "Six GDL",
    image: "https://imgur.com/TJDIcf7.jpg",
    link: "https://www.instagram.com/sixgdl/"
  },
  {
    name: "Things Studio",
    image: "https://imgur.com/zP7f9m4.jpg",
    link: "https://www.instagram.com/thingsstudio_/"
  },
  {
    name: "Das Avena",
    image: "https://imgur.com/KTzgBs1.jpg",
    link: "https://dasavena.com/"
  },
  {
    name: "La Mar Restaurante",
    image: "https://imgur.com/p4qhEhc.jpg",
    link: "https://www.instagram.com/lamarrestaurante/"
  },
  {
    name: "Birkenstock",
    image: "https://imgur.com/vx6TqhD.jpg",
    link: "https://www.instagram.com/birkenstockmexico/"
  },
  {
    name: "Station 24 Fitness",
    image: "https://imgur.com/Y7Yoc1o.jpg",
    link: "https://www.instagram.com/station24fitness/"
  },
  {
    name: "Betterware",
    image: "https://imgur.com/ZFHJVOJ.jpg",
    link: "https://www.instagram.com/betterwaremexico/"
  },
  {
    name: "Jägermeister",
    image: "https://imgur.com/VjqZkUP.jpg",
    link: "https://www.instagram.com/jagermeistermx/"
  },
  {
    name: "Biokinesic",
    image: "https://imgur.com/OSSuOdU.jpg",
    link: "https://www.instagram.com/biokinesic/"
  },
  {
    name: "Present Adaptógenos",
    image: "https://imgur.com/nZzJyYy.jpg",
    link: "https://www.instagram.com/present.adaptogenos/"
  },
  {
    name: "Skarch",
    image: "https://imgur.com/lvxHkHB.jpg",
    link: "https://www.instagram.com/skarchmexico/"
  },
  {
    name: "Red Cola",
    image: "https://imgur.com/MPA3x5d.jpg",
    link: "https://www.instagram.com/redcolamx/"
  },
  {
    name: "Fornino",
    image: "https://imgur.com/Nuaalnf.jpg",
    link: "https://www.instagram.com/fornino_gdl/"
  },
  {
    name: "Cabotina",
    image: "https://imgur.com/bpIm7zq.jpg",
    link: "https://www.instagram.com/cabotina_gdl/"
  },
  {
    name: "Casa San Matías",
    image: "https://imgur.com/nmJEwEv.jpg",
    link: "https://www.instagram.com/casasanmatiasoficial/"
  },
  {
    name: "Electrolit",
    image: "https://imgur.com/w9Iy2Ju.jpg",
    link: "https://www.instagram.com/electrolit/"
  },
  {
    name: "Aleta Azul",
    image: "https://imgur.com/xtmSY1t.jpg",
    link: "https://www.instagram.com/aletazulcompany/"
  },
  {
    name: "Palmar Spritz",
    image: "https://imgur.com/SY2GplZ.jpg",
    link: "https://www.instagram.com/palmar_spritz/"
  },
  {
    name: "Wu Nutrition",
    image: "https://imgur.com/lGviTeM.jpg",
    link: "https://wunutrition.com/"
  },
  {
    name: "Atajo Outdoors",
    image: "https://imgur.com/rCo7Vxe.jpg",
    link: "https://www.instagram.com/atajooutdoors/"
  },
   {
    name: "Deyun Pharma",
    image: "https://imgur.com/6rm2xR7.jpg",
    link: "https://www.instagram.com/deyunpharmamx/"
  }
  {
    name: "The Fulen Club",
    image: "https://imgur.com/8BGKSkR.jpg",
    link: "https://www.instagram.com/thefulenclub/"
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