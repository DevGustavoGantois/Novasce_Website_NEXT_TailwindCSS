import React from 'react';
import { whatWeDoData } from '@/data/dataInformationsSection'; 

export const WhatWeDoSection: React.FC = () => {
    const { pretitle, title, CardsBentoBox } = whatWeDoData[0];

    return (
        <section className="py-10 px-5 bg-n-9" id='#whatWeDo'>
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-white">{pretitle}</p>
                <h1 className="h1 text-white mb-12">{title}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {CardsBentoBox.map((card, index) => {
                        const isWebDesign = card.title === 'Criação de websites';
                        const cardClasses = [
                            'relative rounded-3xl shadow-lg flex flex-col justify-between text-white transition-transform transform hover:scale-105 duration-300 ',
                            isWebDesign ? 'col-span-1 row-span-2 h-[500px]' : 'col-span-1 h-[350px]',
                        ].join(' ');

                        return (
                            <div
                                key={index}
                                className={cardClasses}
                                style={{
                                    backgroundImage: isWebDesign ? "url('/website.png')" : `url(${card.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
                                
                                {isWebDesign && (
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[#003833] rounded-3xl opacity-50"></div>
                                )}
                                
                                <div className="relative z-10 flex-1 flex flex-col justify-between p-4 mb-2">
                                    <div className="text-left">
                                        {card.pretitle && <p className="text-gray-100 text-sm">{card.pretitle}</p>}
                                        <h2 className="font-bold text-xl mb-2">{card.title}</h2>
                                        {card.description && <p className="text-gray-300">{card.description}</p>}
                                    </div>
                                    
                                    {/* Botão com gradiente */}
                                    <button className="mt-4 rounded-full bg-gradient-to-r from-[#00666C] to-[#102032] text-white py-2 px-6 hover:bg-[##65c0ba] ">
                                        <a href="https://www.instagram.com/novasce.ti/?hl=pt-br" target='_blank'>Saiba mais</a>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
