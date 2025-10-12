import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from "../../config/site";
import { prefixPath } from "../../lib/prefixPath";
import { Menu, X } from "lucide-react";
import { RiInstagramLine, RiFacebookCircleLine, RiWhatsappLine } from "react-icons/ri";
import { Button } from "../../components/ui/button";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const activePath = location.pathname;
  const logoSrc = prefixPath("/img/logo-horizontal.png");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-2xl flex items-center gap-2 hover:text-[#C79F7D] transition-colors"
          >
            <img
              src={logoSrc}
              alt="Logo"
              
              height="auto"
            />
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link text-base font-medium ${
                  activePath === item.href ? 'active' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            {[
              { Icon: RiInstagramLine, url: "https://www.instagram.com/glowesteticaavanzada/", name: "Instagram" },
              { Icon: RiFacebookCircleLine, url: "https://www.facebook.com/glowesteticaavanzada", name: "Facebook" },
              { Icon: RiWhatsappLine, url: "https://wa.me/34601995234", name: "WhatsApp" }
            ].map(({ Icon, url, name }) => (
              <a
                key={name}
                href={url}
                className="text-foreground/80 hover:text-[#C79F7D] transition-colors"
                aria-label={name}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
            <Button
              variant="outline"
              className="ml-4 hidden md:flex hover:text-[#C79F7D] transition-colors"
              onClick={() => {
                navigate("/contacto");
              }}
            >
              Reservar cita
            </Button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4">
            <div className="flex flex-col space-y-4 px-4">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-lg font-medium ${
                    activePath === item.href ? 'text-[#C79F7D]' : 'text-[#4A3F35]'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-4">
                {[
                  { Icon: RiInstagramLine, url: "https://www.instagram.com/glowesteticaavanzada/", name: "Instagram" },
                  { Icon: RiFacebookCircleLine, url: "https://www.facebook.com/glowesteticaavanzada", name: "Facebook" },
                  { Icon: RiWhatsappLine, url: "https://wa.me/34601995234", name: "WhatsApp" }
                ].map(({ Icon, url, name }) => (
                  <a
                    key={name}
                    href={url}
                    className="text-[#4A3F35]/80 hover:text-[#C79F7D] transition-colors"
                    aria-label={name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <Button
                variant="outline"
                className="w-full mt-4 hover:text-[#C79F7D] transition-colors"
                onClick={() => {
                  navigate("/contacto");
                  setMobileMenuOpen(false);
                }}
              >
                Reservar cita
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
