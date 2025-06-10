import { useState } from 'react';
import { CheckCircle2, Timer, Star, Zap, X, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../lib/supabase';
import { registrationSchema, type RegistrationFormData } from '../lib/validations';

const RegisterSection = () => {
  const [formData, setFormData] = useState({
    player1Name: '',
    player2Name: '',
    email: '',
    player1Age: '',
    player2Age: '',
    captainWhatsapp: '',
    teamName: '',
    category: '',
    player1Gender: '',
    player1ShirtSize: '',
    player2Gender: '',
    player2ShirtSize: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    
    try {
      registrationSchema.parse(formData);
      setShowTerms(true);
    } catch (err) {
      if (err instanceof Error) {
        console.error('Validation error:', err);
        setError(err.message);
      }
    }
  };

  const handleFinalSubmit = async () => {
    if (!termsAccepted || isSubmitting) {
      return;
    }

    setError(null);
    setIsSubmitting(true);
    
    try {
      const validatedData = registrationSchema.parse(formData);
      
      // Format shirt sizes according to gender
      const player1_shirt_size = `${validatedData.player1Gender === 'masculino' ? 'Masc' : 'Fem'}-${validatedData.player1ShirtSize}`;
      const player2_shirt_size = `${validatedData.player2Gender === 'masculino' ? 'Masc' : 'Fem'}-${validatedData.player2ShirtSize}`;

      const { data, error: functionError } = await supabase.functions.invoke('sync-registration', {
        body: {
          player1_name: validatedData.player1Name,
          player2_name: validatedData.player2Name,
          email: validatedData.email,
          player1_age: validatedData.player1Age,
          player2_age: validatedData.player2Age,
          captain_whatsapp: validatedData.captainWhatsapp,
          team_name: validatedData.teamName || null,
          category: validatedData.category,
          status: 'pending',
          player1_shirt_size,
          player2_shirt_size
        }
      });

      if (functionError) {
        console.error('Edge Function error:', functionError);
        throw new Error(functionError.message || 'Error al procesar la inscripción');
      }

      if (data?.error) {
        console.error('Registration error:', data.error);
        if (data.details) {
          const errorMessages = data.details
            .map((err: { field: string, message: string }) => err.message)
            .join(', ');
          throw new Error(errorMessages);
        }
        throw new Error(data.error);
      }

      setShowTerms(false);
      setFormSubmitted(true);
    } catch (error) {
      console.error('Final submission error:', error);
      setError(error instanceof Error ? error.message : 'Error al procesar la inscripción');
    } finally {
      setIsSubmitting(false);
    }
  };

  const categories = [
    { value: '2da-hombres', label: '2da Hombres' },
    { value: '3ra-hombres', label: '3ra Hombres' },
    { value: '4ta-hombres', label: '4ta Hombres' },
    { value: '5ta-hombres', label: '5ta Hombres' },
    { value: 'a-mujeres', label: 'A Mujeres' },
    { value: 'b-mujeres', label: 'B Mujeres' }
  ];

  const shirtSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  
  return (
    <section id="register" className="section relative overflow-hidden py-24">
      <div 
        className="absolute inset-0 bg-no-repeat opacity-85"
        style={{ 
          backgroundImage: 'url("https://imgur.com/c7QH0c9.jpg")',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          filter: 'brightness(0.85)'
        }}
      />
      
      <div className="container relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="section-title text-marfil mb-8">Inscríbete Ahora</h2>
        <p className="subtitle text-marfil/90 max-w-3xl mx-auto mb-16">
          Asegura tu lugar en el torneo y prepárate para una experiencia inolvidable de padel
        </p>

        {/* Registration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div 
            className="bg-verde/30 backdrop-blur-sm p-6 rounded-xl border border-verde/40 shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-verde text-marfil px-3 py-1 text-sm">
              Early Access
            </div>
            <div className="flex items-start gap-4">
              <Timer className="text-marfil flex-shrink-0" size={24} />
              <div>
                <div className="text-xl font-semibold mb-2 text-marfil">First Serve</div>
                <div className="text-3xl font-bold text-marfil mb-2">$1,300 MXN</div>
                <div className="text-sm text-marfil/80">3-16 de junio</div>
                <p className="mt-2 text-marfil/90 text-sm">
                  Precio preferencial. Acceso exclusivo para quienes se inscriben primero.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-verde/30 backdrop-blur-sm p-6 rounded-xl border border-verde/40 shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-beige text-marfil px-3 py-1 text-sm">
              Standard
            </div>
            <div className="flex items-start gap-4">
              <Star className="text-marfil flex-shrink-0" size={24} />
              <div>
                <div className="text-xl font-semibold mb-2 text-marfil">Match Point</div>
                <div className="text-3xl font-bold text-marfil mb-2">$1,400 MXN</div>
                <div className="text-sm text-marfil/80">17-30 de junio</div>
                <p className="mt-2 text-marfil/90 text-sm">
                  Fase regular. La inscripción sigue abierta mientras se completan los cuadros.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-verde/30 backdrop-blur-sm p-6 rounded-xl border border-verde/40 shadow-xl relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute top-0 right-0 bg-oro text-marfil px-3 py-1 text-sm">
              Last Call
            </div>
            <div className="flex items-start gap-4">
              <Zap className="text-marfil flex-shrink-0" size={24} />
              <div>
                <div className="text-xl font-semibold mb-2 text-marfil">Final Rush</div>
                <div className="text-3xl font-bold text-marfil mb-2">$1,500 MXN</div>
                <div className="text-sm text-marfil/80">1-8 de julio</div>
                <p className="mt-2 text-marfil/90 text-sm">
                  Últimos lugares disponibles. Última oportunidad para ingresar al torneo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center text-marfil/90 space-y-3 mb-16">
          <p>Precios por jugador. Incluye acceso completo a todas las actividades del torneo.</p>
          <p className="text-sm font-medium">Cierre oficial de inscripciones: lunes 8 de julio</p>
          <p className="text-sm text-marfil/80">
            El cierre de inscripciones el 8 de julio es necesario para garantizar la producción y entrega puntual del uniforme oficial (camiseta y gorra) y todos los materiales del torneo. Queremos brindarte una experiencia de calidad y sin contratiempos.
          </p>
        </div>
        
        {/* Form and Why Participate Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Why Participate Section */}
          <div className="order-2 lg:order-1">
            <div className="bg-verde/30 backdrop-blur-sm p-8 rounded-xl border border-verde/40 shadow-xl">
              <h3 className="text-2xl font-semibold text-marfil mb-6">¿Por qué Participar?</h3>
              <ul className="space-y-6">
                {[
                  'Pistas premium y garantía de 3 partidos mínimo',
                  'Más de $100,000 MXN en premios para los ganadores',
                  'Kit exclusivo para todos los jugadores participantes',
                  'Conecta con entusiastas y profesionales del padel',
                  'Gana premios y obtén reconocimiento',
                  'Activaciones de marcas y experiencias exclusivas',
                  'Disfruta de un fin de semana lleno de padel y entretenimiento'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="mr-4 text-marfil flex-shrink-0 mt-1" size={20} />
                    <span className="text-marfil/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Registration Form */}
          <div className="order-1 lg:order-2">
            <div className="bg-verde/30 backdrop-blur-sm p-8 rounded-xl border border-verde/40 shadow-xl">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle2 className="mx-auto mb-6 text-marfil" size={64} />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    <h3 className="text-2xl font-semibold mb-6 text-marfil">¡Inscripción Exitosa!</h3>
                    <div className="space-y-4 text-marfil/90">
                      <p>
                        Tu inscripción al Grand Slam Padel ha sido registrada correctamente.
                      </p>
                      <p>
                        En las próximas 24 horas recibirás un correo electrónico con las instrucciones para completar el pago y asegurar tu lugar en el torneo.
                      </p>
                      <p className="mt-8">
                        Si tienes alguna duda, puedes contactarnos a través de:
                      </p>
                      <div className="flex flex-col items-center gap-3 text-marfil">
                        <a 
                          href="https://instagram.com/grandslampadelofficial" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-beige transition-colors"
                        >
                          @grandslampadelofficial
                        </a>
                        <a 
                          href="tel:+523319426363" 
                          className="hover:text-beige transition-colors"
                        >
                          33 1942 6363
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Player 1 Section */}
                    <div className="md:col-span-2 bg-verde/10 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-marfil mb-4">Jugador 1</h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="player1Name" className="block mb-2 text-sm font-medium text-marfil">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            id="player1Name"
                            name="player1Name"
                            value={formData.player1Name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="Nombre del jugador 1"
                          />
                        </div>

                        <div>
                          <label htmlFor="player1Age" className="block mb-2 text-sm font-medium text-marfil">
                            Edad
                          </label>
                          <input
                            type="number"
                            id="player1Age"
                            name="player1Age"
                            value={formData.player1Age}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="Edad"
                          />
                        </div>

                        <div>
                          <label htmlFor="player1Gender" className="block mb-2 text-sm font-medium text-marfil">
                            Género
                          </label>
                          <select
                            id="player1Gender"
                            name="player1Gender"
                            value={formData.player1Gender}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil focus:border-verde focus:ring-2 focus:ring-verde/50"
                          >
                            <option value="" className="bg-verde text-marfil">Selecciona el género</option>
                            <option value="masculino" className="bg-verde text-marfil">Masculino</option>
                            <option value="femenino" className="bg-verde text-marfil">Femenino</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="player1ShirtSize" className="block mb-2 text-sm font-medium text-marfil">
                            Talla de Camiseta
                          </label>
                          <select
                            id="player1ShirtSize"
                            name="player1ShirtSize"
                            value={formData.player1ShirtSize}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil focus:border-verde focus:ring-2 focus:ring-verde/50"
                          >
                            <option value="" className="bg-verde text-marfil">Selecciona la talla</option>
                            {shirtSizes.map(size => (
                              <option key={size} value={size} className="bg-verde text-marfil">
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Player 2 Section */}
                    <div className="md:col-span-2 bg-verde/10 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-marfil mb-4">Jugador 2</h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="player2Name" className="block mb-2 text-sm font-medium text-marfil">
                            Nombre Completo
                          </label>
                          <input
                            type="text"
                            id="player2Name"
                            name="player2Name"
                            value={formData.player2Name}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="Nombre del jugador 2"
                          />
                        </div>

                        <div>
                          <label htmlFor="player2Age" className="block mb-2 text-sm font-medium text-marfil">
                            Edad
                          </label>
                          <input
                            type="number"
                            id="player2Age"
                            name="player2Age"
                            value={formData.player2Age}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="Edad"
                          />
                        </div>

                        <div>
                          <label htmlFor="player2Gender" className="block mb-2 text-sm font-medium text-marfil">
                            Género
                          </label>
                          <select
                            id="player2Gender"
                            name="player2Gender"
                            value={formData.player2Gender}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil focus:border-verde focus:ring-2 focus:ring-verde/50"
                          >
                            <option value="" className="bg-verde text-marfil">Selecciona el género</option>
                            <option value="masculino" className="bg-verde text-marfil">Masculino</option>
                            <option value="femenino" className="bg-verde text-marfil">Femenino</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="player2ShirtSize" className="block mb-2 text-sm font-medium text-marfil">
                            Talla de Camiseta
                          </label>
                          <select
                            id="player2ShirtSize"
                            name="player2ShirtSize"
                            value={formData.player2ShirtSize}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil focus:border-verde focus:ring-2 focus:ring-verde/50"
                          >
                            <option value="" className="bg-verde text-marfil">Selecciona la talla</option>
                            {shirtSizes.map(size => (
                              <option key={size} value={size} className="bg-verde text-marfil">
                                {size}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Team Information */}
                    <div className="md:col-span-2 bg-verde/10 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-marfil mb-4">Información del Equipo</h4>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-marfil">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="email@ejemplo.com"
                          />
                        </div>

                        <div>
                          <label htmlFor="captainWhatsapp" className="block mb-2 text-sm font-medium text-marfil">
                            WhatsApp del Capitán
                          </label>
                          <input
                            type="tel"
                            id="captainWhatsapp"
                            name="captainWhatsapp"
                            value={formData.captainWhatsapp}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="+52 33 1234 5678"
                          />
                        </div>

                        <div>
                          <label htmlFor="category" className="block mb-2 text-sm font-medium text-marfil">
                            Categoría
                          </label>
                          <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            required
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil focus:border-verde focus:ring-2 focus:ring-verde/50"
                          >
                            <option value="" className="bg-verde text-marfil">Selecciona una categoría</option>
                            {categories.map(category => (
                              <option key={category.value} value={category.value} className="bg-verde text-marfil">
                                {category.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <label htmlFor="teamName" className="block mb-2 text-sm font-medium text-marfil">
                            Nombre del Equipo (Opcional)
                          </label>
                          <input
                            type="text"
                            id="teamName"
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            className="w-full p-4 bg-verde/20 border border-verde/40 rounded-lg text-marfil placeholder-marfil/60 focus:border-verde focus:ring-2 focus:ring-verde/50"
                            placeholder="Nombre de tu equipo (opcional)"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full p-4 mt-6 text-lg font-semibold bg-beige text-marfil rounded-lg hover:bg-verde transition-colors duration-300 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Enviando...' : 'Enviar Inscripción'}
                  </button>

                  {error && (
                    <div className="mt-6 p-4 bg-red-900/20 border border-red-500/30 rounded-lg flex items-start gap-3">
                      <AlertCircle className="text-red-400 flex-shrink-0" size={20} />
                      <p className="text-red-200">{error}</p>
                    </div>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <AnimatePresence>
        {showTerms && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-medianoche/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-marfil rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative"
            >
              <div className="p-6 border-b border-medianoche/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-verde">TÉRMINOS Y CONDICIONES</h3>
                  <button
                    onClick={() => setShowTerms(false)}
                    className="text-medianoche/60 hover:text-medianoche transition-colors"
                  >
                    <span className="sr-only">Cerrar</span>
                    <X size={24} />
                  </button>
                </div>
                <p className="text-sm text-medianoche/70 mt-2">
                  Grand Slam Padel 2025 – I Edición
                </p>
              </div>

              <div className="p-6 overflow-y-auto max-h-[60vh]">
                {error && (
                  <div className="mb-6 p-4 bg-red-100 border border-red-300 rounded-lg flex items-start gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0\" size={20} />
                    <p className="text-red-700">{error}</p>
                  </div>
                )}

                <div className="prose prose-sm max-w-none">
                  <p className="text-medianoche/80 italic mb-6">
                    Al completar su inscripción, los jugadores aceptan los siguientes términos y condiciones establecidos por el comité organizador del Grand Slam Padel 2025. El desconocimiento de este reglamento no exime de su cumplimiento.
                  </p>

                  <h4 className="text-lg font-semibold mb-4">1. INSCRIPCIÓN</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>La inscripción se realiza exclusivamente a través del formulario oficial del torneo.</li>
                    <li>Completar el formulario y realizar el pago no garantiza participación automática.</li>
                    <li>Todas las inscripciones serán revisadas y validadas por el comité organizador.</li>
                    <li>El comité se reserva el derecho de aceptar, rechazar o reasignar parejas a una categoría diferente a la solicitada, si considera que no corresponde al nivel competitivo real.</li>
                    <li>La inscripción se considera confirmada únicamente al recibir el folio de aceptación oficial.</li>
                    <li>Los pagos no son reembolsables, salvo cancelación oficial del evento por parte de la organización.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">2. FORMATO Y REGLAMENTO DE JUEGO</h4>
                  <p className="font-semibold mb-2">Fase de grupos</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Partidos a 2 de 3 sets</li>
                    <li>Sin ventajas (punto de oro)</li>
                    <li>En caso de empate 1-1 en sets, se define con super tie-break a 10 puntos</li>
                    <li>Duración máxima: 1 hora por partido</li>
                  </ul>

                  <p className="font-semibold mb-2">Fase final (eliminación directa)</p>
                  <ul className="list-disc pl-5 mb-4 space-y-2">
                    <li>Partidos a 2 de 3 sets completos</li>
                    <li>Sin ventajas (punto de oro)</li>
                    <li>En caso de empate 1-1, se juega un tercer set completo</li>
                    <li>Duración máxima: 1 hora y 30 minutos por partido</li>
                  </ul>

                  <p className="text-sm text-medianoche/80 mb-6">
                    Todos los partidos se rigen por el reglamento oficial de la International Padel Federation (FIP) y el circuito Premier Padel, salvo las adaptaciones mencionadas anteriormente.
                  </p>

                  <h4 className="text-lg font-semibold mb-4">3. PUNTUALIDAD Y ASISTENCIA</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Las parejas deberán presentarse mínimo 15 minutos antes del horario asignado para cada partido.</li>
                    <li>Se otorgará una tolerancia máxima de 10 minutos. En caso de inasistencia o retraso, se aplicará walkover (pérdida automática del partido).</li>
                    <li>Una vez iniciado el torneo, no se permiten cambios de pareja ni reprogramaciones por causas personales.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">4. CONDUCTA Y DEPORTIVIDAD</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Todos los participantes deben mantener un comportamiento respetuoso y deportivo durante todo el evento.</li>
                    <li>Está prohibido el uso de lenguaje ofensivo, actitudes antideportivas o cualquier tipo de agresión verbal o física.</li>
                    <li>Cualquier jugador que incurra en una conducta inapropiada, dentro o fuera de la cancha, podrá ser sancionado o expulsado del torneo sin derecho a reembolso.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">5. USO DE INSTALACIONES</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>El torneo se llevará a cabo en un club privado que presta sus instalaciones para el evento.</li>
                    <li>Se espera de todos los asistentes un comportamiento respetuoso hacia el lugar, el personal y las normas del club.</li>
                    <li>No está permitido el ingreso con alimentos o bebidas externos al evento.</li>
                    <li>El uso indebido de las instalaciones o comportamientos inapropiados será causa de expulsión inmediata sin reembolso.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">6. CÓDIGO DE VESTIMENTA</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Todos los jugadores deberán usar la camiseta y gorra oficiales del Grand Slam Padel durante ambos días del torneo.</li>
                    <li>Estas prendas serán entregadas por la organización como parte del kit de bienvenida, y su uso es obligatorio en todos los partidos.</li>
                    <li>No está permitido competir con uniformes distintos al oficial. Las parejas que no porten la camiseta y gorra proporcionadas no podrán disputar su partido bajo ninguna circunstancia.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">7. CLIMA Y CONTINGENCIAS</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Todas las canchas del evento son techadas, por lo que el torneo continuará en caso de lluvia.</li>
                    <li>En caso de cualquier situación extraordinaria o de fuerza mayor (fallas eléctricas, eventos de seguridad, problemas estructurales, etc.), la organización podrá reprogramar partidos, ajustar el formato o modificar la sede si es necesario.</li>
                    <li>En dichos casos no aplicará ningún reembolso.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">8. RESPONSABILIDAD</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Todos los jugadores participan bajo su propio riesgo.</li>
                    <li>El torneo no se hace responsable por lesiones, accidentes, robos o pérdidas ocurridas durante el evento.</li>
                    <li>Se recomienda contar con seguro médico personal vigente.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">9. DERECHOS DE IMAGEN</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Al inscribirse, los jugadores autorizan el uso de su imagen en fotografías, videos y materiales audiovisuales generados durante el torneo, con fines promocionales del evento o futuras ediciones.</li>
                    <li>Este contenido podrá ser utilizado en redes sociales, sitio web, medios impresos y digitales vinculados a Grand Slam Padel.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">10. PROTOCOLO DE QUEJAS Y ACLARACIONES</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Cualquier queja, reclamo o aclaración deberá realizarse por escrito directamente al comité organizador, dentro de las 12 horas posteriores al partido correspondiente.</li>
                    <li>No se aceptarán quejas por redes sociales ni medios no oficiales.</li>
                    <li>Las decisiones del comité son definitivas e inapelables.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">11. MODIFICACIONES Y CAMBIOS</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>El comité organizador se reserva el derecho de modificar horarios, categorías, sistema de competencia o condiciones generales si las circunstancias lo exigen.</li>
                    <li>Todo cambio será comunicado oportunamente por los canales oficiales.</li>
                  </ul>

                  <h4 className="text-lg font-semibold mb-4">12. COMUNICACIÓN OFICIAL</h4>
                  <ul className="list-disc pl-5 mb-6 space-y-2">
                    <li>Toda la información del torneo será enviada únicamente al capitán de cada pareja.</li>
                    <li>Canales oficiales de contacto:</li>
                    <ul className="list-none pl-5 space-y-1">
                      <li>Instagram: @grandslampadelofficial</li>
                      <li>WhatsApp: 33 1942 6363</li>
                    </ul>
                  </ul>
                </div>
              </div>

              <div className="p-6 border-t border-medianoche/10 bg-marfil sticky bottom-0">
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="w-4 h-4 rounded border-verde text-verde focus:ring-verde"
                    />
                    <span className="text-sm text-medianoche">
                      He leído y acepto los términos y condiciones
                    </span>
                  </label>
                  
                  <button
                    onClick={handleFinalSubmit}
                    disabled={!termsAccepted || isSubmitting}
                    className={`px-6 py-3 rounded-lg text-marfil transition-colors ${
                      termsAccepted && !isSubmitting ? 'bg-verde hover:bg-beige' : 'bg-medianoche/20 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? 'Procesando...' : 'Aceptar y Continuar'}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default RegisterSection;