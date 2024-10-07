import { homeData } from "@/data/dataInformationsSection";
import Image from "next/image";
import { BsChevronDoubleDown } from "react-icons/bs";
import SonarBackground from './SonarBackground'; 

export function Hero() {
    return (
        <section className="flex justify-center items-center mb-40" id="#Home">
            <div className="absolute inset-0 z-[-1]"> 
                <SonarBackground />
            </div>
            <div className="text-center flex flex-col justify-center items-center relative z-10"> 
            <Image 
    src='/blackLogo.svg' 
    alt="logo" 
    width={80} 
    height={22} 
    style={{ width: 'auto', height: 'auto' }} 
    priority
    className="float"
/>
                <div>
                    {homeData.map((item, index) => (
                        <div key={index}>
                            <p data-aos="fade-up" className="text-white lg:text-2xl mt-6"><a href="" target="_blank">{item.description}</a></p>
                            <div className="flex justify-center gap-6 mb-12 mt-6">
                                <a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target="_blank">
                                <button className="p-4 text-white flex justify-center items-center gap-3 bg-gradient-to-r from-[#00666C] to-[#102032] rounded-full">
                                        {item.btnText} <BsChevronDoubleDown size={20} />
                                    </button>
                                </a>
                                <button className="p-4 text-white font-medium uppercase text-[12px] lg:text-[16px] hover:text-[#65c0ba] transition-all duration-300 neon-border rounded-full">
                                    <a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target="_blank">{item.btnServices}</a>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
