import { Link } from 'react-router-dom';
import { Ship, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, Instagram } from 'lucide-react';

const quickLinks = [
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/products', label: 'Products' },
  { path: '/quality', label: 'Quality' },
  // { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
];

const services = [
  'Sea Freight',
  'Air Freight',
  'Road Transport',
  'Customs & Documentation',
  'Cold Chain Solutions',
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <img
              src="/white-indo-logo.png" 
              alt="Indo Vista Logo"
              className={`h-20 w-auto transition-all  drop-shadow-[0_0_12px_rgba(255,255,255,0.5)] roup-hover:drop-shadow-[0_0_16px_rgba(255,255,255,0.9) group-hover:opacity-100`}
            />
              
            </Link>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for global cold chain logistics and premium food exports. 
              Delivering quality frozen meat, seafood, and spices to markets worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-secondary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">
                  3rd floor, Above Varun Bajaj showroom, ViP Hills , 100 feet Road<br />
Madhapur, Hyderabad 500081
                 
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="tel:+919494288997" className="text-primary-foreground/80 hover:text-secondary text-sm">
                  9494288997 , 9440011704
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a href="mailto:n.vamsikiran4@gmail.com" className="text-primary-foreground/80 hover:text-secondary text-sm">
                  n.vamsikiran4@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Indo Vista. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-primary-foreground/60">
          Powered by <a href="https://outrightcreators.com/" className="hover:text-secondary transition-colors"> Outright Creators</a>

            {/* <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};
