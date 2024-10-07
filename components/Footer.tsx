import { FaEnvelope, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export function Footer() {
    return (
            <footer className="flex flex-col text-center justify-center lg:justify-around items-center lg:flex-row text-white mb-4 mt-12">
        <div className="flex gap-4 justify-center mt-2 lg:mt-0">
            <FaLinkedin size={24} className=" hover:text-weter_green duration-300 transition-all cursor-pointer hover:animate-bounce" />
            <FaWhatsapp size={24} className="hover:text-weter_green duration-300 transition-all cursor-pointer hover:animate-bounce" />
            <a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target="_blank"><FaInstagram size={24} className="hover:text-weter_green duration-300 transition-all cursor-pointer hover:animate-bounce" /></a>
            <FaEnvelope size={24} className="hover:text-weter_green duration-300 transition-all cursor-pointer hover:animate-bounce" />
        </div>
            <p className="mt-4 lg:mt-0 ">Copyright &copy; <span className="text-[#29a6a4] font-medium">Novasce</span> | Todos os direitos reservados</p>
        </footer>
    )
}