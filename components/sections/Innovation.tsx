"use client"
import Container from '../ui/Container';
import { Leaf, Database } from 'lucide-react';
import Ag from '../../public/images/ag.avif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Innovation() {
  const router = useRouter();
  const handleGoToServices = () => {
    router.push('/services');
  }
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Side: Images */}
          <div className="relative rounded-3xl bg-[#d5dec7] aspect-4/5 md:aspect-4/3 lg:aspect-square overflow-hidden flex items-center justify-center">
            {/* Abstract visual for drones/greenhouse */}
            <Image src={Ag} alt="Agriculture Innovation" height={1000} width={1000} className=" w-full h-full" />

            {/* Floating Card 'Our Promise' */}
            <div className="absolute bottom-8 left-8 right-8 md:bottom-12 md:left-12 lg:right-auto lg:w-[85%] bg-white/95 backdrop-blur-md p-8 rounded-3xl shadow-xl">
              <span className="bg-[#f0f8ce] text-[#5c7a1c] text-xs font-bold px-3 py-1.5 rounded-full inline-block mb-4 uppercase tracking-wider">Our Promise</span>
              <p className="text-gray-800 font-medium text-sm md:text-lg leading-relaxed mb-6">Providing marketing, stem analysis, weekly grain reports for better decision-making. We also offering cash brokerage services.</p>
              <a href="tel:+0407 469 730" className="w-full bg-accent text-primary font-bold py-4 rounded-xl px-5 hover:bg-[#b5d520] transition-colors text-lg">Contact for More Details</a>
            </div>
          </div>

          {/* Right Side: Text & Stats */}
          <div className="bg-primary rounded-3xl p-10 md:p-14 lg:p-16 text-white h-full flex flex-col justify-center">
            <span className="bg-[#1b432e] text-white text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit mb-6 uppercase tracking-wider">Our Services</span>
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-bold mb-8 leading-[1.15] tracking-tight">Enhancing Agriculture With Innovative Ideas For The Future</h2>
            <p className="text-[#a1bdaf] text-xl mb-14 leading-relaxed font-medium">We also offer consultation packages to growers which we can tailor to suit individual growers. The biggest package includes free brokerage on all tonnes transacted on your behalf.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <Leaf className="w-7 h-7" />
                </div>
                <h4 className="text-5xl font-bold">65%</h4>
                <p className="text-[#a1bdaf] text-base leading-relaxed">Extra Crop Production After One Group Use Our  Grower Advisory service</p>
              </div>

              <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-10">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                  <Database className="w-7 h-7" />
                </div>
                <h4 className="text-5xl font-bold">50%</h4>
                <p className="text-[#a1bdaf] text-base leading-relaxed">We Are More Focused on Data Service</p>
                <button onClick={handleGoToServices} className='bg-accent text-black py-2 px-2 transition-all hover:scale-110 cursor-pointer'>See More</button>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
