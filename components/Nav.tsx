'use client'

import { useState } from "react";
import { FaStream, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { nav } from "@/data/dataInformationsSection";

export function Nav() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        event.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 80; // Ajuste do deslocamento
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }

        setIsMobileMenuOpen(false);
    };

    return (
        <nav className='fixed top-4 z-50 flex w-full flex-col items-center justify-center text-white'>
            <div className='neon-border flex w-full items-center justify-between overflow-y-hidden p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
                <Image src='/blackLogo.svg' alt="logo" width={80} height={22} />
                <div className='hidden space-x-6 lg:flex'>
                    {nav.map((link, index) => (
                        <a 
                            key={index} 
                            href={`#${link.href}`} 
                            className={`text-white ${index !== 0 ? 'border-l-2 border-neutral-300/20 pl-2' : ''} hover:opacity-50`} 
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className='lg:hidden'>
                    <button onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? <FaTimes /> : <FaStream />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='w-full backdrop-blur-lg lg:hidden'>
                    {nav.map((link, index) => (
                        <a 
                            key={index} 
                            href={`#${link.href}`} 
                            className='block p-4 tracking-tighter' 
                            onClick={(e) => handleScroll(e, link.href)}
                        >
                            {link.text}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
}