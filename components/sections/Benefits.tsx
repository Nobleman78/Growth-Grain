import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Sprout, Activity, ShieldCheck, DollarSign, HandFist } from 'lucide-react';

const benefits = [
  { icon: Sprout, title: "Maximized grain prices", desc: "Access premium markets and best available bids to get higher returns on your grain." },
  { icon: Activity, title: "Flexible selling options", desc: "Sell grain whether it’s stored on-farm or within major systems like Viterra or ports." },
  { icon: ShieldCheck, title: "Expert market insights", desc: "Receive reliable data, daily bid information, and detailed reports to support better decisions." },
  { icon: HandFist, title: "Tailored advisory support", desc: "Get customized strategies and consultation based on your specific farming and marketing needs." },
  { icon: DollarSign, title: "Cost efficiency", desc: "Benefit from fee-based services and even free brokerage options under certain packages." },
  { icon: HandFist, title: "End-to-end support", desc: "Guidance on storage systems, logistics, and shipping analysis to optimize overall grain management." }
];

export default function Benefits() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="mb-20">
           <SectionHeading 
             pill="Why Choose Us"
             title="Benefits Gained From Using Our Aggrotech's Solutions"
           />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex flex-col gap-5 group">
              <div className="w-16 h-16 rounded-2xl bg-[#eaecda] group-hover:bg-accent transition-colors duration-300 flex items-center justify-center text-primary mb-3">
                <benefit.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed text-lg max-w-sm">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
