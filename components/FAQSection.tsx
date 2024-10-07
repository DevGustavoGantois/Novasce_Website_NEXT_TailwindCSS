'use client'

import Image from "next/image";
import { useState } from "react";
import { BiChevronRight, BiChevronUp } from "react-icons/bi";

const FaqData = [
    {
        question: 'Como a Novasce garante a segurança dos meus dados?',
        answer: 'A Novasce utiliza as melhores práticas de segurança, incluindo criptografia e acesso restrito aos dados.',
    },
    {
        question: 'Como posso solicitar uma consultoria inicial com a Novasce?',
        answer: 'Para solicitar uma consultoria inicial, entre em contato através do nosso site.',
    },
    {
        question: 'Como funciona o processo de implementação de um projeto na Novasce?',
        answer: 'O processo inclui planejamento, execução e acompanhamento contínuo.',
    },
];

export function FAQSection() {
    return (
        <section className="mb-40 flex flex-col justify-center lg:justify-around items-center lg:flex-row">
            <div className="text-center lg:text-start">
                <h1 className="h1 text-white">Perguntas <span className="text-[#29a6a4]">Frequentes</span></h1>
                <p className="mt-8 text-white">Encontre aqui as respostas para as dúvidas mais comuns sobre nossos serviços e soluções. Se não encontrar o que procura, entre em contato com nossa equipe!</p>
                <div className="mt-6">
                    {FaqData.map((item, index) => {
                        const [isOpen, setIsOpen] = useState(false);

                        const toggleAnswer = () => {
                            setIsOpen((prev) => !prev);
                        };

                        return (
                            <div key={index} className="mb-2 flex flex-col gap-0">
                                <div 
                                    className="cursor-pointer text-white" 
                                    onClick={toggleAnswer} 
                                >
                                    <div className="flex items-center justify-between bg-gradient-to-r from-black to-[#102032] p-6 rounded-full transition-all">
                                        <span className="text-white font-medium">{item.question}</span>
                                        <span className="transition-transform duration-300">{isOpen ? <BiChevronUp size={15} /> : <BiChevronRight size={15} />}</span> 
                                    </div>
                                </div>
                                <div 
                                    className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40' : 'max-h-0'}`}
                                >
                                    {isOpen && ( 
                                        <p className="text-white bg-gradient-to-r from-[#00666C] to-[#102032] rounded-full shadow-xl p-4 mb-8">{item.answer}</p>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="mt-16 lg:mt-0 mb-24">
                <Image src='/imgFAQ.png' alt="FAQ Image" className="object-contain" width={1820} height={1820} />
            </div>
        </section>
    );
}