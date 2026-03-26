import Container from '../ui/Container';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { question: "What kind of services do you offer?", answer: "We offer a wide range of agricultural services, including crop management, data service, marketing." },
  { question: "Which area you provide services in?", answer: "We work with most major grain buyers across South Australia, including depot buyers and end-user mills in key locations such as Wasleys, Murray Bridge, and Mile End." },
  { question: "Does the professional provide the services?", answer: "Yes, our team of professional agronomists and consultants provide hands-on support and guidance for all our services. We have more than 19+ years of experience in the industry." },
];

export default function Faq() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <Container>
        <div className="text-center mb-20 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-foreground mb-6 tracking-tight">Frequently Asked Qustions</h2>
            <p className="text-gray-600 max-w-2xl text-xl leading-relaxed">Expect to expand per head from the awareness responses our questions tailored to modern farm needs.</p>
        </div>
        
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group bg-[#f7f8f4]  transition-colors duration-300 rounded-3xl overflow-hidden [&_summary::-webkit-details-marker]:hidden shadow-sm" open={idx === 0}>
              <summary className="flex justify-between items-center cursor-pointer p-7 md:p-10 outline-none ">
                <h3 className="text-xl md:text-2xl font-bold text-foreground pr-8 group-open:text-primary transition-colors">{faq.question}</h3>
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center shrink-0 group-open:rotate-180 transition-transform duration-500 shadow-md group-hover:bg-[#1b432e]">
                  <ChevronDown className="w-6 h-6 border-2 border-transparent" strokeWidth={3} />
                </div>
              </summary>
              <div className="px-7 md:px-10 pb-10 pt-0 text-gray-600 text-lg leading-relaxed animate-[fadeIn_0.5s_ease-out]">
                <p>{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
