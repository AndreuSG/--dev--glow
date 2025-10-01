import { siteConfig } from "../../config/site";
import { Link } from 'react-router-dom';
import { prefixPath } from "../../lib/prefixPath";

export function Footer() {
  return (
    <footer className="bg-[#E5D5C5] text-[#4A3F35] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link
              to="/"
              className="font-serif text-2xl flex items-center gap-2 hover:text-[#C79F7D] transition-colors mb-4"
            >
              <img src={prefixPath("/svg/Logo.svg")} alt="Logo"  height="auto" />
            </Link>
            <p className="text-[#4A3F35]/80">
              Tu centro de estética avanzada de confianza
            </p>
          </div>
          {siteConfig.footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      <Link
                        to={item.href}
                        className="text-[#4A3F35]/80 hover:text-[#C79F7D] transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-[#4A3F35]/80 hover:text-[#C79F7D] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {siteConfig.socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-[#4A3F35]/80 hover:text-[#C79F7D] transition-colors"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-[#4A3F35]/10 mt-8 pt-8 text-center text-[#4A3F35]/60">
          <p>&copy; 2025 {siteConfig.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
