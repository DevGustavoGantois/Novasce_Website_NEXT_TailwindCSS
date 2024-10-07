import { Hero } from '@/components/Hero';
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { FAQSection } from "@/components/FAQSection";
import { Technologies } from "@/components/Technologies";
import { Testimonials } from "@/components/Testimonials";
import { about, contact} from "@/data/dataInformationsSection";
import { WhatWeDoSection } from '@/components/whatWeDoSection';


export default function Home() {

  return (
    <section>
      <Hero />
      <Technologies />
      <About about={about} />
      <WhatWeDoSection  />
      <Testimonials />
      <FAQSection />
      <Contact contactData={contact} />
    </section>
  );
}
