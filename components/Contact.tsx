import { ContactItem } from "@/data/dataInformationsSection";
import { FaPaperPlane } from "react-icons/fa";

interface ContactProps {
    contactData: ContactItem[];
}

export function Contact({ contactData }: ContactProps) {
    return (
        <section className="text-center flex justify-center items-center mb-60" id="#Contact">
        <div>
            {contactData.map((item, index) => (
            <div key={index}>
                <h1 className="text-[28px] md:text-[40px] lg:text-[50px] font-bold text-white">Pronto para transformar sua ideia em <span className="text-[#29a6a4]">resultados</span> concretos e confiáveis no mundo digital?</h1>
                <p className="text-white mt-6">{item.description}</p>
                <div className="text-center flex justify-center items-center">
                <button className="bg-[#102032] p-5 rounded-full border border-white hover:bg-transparent hover:text-[18px] transition-all duration-300 flex gap-2 justify-center items-center text-center text-white mt-6 font-medium"><a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target="_blank">{item.btnText}</a><FaPaperPlane /></button>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
}