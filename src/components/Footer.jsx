import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const logo = "/logo.jpg";
  const car = "/cementcar.png";
  const links = {
    company: [
      { name: 'About', href: '/#about' },
      { name: 'Products', href: '/#products' },
      { name: 'Projects', href: '/#projects' },
      { name: 'Contact', href: '/#contact' },
      { name: 'Gallery', href: '/gallery' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' }
    ],
    social: [
      { name: 'Facebook', href: 'https://www.facebook.com/p/Communique-Concrete-61561051752198', icon: 'facebook' },
      
    ]
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-start mb-4 flex-col">
              <div className="flex  items-center justify-center gap-5">
              <img src={logo} alt="Communique Concrete" className="h-16 w-auto object-contain bg-white rounded-lg p-2" />
              <img src={car} alt="Cement Truck" className="h-16 w-auto object-contain mt-4" />
              </div>
              <h3 className="text-2xl font-bold">Communique Concrete</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Delivering high-quality readymix concrete solutions with precision, integrity, and excellence.
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

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center">
              © {currentYear} Communique Concrete. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {links.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{link.name}</span>
                 <Facebook />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer