"use client"
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';
import packageImage from '../../public/images/package.avif';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
    const router = useRouter()
    const services = [
        {
            title: 'Cash Brokerage',
            subtitle: 'Growers',
            description: 'Sell grain to buyers on your behalf, whether your grain is in the system (Viterra/AWB/Tports etc) or you are holding grain on farm. Realize the premium being paid into end user markets or Port after harvest delivery.',
            color: 'from-blue-50',
        },
        {
            title: 'Data Service',
            subtitle: 'Market Intelligence',
            description: 'More aimed at end user buyers or marketers. We offer data whether that is best bids on a given day in a raw data format or comprehensive reports. Contact for more detailed information.',
            color: 'from-purple-50',
        },
        {
            title: 'Grower Advisory',
            subtitle: 'Tailored Solutions',
            description: 'Various advisory packages tailored to suit individual grower needs. Includes free brokerage, weekly grain reports, marketing plan development, and on-farm storage optimization.',
            color: 'from-green-50',
        },
    ];

    const advisoryFeatures = [
        'Free Brokerage',
        'Weekly Grain Reports',
        'Assist In Developing Marketing Plan',
        'Shipping Stem Analysis',
        'Contract Arbitrage',
        'Assist In On Farm Storage Systems',
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Navigation Spacer */}
            <div className="h-24 bg-white" />

            <main>

                {/* What We Offer Section */}
                <section className="py-20">
                    <Container>
                        <div className="">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#123524] mb-8">What We Offer</h2>
                            <div className="space-y-6 text-lg text-[#123524] leading-relaxed">
                                <p>
                                    At this stage, Growth Grain Services offers cash brokerage services for SA growers (or grain moving into South Australia) on a fee for service basis.
                                </p>
                                <p>
                                    We also offer consultation packages to growers which we can tailor to suit individual growers. The biggest package includes free brokerage on all tonnes transacted on your behalf.
                                </p>

                            </div>
                        </div>
                    </Container>
                </section>

                {/* Services Cards */}
                <section className="py-24 bg-linear-to-br from-gray-50 to-white">
                    <Container>
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-20">
                                <h2 className="text-4xl md:text-5xl font-bold text-[#0d2a1b] mb-4">Our Core Services</h2>
                                <p className="text-xl text-gray-600 max-w-2xl mx-auto">Professional solutions designed to meet the diverse needs of grain market participants</p>
                            </div>

                            <div className="grid lg:grid-cols-3 gap-8">
                                {services.map((service, idx) => {
                                    return (
                                        <div
                                            key={idx}
                                            className={`bg-linear-to-br ${service.color} to-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group`}
                                        >
                                            <div className="flex items-start justify-between mb-6">
                                                <div>
                                                    {/* <p className="text-accent font-bold uppercase tracking-widest text-xs mb-2">{service.subtitle}</p> */}
                                                    <h3 className="text-2xl md:text-3xl font-bold text-[#0d2a1b]">{service.title}</h3>
                                                </div>
                                                {/* <Icon className="text-5xl text-accent/40 group-hover:text-accent transition-colors duration-300" /> */}
                                            </div>
                                            <p className="text-gray-700 leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </Container>
                </section>

                {/* Grower Advisory Details */}
                <section className="mb-10">
                    <Container>
                        <div className="">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">
                                {/* Left - Content */}
                                <div>
                                    <div className="inline-block mb-6">
                                        <span className="text-accent font-bold uppercase tracking-widest text-sm">Advisory Services</span>
                                    </div>
                                    <h2 className="text-5xl font-bold text-[#0d2a1b] mb-8 leading-tight">
                                        Grower Advisory Packages
                                    </h2>
                                    <p className="text-lg text-gray-700 leading-relaxed mb-8">
                                        Various advisory packages can be customized to suit individual grower needs. Each package is tailored with our expertise and your specific requirements in mind.
                                    </p>
                                    <div className="space-y-3 mb-10">
                                        {advisoryFeatures.map((feature, idx) => (
                                            <div key={idx} className="flex items-center gap-4">
                                                <div className="w-2 h-2 bg-accent rounded-full" />
                                                <p className="text-gray-700 font-medium">{feature}</p>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-gray-600 text-sm italic mb-6">
                                        * On-farm storage assistance varies based on individual client needs and requirements
                                    </p>

                                </div>

                                {/* Right - Visual */}
                                <div className="relative">
                                    <div className="">
                                        <Image src={packageImage} alt="Advisory Package" height={1000} width={1000} className="w-full h-full object-cover rounded-xl" />
                                    </div>
                                    <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-accent">
                    <Container>
                        <div className="max-w-4xl mx-auto text-center text-white">
                            <h2 className="text-5xl font-bold mb-6">Ready to Get Started?</h2>
                            <p className="text-xl text-accent-light mb-10 max-w-2xl mx-auto">
                                Contact Growth Grain Services today to learn more about how we can help optimize your grain marketing strategy.
                            </p>
                            <Button onClick={() => router.push('/contact')} className="bg-white text-accent hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300">
                                Contact Us Now
                            </Button>
                        </div>
                    </Container>
                </section>
            </main>
        </div>
    );
}
