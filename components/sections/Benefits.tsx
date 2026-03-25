import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { Sprout, Activity, ShieldCheck, DollarSign, Settings, TrendingUp } from 'lucide-react';

const benefits = [
  { icon: Sprout, title: "Sustainability", desc: "Eco-friendly practices that protect our soil and our water quality for future foods." },
  { icon: Activity, title: "Real-time Monitoring", desc: "Detailed insights tracking the growth variables for any issues early on before they escalate." },
  { icon: ShieldCheck, title: "Improved Food Security", desc: "Reliable yields and tracking models ensure robust resources for global populations." },
  { icon: DollarSign, title: "Cost Optimization", desc: "Streamline operations with smart saving technologies eliminating unnecessary waste." },
  { icon: Settings, title: "Smart Farming", desc: "Powerful analytics platforms and automated routines to optimize farm management." },
  { icon: TrendingUp, title: "Yield Optimization", desc: "Aggrotech enhances volume with scientific models to maximize crop outputs securely." }
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
