import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Cta() {
  return (
    <section className="relative py-32 overflow-hidden bg-[#2a432b]">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 w-full h-full bg-[#1b3b27]">
        {/* Abstract pattern / image overlay */}
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#355230] to-transparent opacity-80" />
      </div>
      
      <Container className="relative z-10">
        <div className="text-center">
          <span className="bg-[#f0f8ce] text-[#5c7a1c] text-sm font-bold px-5 py-2 rounded-full inline-block mb-8 uppercase tracking-wider shadow-sm">Take Action</span>
          <h2 className="text-4xl max-w-4xl mx-auto md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-12 tracking-tight">
            Are You Prepared To Transform Your Farming Methods?
          </h2>
          <Button variant="primary" className="text-xl px-10 py-5 font-bold shadow-xl shadow-accent/20">Now Start From Today</Button>
        </div>
      </Container>
    </section>
  );
}
