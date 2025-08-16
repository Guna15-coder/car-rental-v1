import { Button } from "../ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black rounded-md text-gray-300 px-6 mx-4 md:px-16 py-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row justify-between gap-12">
        
        {/* LEFT SECTION */}
        <div className="flex-1">
          {/* Logo */}
          <div className="mb-4">
            <h1 className="text-2xl font-bold text-white">Horizone</h1>
          </div>
          <p className="text-sm leading-relaxed max-w-md">
            Our mission is to equip modern explorers with cutting-edge,
            functional, and stylish bags that elevate every adventure.
          </p>
          <p className="text-xs mt-6 text-gray-500">
            © 2024 Horizone. All rights reserved.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="flex flex-col sm:flex-row flex-1 justify-between gap-10">
          <div>
            <h3 className="text-white font-semibold mb-3">About</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">Blog</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">Press</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">Contact</li>
              <li className="cursor-pointer hover:text-white">FAQs</li>
              <li className="cursor-pointer hover:text-white">Shipping</li>
              <li className="cursor-pointer hover:text-white">Returns</li>
            </ul>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1">
          <h3 className="text-white font-semibold mb-3">Get Updates</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-2 rounded-xl bg-white/10 text-white placeholder-gray-400 
              border border-white/20 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-white/40"
            />
            <Button className="bg-white text-black hover:bg-gray-200 rounded-xl px-6 w-full sm:w-auto">
              Subscribe
            </Button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 justify-center sm:justify-start">
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" className="hover:text-white">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
