export interface navItem {
    text: string;
    targedId: string;
}

export interface HomeItem {
    title: string;
    description: string;
    btnText: string;
    BtnServices: string;
}

export interface AboutItem {
    pretitle: string;
    description: string;
    btnText: string;
}

export interface WhatWeDoItem {
    pretitle: string;
    title: string;
    cardsBentoBox: {
        title: string;
        description?: string;
    }[]
}

export interface PeoplesTestimonials {
    img: string;
    nameAndVocation: string;
    testimonial: string;
}

export interface FAQSection {
    question: string;
    answer: string;
}
export interface FaqDataType {
    description: string;
    FAQ: string;
}

export interface ContactItem {
    description: string;
    btnText: string;
}

export const nav = [
    {text: 'Home', href: '#Home'},
    {text: 'Sobre', href: '#About'},
    {text: 'O que fazemos', href: '#whatWeDo'},
    {text: 'Depoimentos', href: '#Testimonials'},
    {text: 'Contato', href: '#Contact'}
]

export const homeData = [
    {
        description: 'Revolucione o desenvolvimento de sistemas e websites com soluções inovadoras e exclusivas.',
        btnText: 'Saiba mais',
        btnServices: 'Nossos Serviços',
    }
]

export const about = [
    {
        pretitle: 'História, Valores e Tecnologia',
        description: 'Na Novasce, somos mais do que uma empresa de tecnologia; somos arquitetos do futuro digital. Nossa missão é oferecer soluções que não apenas respondem às demandas do presente, mas transcendem, moldando o amanhã com um compromisso inabalável com a inovação. Aqui na Novasce, enxergamos a tecnologia como uma força que não apenas atende necessidades, mas cria oportunidades e transforma realidades.',
        btnText: 'Fale conosco',
    }
]

export const whatWeDoData = [
    {
        pretitle: 'Desenvolvendo o futuro Digital',
        title: 'O que fazemos',

        CardsBentoBox: [
            {
                title: 'Criação de websites',
                description: 'Desenvolvimento de websites com as melhores tecnologias do mercado, do design à implementação, garantindo uma experiência do usuário incrível e desempenho otimizado.',
                imageUrl: 'website.png'
            },
            {
                title: 'Criação de Aplicativos',
                description: 'Desenvolvimento de software para dispositivos móveis, desktops ou web, focando na experiência do usuário e na funcionalidade.',
                imageUrl: 'Phone.png'
            },
            {
                title: 'Desenvolvimento de sistemas',
                description: 'Construção de soluções de software personalizadas para atender às necessidades específicas de empresas, como sistemas de gestão e automação.',
                imageUrl: 'SkillsBentoBox.png'
            },
            {
                title: 'Desenvolvimento de APIs',
                description: 'Criação de interfaces que permitem a comunicação entre diferentes sistemas, facilitando a troca de dados e a integração de funcionalidades.',
                imageUrl: 'code1.png'
            },
            {
                title: 'Infraestrutura em nuvem',
                description: 'Fornecemos recursos de computação (servidores, armazenamento, etc.) pela internet, oferecendo escalabilidade e redução de custos sem depender de hardware local.',
                imageUrl: 'cloud.png',
            },
            {
                title: 'Modelagem de banco de dados',
                description: 'O desenvolvimento de um banco de dados envolve planejamento, modelagem, escolha de SGBD, estruturação, implementação, teste e manutenção para garantir eficiência e confiabilidade.',
                imageUrl: 'sql.png'
            },
            {
                title: 'Consultoria de TI',
                description: 'Avaliação e recomendação de estratégias tecnológicas para otimizar processos e infraestrutura de tecnologia, melhorando eficiência e segurança.',
                imageUrl: 'laptop1.png'
            },
            {
                title: 'Desenvolvemos sistemas para clientes internacionais',
                pretitle: 'Curiosidade',
                description: 'Nossa expertise se estende para além das fronteiras, com clientes em diversos países que confiam em nossa capacidade de entregar soluções tecnológicas inovadoras.',
                imageUrl: '/code2.png'
            }
        ]
    }
]

export const PeoplesTestimonials = [
    {  
        nameAndVocation: 'Mariana Silva | Tech Menager',
        testimonial: '"A Novasce revolucionou nossa abordagem tecnológica! As soluções personalizadas que eles desenvolveram elevaram a eficiência da nossa equipe a um novo patamar. Recomendo a todos!"'
    },
    {   
    
        nameAndVocation: 'Ana Costa | Diretora de Marketing',
        testimonial: '"A Novasce transformou nossa estratégia digital. A qualidade e a dedicação da equipe em entender nossas necessidades foram impressionantes. Estamos muito satisfeitos com os resultados!"'
    },
    {
    
        nameAndVocation: 'Lucas Ferreira | Programador',
        testimonial: '"Eu sempre admirei a capacidade da Novasce de adaptar soluções às demandas do mercado. O suporte contínuo que recebemos é incomparável e faz toda a diferença!"',
    },
    {
    
        nameAndVocation: 'Jorge Augusto | Mecânico',
        testimonial: '"Parabéns pelo atendimento, realmente a Novasce é diferenciada nos serviços que eles prestam, fico muito feliz de ter encontrado a empresa certa! Muito Obrigado! Recomendo a todos!!"',
    }
]

export const FaqData = [
    {
        description: 'Encontre aqui as respostas para as dúvidas mais comuns sobre nossos serviços e soluções. Se não encontrar o que procura, entre em contato com nossa equipe!'
    }
    
]

export const contact = [
    {
        description: 'Entre em contato conosco hoje e vamos transformar suas ideias em realidade.',
        btnText: 'Entre em contato'
    }
]

