import Marquee from '../ui/Marquee';
import Container from '../ui/Container';

interface ImageGalleryMarqueeProps {
    title?: string;
    description?: string;
}

export default function ImageGalleryMarquee({
    title = 'Featured Products',
    description = 'Browse our premium selection'
}: ImageGalleryMarqueeProps) {

    const items = [
        { id: '1', name: 'Winter Wheat', description: 'Premium quality grain' },
        { id: '2', name: 'Barley Crop', description: 'Best yields this season' },
        { id: '3', name: 'Sorghum Grain', description: 'High nutrient content' },
        { id: '4', name: 'Oats Premium', description: 'Certified organic' },
        { id: '5', name: 'Canola Oil', description: 'Cold pressed extract' },
        { id: '6', name: 'Linseed Crop', description: 'Rich in omega-3' },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-12">
                    <p className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Showcase</p>
                    <h2 className="text-5xl font-bold text-[#0d2a1b] mb-4">{title}</h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">{description}</p>
                </div>
            </Container>

            <Marquee items={items} speed={50} />
        </section>
    );
}
