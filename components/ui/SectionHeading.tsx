export default function SectionHeading({ pill, title, subtitle, center = false }: { pill: string, title: string, subtitle?: string, center?: boolean }) {
  return (
    <div className={`flex flex-col gap-4 ${center ? 'items-center text-center' : ''}`}>
      <span className="bg-[#f0f8ce] text-[#5c7a1c] text-sm font-bold px-4 py-1.5 rounded-full inline-block w-fit">
        {pill}
      </span>
      <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight max-w-2xl tracking-tight">
        {title}
      </h2>
      {subtitle && <p className="text-gray-600 max-w-2xl mt-2 leading-relaxed text-lg">{subtitle}</p>}
    </div>
  );
}
