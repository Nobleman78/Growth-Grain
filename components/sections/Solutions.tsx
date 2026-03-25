import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import { ArrowUpRight } from 'lucide-react';
import grain from '../../public/images/grain.jpg';
import grower from '../../public/images/grower.avif';
import weater from '../../public/images/weather.avif';
import Image from 'next/image';

const solutions = [
  { title: "Sell grain to buyers", bgClass: "bg-blue-100",img:grain },
  { title: "Provide Data Solutions", bgClass: "bg-green-100 dark-version",img:weater },
  { title: "Grower Advisory", bgClass: "bg-gray-100",img:grower }
];

export default function Solutions() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="mb-16 text-center lg:text-left">
           <SectionHeading 
             pill="What We Provide"
             title="Providing our best solutions to help you grow better and smarter"
           />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((item, idx) => (
            <div key={idx} className={`rounded-3xl p-8 flex flex-col h-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 relative ${idx === 1 ? 'bg-primary text-white' : 'bg-muted text-foreground'}`}>
              <div className="flex justify-between items-start mb-6 z-10 w-full relative">
                <h3 className="text-2xl font-bold max-w-37.5 leading-snug">{item.title}</h3>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 shrink-0 ${idx === 1 ? 'bg-accent border-accent text-primary' : 'border-gray-300 text-foreground group-hover:bg-accent group-hover:border-accent group-hover:text-primary'} transition-colors`}>
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="absolute bottom-0 left-8 right-8 h-3/5 translate-y-4 group-hover:translate-y-2 transition-transform duration-300">
                <div className="w-full h-full bg-cover bg-center rounded-t-3xl shadow-2xl relative overflow-hidden" style={{ backgroundColor: idx === 1 ? '#0a2115' : '#d2dbc1' }}>
                   <Image src={item.img} alt={item.title} height={1000} width={1000} className="w-full h-full object-cover rounded-t-3xl opacity-80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
