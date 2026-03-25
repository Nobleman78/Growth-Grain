import Container from '../../components/ui/Container';
import agri from '../../public/images/agri.avif';
import jack from '../../public/images/jack.avif';
import Image from 'next/image';


export default function AboutPage() {


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Spacer */}
      <div className="h-24 bg-white" />

      <main>
        {/* Hero Section - Modern Two Column Layout */}
        <section className="py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <h1 className="text-[52px] font-bold text-[#123524] mb-8 leading-tight">
                  Keeping Growers Informed
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Growth Grain Services empowers growers with real-time market intelligence, transparent pricing, and strategic advisory services. Our mission is to transform how farmers access information and make confident business decisions in the grain market.
                </p>

              </div>

              {/* Right Visual */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={agri}
                  alt="Agricultural Growth Grain Services"
                  quality={100}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Container>
        </section>


        {/* About Founder Section */}
        <section className="py-20">
          <Container>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="mb-8">
                  <span className="text-accent font-bold uppercase tracking-widest text-sm">Founder Story</span>
                </div>
                <h2 className="text-5xl font-bold text-[#123524] mb-8 leading-tight">
                  Jack Zacker&apos;s Journey
                </h2>

                <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-8">
                  <p>
                    My name is Jack Zacker and I started Growth Grain Services in September 2021. Through my whole post-school life, I have been involved in the grain industry. Starting in 2007, I worked as a harvest casual at the ABB Grain depot of Keith in the South East of South Australia.
                  </p>

                  <p>
                    In 2009, I moved to Adelaide to complete a university degree and worked for ABB Grain, which became Viterra during my time there in export logistics. I primarily ran the rail program on the Eyre Peninsula into Port Lincoln, as well as the rail program into Inner Harbor and Outer Harbor in Adelaide.
                  </p>

                  <p>
                    In 2013, I started work for Toepfer International, working predominantly on road movements for domestic and export operations Australia-wide. Toepfer International became ADM during this time, and I progressed from logistics to running the container export program to trading the Australian Sorghum and Wheat book until 2021.
                  </p>

                  <div className="bg-linear-to-r from-yellow-100 to-yellow-50 p-8 rounded-xl border-l-4 border-yellow-400 mt-8">
                    <p className="font-semibold text-[#0d2a1b] mb-3">My Vision Since 2021</p>
                    <p>
                      Since I started Growth Grain Services in 2021, my goal is to help create a more informed grower. To know what the best price is on a given day, to provide market insights going forward with advisory services. I&apos;m committed to empowering every grower with the transparency, data, and expertise they need to make confident decisions.
                    </p>
                  </div>
                </div>


              </div>

              {/* Right Visual */}
              <div className="relative">
                <Image
                  src={jack}
                  alt="Jack Zacker Founder of Growth Grain Services"
                  quality={100}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg border border-gray-200">
                  <p className="text-sm font-semibold text-gray-800">Jack Zacker</p>
                  <p className="text-xs text-gray-500">Founder & CEO</p>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/* Grain Buyers Section - Modern & Eye-Catching */}
        <section className="py-32 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-20 text-center">
                <div className="inline-block mb-6">
                  <span className="text-accent font-bold uppercase tracking-widest text-sm">Our Network</span>
                </div>
                <h2 className="text-5xl font-bold text-[#123524] mb-6 leading-tight">
                  Grain Buyers We Work With
                </h2>
                <p className="text-2xl text-gray-600  font-light leading-relaxed">
                  We deal with most major grain buyers in South Australia, from depot buyers to end-user mills.
                </p>
              </div>

              {/* Two Column Grid */}
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <h3 className="text-2xl font-bold text-[#123524] mb-4">Depot Buyers</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We maintain strong relationships with major depot buyers across <span className='text-[#123524]'>South Australia</span>, ensuring competitive pricing and reliable grain aggregation services.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-[#123524] mb-4">End-User Mills</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    Direct connections with major milling facilities including <span className='text-[#123524]'>South Australia</span>, <span className='text-[#123524]'>Victoria</span>, <span className='text-[#123524]'>Queensland</span>, and other key processing centers.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
