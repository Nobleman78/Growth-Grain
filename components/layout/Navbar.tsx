'use client';

import Link from 'next/link';
import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-6 bg-[#123524] transition-all duration-300">
      <Container className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          {/* Mock Logo */}
          <div className="w-8 h-8 bg-accent rounded-br-lg flex items-center justify-center">
            <div className="w-4 h-4 rounded-tl-lg bg-primary"></div>
          </div>
          <span className="text-white font-semibold text-xl tracking-wide">Growth Grain</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 bg-black/20 px-8 py-3 rounded-full backdrop-blur-sm border border-white/10">
          <Link href="/" className="text-white hover:text-accent transition-colors text-sm font-medium">Home</Link>
          <Link href="/services" className="text-white hover:text-accent transition-colors text-sm font-medium">Service</Link>
          <Link href="/about" className="text-white hover:text-accent transition-colors text-sm font-medium">About</Link>
          <Link href="/contact" className="text-white hover:text-accent transition-colors text-sm font-medium">Contact</Link>
        </nav>

        <div className="hidden md:block">
          <Button className="bg-linear-to-r from-accent to-accent/80 text-white font-bold px-8 py-3 rounded-full shadow-lg shadow-accent/50 hover:shadow-accent/80 hover:scale-105 transition-all duration-300 border border-accent/50 hover:border-accent uppercase tracking-widest text-sm">Contact Us</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}
          />
        </button>
      </Container>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-linear-to-b from-primary/95 to-primary/80 backdrop-blur-lg z-40 md:hidden border-r border-accent/30 transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-accent/20">
          <span className="text-white font-semibold text-lg">Growth Grain</span>
          <button
            onClick={closeMenu}
            className="text-white hover:text-accent transition-colors text-2xl"
          >
            ✕
          </button>
        </div>

        {/* Menu Items */}
        <nav className="flex flex-col gap-0 pt-4">
          <Link
            href="/"
            onClick={closeMenu}
            className="px-6 py-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-200 border-l-4 border-transparent hover:border-accent font-medium"
          >
            Home
          </Link>
          <Link
            href="/features"
            onClick={closeMenu}
            className="px-6 py-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-200 border-l-4 border-transparent hover:border-accent font-medium"
          >
            Features
          </Link>
          <Link
            href="/about"
            onClick={closeMenu}
            className="px-6 py-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-200 border-l-4 border-transparent hover:border-accent font-medium"
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={closeMenu}
            className="px-6 py-4 text-white hover:bg-accent/20 hover:text-accent transition-all duration-200 border-l-4 border-transparent hover:border-accent font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button className="w-full bg-[#b5d520]  font-bold px-6 py-4 rounded-xl   transition-all duration-300 border border-accent/50  uppercase tracking-wider text-base cursor-pointer hover:bg-[#b5d520]/90 hover:shadow-lg hover:shadow-[#b5d520]/50">
            Contact Us
          </Button>
        </div>
      </div>
    </header>
  );
}
