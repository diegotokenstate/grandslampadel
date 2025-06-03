const Footer = () => {
  return (
    <footer className="bg-verde text-marfil">
      <div className="container py-12">
        <div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-oro">GRAND SLAM PADEL</h3>
            <p className="text-marfil/80 mb-4">
              El inicio de una nueva era en el padel. Un torneo que conecta a jóvenes en un ambiente vibrante y exclusivo.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-marfil/20 text-center text-marfil/60 text-sm">
          <p>
            © {new Date().getFullYear()} GRAND SLAM PADEL. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;