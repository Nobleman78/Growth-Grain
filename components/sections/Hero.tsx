"use client"
import Container from '../ui/Container';
import Button from '../ui/Button';
import heroImg from '@/public/images/hero-img.jpg';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter()
  const handleGoToContact = () => {
    router.push('/contact')
  }
  return (
    <div
      className="relative min-h-[90vh] pb-20 overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Background Abstract Pattern Placeholder representing mountain and field */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle gradients to simulate background image depth */}
        <div className="absolute -top-[20%] right-[-10%] w-[70vw] h-[70vw] rounded-full bg-linear-to-br from-[#123925] to-transparent blur-3xl opacity-30" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[60vw] h-[60vw] rounded-full bg-linear-to-tr from-[#0a2014] to-transparent blur-3xl opacity-30" />
      </div>

      <Container className="relative z-10 pt-32 lg:pt-48 pb-10 flex flex-col items-center">
        <div className="max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-bold text-white mb-6 tracking-tight drop-shadow-2xl" style={{ lineHeight: 1.1, textShadow: '0 4px 20px rgba(0,0,0,0.8)' }}>
            Revolutionizing <br />
            Agriculture with <br />
            <span className="text-accent drop-shadow-2xl">New Methods</span>
          </h1>
          <p className="text-gray-100 text-lg md:text-xl mb-12 leading-relaxed font-medium drop-shadow-lg" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.7)' }}>
            Visionary and innovative platforms continuously introduce new methods tailored specifically for modern farming, enhancing both yield and ecosystem life.
          </p>
          <Button onClick={handleGoToContact} variant="primary" className="text-lg px-10 py-4 font-bold shadow-2xl shadow-accent/40 hover:scale-110 hover:shadow-accent/60 transition-all duration-300 border-2 border-accent/30">
            Get Started
          </Button>
        </div>
      </Container>
    </div>
  );
}
