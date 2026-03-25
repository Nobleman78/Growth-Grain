import Link from 'next/link';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0b2116] text-white pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-10 relative overflow-hidden">
      {/* Background Big Text */}
      <div className="absolute bottom-0 left-0 w-full text-center pointer-events-none opacity-[0.03]">
        <h1 className="text-[20vw] sm:text-[18vw] md:text-[15vw] font-bold leading-none select-none tracking-tighter">
          Growth Grain
        </h1>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 md:gap-12 mb-12 sm:mb-16">

          {/* Left Section */}
          <div className="sm:col-span-2 md:col-span-1 lg:col-span-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 max-w-lg leading-tight">
              Isn&apos;t It Time To Embrace Agricultural Technology For A Sustainable Future?
            </h2>
            <Button variant="primary" className="rounded-lg w-full sm:w-auto">
              Contact Us
            </Button>
          </div>

          {/* Company Links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-3 lg:col-start-8">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="sm:col-span-1 md:col-span-1 lg:col-span-2">
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Legal Information</h3>
            <ul className="flex flex-col gap-3 sm:gap-4 text-gray-400 text-sm sm:text-base">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left order-3 sm:order-1 w-full sm:w-auto">
            © Copyright 2023 | Aggrotech All right reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3 sm:gap-4 order-1 sm:order-2">
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white transition-colors">
              <FaFacebookF className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white transition-colors">
              <FaTwitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white transition-colors">
              <FaLinkedinIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-primary flex items-center justify-center hover:bg-white transition-colors">
              <FaInstagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}