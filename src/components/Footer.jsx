import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const logo = "/CC LOGO.jpg";
  const car = "/cementcar.png";

  const links = {
    company: [
      { name: "About", href: "/#about" },
      { name: "Products", href: "/#products" },
      { name: "Projects", href: "/#projects" },
      { name: "Contact", href: "/#contact" },
      { name: "Gallery", href: "/gallery" },
    ],
    legal: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-and-conditions" },
    ],
    social: [
      {
        name: "Facebook",
        href: "https://www.facebook.com/p/Communique-Concrete-61561051752198",
      },
    ],
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* ===================== TOP FOOTER ===================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex flex-col mb-4">
              <div className="flex items-center gap-5 mb-3">
                <img
                  src={logo}
                  alt="Communique Concrete"
                  className="h-16 w-auto object-contain bg-white rounded-lg p-2"
                />
                <img
                  src={car}
                  alt="Cement Truck"
                  className="h-16 w-auto object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">
                Communique Concrete
              </h3>
            </div>

            <p className="text-gray-400 max-w-xl">
              Delivering high-quality readymix concrete solutions with precision,
              integrity, and excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {links.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {links.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ===================== BOTTOM CURVED DESIGN ===================== */}
      <div className="relative w-full h-[150px] md:h-[170px] overflow-hidden">

        {/* Footer Background Image */}
        <img
          src="/footer.png"
          alt="Footer Design"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Bottom content */}
        <div className="relative z-40 h-full flex items-end pb-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-900 text-sm font-medium text-center">
                © {currentYear} Communique Concrete. All rights reserved.
              </p>

              <div className="flex space-x-6">
                {links.social.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-900 hover:text-black transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
