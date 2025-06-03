import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Sponsor {
  name: string;
  image: string;
  link: string;
}

interface SponsorCarouselProps {
  sponsors: Sponsor[];
}

const SponsorCarousel: React.FC<SponsorCarouselProps> = ({ sponsors }) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const carouselVariants = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear"
        }
      }
    }
  };

  return (
    <div className="relative overflow-hidden bg-marfil py-12">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-marfil to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-marfil to-transparent z-10" />
      
      <div className="overflow-hidden">
        <motion.div
          ref={carouselRef}
          variants={carouselVariants}
          animate="animate"
          className="flex items-center gap-12 py-8"
          whileHover={{ animationPlayState: 'paused' }}
        >
          {[...sponsors, ...sponsors].map((sponsor, index) => (
            <motion.a
              key={`${sponsor.name}-${index}`}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 w-48 h-48 bg-white rounded-lg shadow-md p-6 flex items-center justify-center transform-gpu hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              aria-label={`Visitar sitio web de ${sponsor.name}`}
            >
              <motion.img
                src={sponsor.image}
                alt={sponsor.name}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SponsorCarousel;