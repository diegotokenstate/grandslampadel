import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    sceneRef.current = new THREE.Scene();
    
    // Camera setup
    const aspectRatio = window.innerWidth / window.innerHeight;
    cameraRef.current = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
    cameraRef.current.position.z = 50;

    // Renderer setup
    rendererRef.current = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      canvas: containerRef.current.querySelector('canvas') || undefined
    });
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setClearColor(0x000000, 0);

    // Only append if canvas doesn't exist
    if (!containerRef.current.querySelector('canvas')) {
      containerRef.current.appendChild(rendererRef.current.domElement);
    }

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Create a more interesting distribution
      const radius = 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.2,
      sizeAttenuation: true,
      color: 0x25584f, // verde color
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    particlesRef.current = new THREE.Points(particlesGeometry, particlesMaterial);
    sceneRef.current.add(particlesRef.current);

    // Animation
    let animationFrameId: number;
    const animate = () => {
      if (!particlesRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

      particlesRef.current.rotation.x += 0.0005;
      particlesRef.current.rotation.y += 0.0005;

      rendererRef.current.render(sceneRef.current, cameraRef.current);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current) return;

      const width = window.innerWidth;
      const height = window.innerHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 bg-gradient-to-b from-verde/5 to-transparent"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default ThreeBackground;