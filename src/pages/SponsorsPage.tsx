import { motion } from 'framer-motion';

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
    name: "La Historica Jersey Club",
    image: "https://imgur.com/SxVflPo.jpg",
    link: "https://www.instagram.com/lahistoricajerseyclub/?hl=es-la"
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
     name: "Seagram's Selzer",
    image: "https://imgur.com/YfnIPSJ.jpg",
    link: "https://seagramshardseltzer.mx/inicio/"
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
    name: "The Fulen Club",
    image: "https://imgur.com/8BGKSkR.jpg",
    link: "https://www.instagram.com/thefulenclub/"
  }
];

const SponsorsPage = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="min-h-screen bg-marfil">
      <div className="container py-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-verde mb-4">Nuestros Patrocinadores</h1>
          <p className="text-xl text-medianoche/80 max-w-3xl mx-auto">
            Nos honra contar con el respaldo de marcas líderes que hacen posible esta edición de Grand Slam Padel.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform-gpu hover:scale-105 transition-transform duration-300"
            >
              <a
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-8"
                aria-label={`Visitar sitio web de ${sponsor.name}`}
              >
                <div className="aspect-[3/2] relative mb-4">
                  <motion.img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <h3 className="text-xl font-semibold text-verde text-center">{sponsor.name}</h3>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
};

export default SponsorsPage;