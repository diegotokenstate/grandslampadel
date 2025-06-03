import { useState, useCallback } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import ThreeBackground from './ThreeBackground';

const MAX_RETRIES = 3;
const RETRY_DELAY = 2000; // 2 seconds

const SplineBackground = () => {
  const [splineError, setSplineError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const handleSplineError = useCallback(() => {
    console.error(`Failed to load Spline scene (attempt ${retryCount + 1}/${MAX_RETRIES})`);
    
    if (retryCount < MAX_RETRIES) {
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        setLoading(true);
      }, RETRY_DELAY);
    } else {
      setSplineError(true);
      setLoading(false);
    }
  }, [retryCount]);

  const handleSplineLoad = () => {
    setLoading(false);
    setSplineError(false);
  };

  return (
    <motion.div 
      className="fixed inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-verde/20">
          <div className="text-verde text-lg">
            {retryCount > 0 ? `Reintentando (${retryCount}/${MAX_RETRIES})...` : 'Cargando...'}
          </div>
        </div>
      )}
      
      {splineError ? (
        <ThreeBackground />
      ) : (
        <Spline 
          scene="https://prod.spline.design/0gSwAL6vsixbqpuRgc555lOY/scene.splinecode"
          onError={handleSplineError}
          onLoad={handleSplineLoad}
          className="w-full h-full"
        />
      )}
    </motion.div>
  );
}

export default SplineBackground;