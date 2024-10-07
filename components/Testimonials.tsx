import { PeoplesTestimonials } from "@/data/dataInformationsSection";
import { TestimonialsSlide } from "./TestimonialsSlide";

export function Testimonials() {
    return (
        <section className="mx-auto mt-60 mb-60" id="#Testimonials">
            <div className="text-white text-center">
                <h1 className="h1">Depoimentos</h1>
                <p className="mt-2 text-[20px] font-light">O que nossos clientes estão dizendo</p>
            </div>
            <div className="mt-24">
                <TestimonialsSlide peoplesTestimonials={PeoplesTestimonials} />
            </div>
        </section>
    );
}