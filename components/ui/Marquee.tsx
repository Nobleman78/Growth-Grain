'use client';

import Image from "next/image";
import Marquee from "react-fast-marquee";
import user from '../../public/images/user.avif'

export interface MarqueeItem {
    id: string;
    name: string;
    description: string;
}

interface MarqueeProps {
    items?: MarqueeItem[];
    speed?: number;
    className?: string;
}

export default function MarqueeComponent({ items = [], speed = 50, className = '' }: MarqueeProps) {
    // Default demo data if no items provided
    const demoItems: MarqueeItem[] = [
        { id: '1', name: 'Mark Eden, Arthurton', description: '"Growth Grain Services has been a great new addition to our business. Jack gives an honest opinion and aims to achieve the highest dollar in sales"' },
        { id: '2', name: 'Mark Eden, Arthurton', description: '"Growth Grain Services has been a great new addition to our business. Jack gives an honest opinion and aims to achieve the highest dollar in sales"' },
        { id: '3', name: 'Mark Eden, Arthurton', description: '"Growth Grain Services has been a great new addition to our business. Jack gives an honest opinion and aims to achieve the highest dollar in sales"' },
        { id: '4', name: 'Mark Eden, Arthurton', description: '"Growth Grain Services has been a great new addition to our business. Jack gives an honest opinion and aims to achieve the highest dollar in sales"' },
        // { id: '2', name: 'Supen Chakma', description: 'Customers have praised the homemade, fresh, and well-cooked food, noting a "warm" and "lovely" ambiance.' },
        // { id: '3', name: 'Alapottra Chakma', description: 'Customers have praised the homemade, fresh, and well-cooked food, noting a "warm" and "lovely" ambiance.' },
        // { id: '4', name: 'Susnat Chakma', description: 'Customers have praised the homemade, fresh, and well-cooked food, noting a "warm" and "lovely" ambiance.' },
        // { id: '5', name: 'Sumed Chakma', description: 'Customers have praised the homemade, fresh, and well-cooked food, noting a "warm" and "lovely" ambiance.' },
        // { id: '6', name: 'Sumitra Chakma', description: 'Customers have praised the homemade, fresh, and well-cooked food, noting a "warm" and "lovely" ambiance.' },
    ];

    // Safety check
    const safeItems = Array.isArray(items) && items.length > 0 ? items : demoItems;

    return (
        <div className={`relative w-full bg-white ${className}`}>
            {/* Left Fade Overlay */}
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-32 bg-linear-to-r from-white via-white to-transparent z-10 pointer-events-none" />

            {/* Right Fade Overlay */}
            <div className="hidden md:block absolute right-0 top-0 bottom-0 w-32 bg-linear-to-l from-white via-white to-transparent z-10 pointer-events-none" />

            {/* Marquee Container */}
            <Marquee speed={speed} pauseOnHover gradientWidth={128}>
                {safeItems.map((item) => (
                    <div
                        key={item.id}
                        className="px-8 py-8 min-w-max md:py-20">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-linear-to-br from-accent/20 to-accent/5 rounded-2xl flex items-center justify-center border border-accent/30">
                                <Image src={user} alt={item.name} width={100} height={100} className="object-cover h-full rounded" />
                            </div>
                            <div>
                                <p className="text-lg font-bold text-[#0d2a1b]">
                                    {item.name}
                                </p>
                                <p className="text-sm text-gray-600 w-75">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
