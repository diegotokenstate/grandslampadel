import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <div id="contact" className="bg-marfil">
      <div className="container">
        <h2 className="section-title text-verde">Contacto</h2>
        <p className="subtitle text-medianoche/80 max-w-3xl mx-auto mb-16">
          ¿Tienes preguntas sobre el torneo? Nuestro equipo está aquí para ayudarte
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-verde rounded-lg overflow-hidden h-full">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.9729257001322!2d-103.45144972600073!3d20.711323998608126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428af2c8e6f66f7%3A0x8870669e83d224bb!2sAv.%205%20de%20Mayo%20434%2C%20San%20Juan%20de%20Ocot%C3%A1n%2C%2045019%20Zapopan%2C%20Jal.!5e0!3m2!1ses!2smx!4v1748979139078!5m2!1ses!2smx"
                width="100%" 
                height="100%" 
                style={{ border: 0, minHeight: "400px" }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del Torneo"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="bg-verde p-8 rounded-lg text-marfil h-full">
              <h3 className="text-2xl font-semibold mb-6 text-oro">Ponte en Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="mr-3 text-oro flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Sede del Torneo</h4>
                    <p className="text-marfil/80">
                      La Red Club De Padel<br />
                      Av. 5 de Mayo 434<br />
                      Zapopan, Jalisco
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="mr-3 text-oro flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Instagram</h4>
                    <p className="text-marfil/80 text-sm">
                      <a href="https://instagram.com/grandslampadelofficial" className="hover:text-oro transition-colors">
                        @grandslampadelofficial
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 text-oro flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">WhatsApp / Teléfono</h4>
                    <p className="text-marfil/80">
                      <a
                        href="https://wa.me/5213319426363"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-oro transition-colors cursor-pointer select-all inline-block"
                      >
                        33 19 42 63 63
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3 text-oro flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1">Fechas del Torneo</h4>
                    <p className="text-marfil/80">
                      23-24 de Agosto, 2025<br />
                      9:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;