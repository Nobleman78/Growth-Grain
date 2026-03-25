import Container from '../ui/Container';
import { Leaf, Users } from 'lucide-react';
import Ag from '../../public/images/ag.avif';
import Image from 'next/image';

export default function Innovation() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Side: Images */}
          <div className="relative rounded-3xl bg-[#d5dec7] aspect-4/5 md:aspect-4/3 lg:aspect-square overflow-hidden flex items-center justify-center">
            {/* Abstract visual for drones/greenhouse */}
            <Image src={Ag} alt="Agriculture Innovation" height={1000} width={1000} className=" w-full h-full" />

            {/* Background Accent */}

            {/* <div className="absolute bottom-0 w-full h-[60%] bg-[#b0c09e]" /> */}

            {/* Floating Card 'Our Promise' */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 lg:right-auto lg:w-[85%] bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <span className="bg-[#f0f8ce] text-[#5c7a1c] text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4 uppercase tracking-wider">Our Promise</span>
              <p className="text-gray-800 font-medium text-lg leading-relaxed mb-6">Providing state-of-the-art drones to monitor crop health, assess soil conditions, and spray fertilizers with unparalleled precision.</p>
              <button className="w-full bg-accent text-primary font-bold py-4 rounded-xl hover:bg-[#b5d520] transition-colors text-lg">See How It Works</button>
            </div>
          </div>

          {/* Right Side: Text & Stats */}
          <div className="bg-primary rounded-3xl p-10 md:p-14 lg:p-16 text-white h-full flex flex-col justify-center">
            <span className="bg-[#1b432e] text-white text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit mb-6 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-8 leading-[1.15] tracking-tight">Enhancing Agriculture With Innovative Ideas For The Future</h2>
            <p className="text-[#a1bdaf] text-xl mb-14 leading-relaxed font-medium">We are dedicated to revolutionizing agriculture through innovation, sustainably protecting our environment, enhancing food security for everyone, today.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <Leaf className="w-7 h-7" />
                </div>
                <h4 className="text-5xl font-bold">65%</h4>
                <p className="text-[#a1bdaf] text-base leading-relaxed">Extra Crop Production After One Group Use Our Smart Solutions</p>
              </div>

              <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <Users className="w-7 h-7" />
                </div>
                <h4 className="text-5xl font-bold">50%</h4>
                <p className="text-[#a1bdaf] text-base leading-relaxed">Employee Farm Operation Automation With Good Work Flow Strategy</p>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
