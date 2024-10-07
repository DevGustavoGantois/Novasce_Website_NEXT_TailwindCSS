import Image from "next/image";

export function Technologies() {
    return (
        <section className="flex flex-col justify-center items-center text-center">
            <p className="text-white/50">Tecnologias que empregamos para proporcionar uma experiência otimizada ao usuário.</p>
            <div className="mt-12 mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-8 justify-items-center">
            <div className="w-24 h-24 relative" data-aos="fade-down">
                <Image src='/reactJS.png' alt="React JS" sizes="(max-width: 768px) 100vw, 50vw" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative" data-aos="fade-up">
                <Image src='/Typescript.png' alt="TypeScript" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative" data-aos="fade-down">
                <Image src='/Flutter.png' alt="Flutter" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative lg:w-40 lg:h-40" data-aos="fade-up">
                <Image src='/nextJS.png' alt="Next.js" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative" data-aos="fade-up">
                <Image src='/tailwindcss.png' alt="Tailwind CSS" fill className="object-contain" />
            </div>
            <div className="w-16 h-16 lg:w-24 lg:h-24 relative" data-aos="fade-down">
                <Image src='/node.png' alt="Node.js" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative" data-aos="fade-down">
                <Image src='/figma.png' alt="Figma" fill className="object-contain" />
            </div>
            <div className="w-24 h-24 relative" data-aos="fade-up">
                <Image src='/aws.png' alt="AWS" fill className="object-contain" />
            </div>
            </div>
        </section>
    )
}