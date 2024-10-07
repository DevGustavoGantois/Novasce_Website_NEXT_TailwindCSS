import { about } from "@/data/dataInformationsSection";
import { FaCloudDownloadAlt, FaCode, FaLaptop, FaPuzzlePiece } from "react-icons/fa";


interface AboutInformationsProps {
    about: typeof about; 
}

export function About({ about }: AboutInformationsProps) {
    return (
        <section className="bg-gradient-to-r from-black to-[#102032] p-12 mt-40 mb-40 mx-auto rounded-2xl" id="#About">
            {about.map((item, index) => (
                <div key={index} className="flex flex-col lg:flex-row gap-12 lg:justify-around">
                    <div className="mt-14 lg:mt-44">
                        <p className="text-white/50 text-center lg:text-start">{item.pretitle}</p>
                        <h1 className="h2 text-white text-center lg:text-start">
                            Quem <span className="text-Turquoise_green">Somos</span>
                        </h1>
                        <p className="text-white font-light text-center lg:text-start lg:w-[600px]">{item.description}</p>
                        <div className="text-center lg:text-start">
                        <button className="bg-gradient-to-r from-[#00666C] to-[#102032] text-white font-medium p-4 mt-6 rounded-full hover:p-6 transition-all duration-300"><a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target="_blank">{item.btnText}</a></button>
                        </div>
                    </div>
                    <div className="gap-4 grid grid-cols-2 md:grid-cols-1  lg:grid-cols-2 justify-center">
                        <div className="flex flex-col items-center justify-center text-center bg-[#101415] p-[60px] py-[70px] lg:p-24 rounded-2xl border-1 neon-border">
                            <FaLaptop size={60} className="text-[#29a6a4] mb-4" />
                            <h3 className="font-bold lg:h4 text-white">Inovação Tecnologica</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#00666C] to-[#102032] rounded-2xl  p-[60px] py-[70px] lg:p-24">
                            <FaCloudDownloadAlt size={60} className="text-white mb-4" />
                            <h3 className="font-bold lg:h4 text-white">Transformação digital</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-[#00666C] to-[#102032] rounded-2xl  p-[60px] py-[70px] lg:p-24">
                            <FaPuzzlePiece size={60} className="text-white mb-4" />
                            <h3 className="font-bold lg:h4 text-white">Soluções Sob Medida</h3>
                        </div>
                        <div className="flex flex-col items-center justify-center text-center bg-[#101415] p-[60px] py-[70px] lg:p-24 rounded-2xl border-1 neon-border ">
                            <FaCode size={60} className="text-[#29a6a4] mb-4 " />
                            <h3 className="font-bold lg:h4 text-white">Qualidade de Software</h3>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}