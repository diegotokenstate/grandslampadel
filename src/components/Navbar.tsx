import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Acerca de', href: '/acerca-de' },
    { name: 'Patrocinadores', href: '/patrocinadores' },
    { name: 'Inscripción', href: '/registro' },
    { name: 'Contacto', href: 'https://wa.me/5213319426363', external: true }
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4">
      <nav className="max-w-7xl mx-auto mt-4 bg-verde/95 backdrop-blur-sm rounded-2xl shadow-lg">
        <div className="container flex items-center justify-between h-2">
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold font-heading text-marfil">
              GRAND SLAM PADEL
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-center space-x-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-marfil hover:text-beige transition-colors duration-300"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm font-medium text-marfil hover:text-beige transition-colors duration-300"
                >
                  {link.name}
                </Link>
              )
            ))}
          </div>

          <button 
            className="md:hidden text-marfil"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-verde/95 backdrop-blur-sm rounded-b-2xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-3 py-2 text-base font-medium text-marfil hover:text-beige transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-3 py-2 text-base font-medium text-marfil hover:text-beige transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;