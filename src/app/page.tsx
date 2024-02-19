'use client'
import Image from 'next/image'

import profile from 'assets/images/profile.jpg'

import javascript from 'assets/images/javascript.svg'
import typescript from 'assets/images/typescript.svg'
import node from 'assets/images/node.svg'
import mongo from 'assets/images/mongo.svg'
import postgres from 'assets/images/postgres.svg'
import mysql from 'assets/images/mysql.svg'
import aws from 'assets/images/aws.svg'
import gcp from 'assets/images/gcp.svg'
import react from 'assets/images/react.svg'

export default function Home() {
  const skills = [
    {
      src: javascript,
      alt: 'JavaScript image'
    },
    {
      src: typescript,
      alt: 'TypeScript image'
    },
    {
      src: node,
      alt: 'NodeJs image'
    },
    {
      src: mongo,
      alt: 'MongoDB image'
    },
    {
      src: postgres,
      alt: 'PostgreSQL image'
    },
    {
      src: mysql,
      alt: 'MySQL image'
    },
    {
      src: aws,
      alt: 'AWS image'
    },
    {
      src: gcp,
      alt: 'GCP image'
    },
    {
      src: react,
      alt: 'ReactJs image'
    }
  ]

  const aboutMe = `
    Desenvolvedor desde 2016 com o foco em JavaScript, porém não preso às tecnologias, e sim em busca 
    de soluções. Posso dizer que tenho uma maior inclinação para o lado do Back-End, porém tenho um 
    bom conhecimento de tecnologias Front-End, como ReactJs e NextJs. Atualmente estou trabalhando 
    para o Grupo GFT, alocado no cliente BTG Pactual como desenvolvedor Back-End. No mais, posso 
    dizer que amo programar, musculação e artes marciais. E além de dev sou Faixa Preta de Karatê 🥋.
  `

  const experiences = [
    {
      company: 'GFT - BTG Pactual',
      role: 'Sênior Back-End Developer',
      from: 'Julho de 2021',
      to: 'Atual',
      description: `Desenvolvedor no Grupo GFT, alocado no cliente BTG. Desenvolvimento de APIs e serviços usando NodeJs
        com JavaScript, PostgeSQL, MySQL, RabbitMQ, Serverless, AWS, entre outras tecnologias.
      `
    },
    {
      company: 'CBYK - New Space',
      role: 'Full-Stack Developer',
      from: 'Fevereiro de 2020',
      to: 'Julho de 2021',
      description: `Desenvolvedor no Grupo CBYK, alocado no cliente New Space. Desenvolvimento de sistemas usando NodeJs com JavaScript
        pelo lado do Back-End, MongoDB como Banco de Dados, e ReactJs pelo lado do Front-End.        
      `
    },
    {
      company: 'Workana',
      role: 'On Demand Full-Stack Developer',
      from: 'Julho de 2019',
      to: 'Fevereiro de 2020',
      description: `Desenvolvimento de aplicações usando majoritariamente JavaScript. Já tendo desenvolvido sistemas completos
        usando NodeJs com ReactJs para sistemas Web, e ElectronJs para sistemas Desktop. Dentre eles, na parte de Banco de Dados, 
        usando bancos relacionais como o PostgresSQL, como não relacionais, como o MongoDB.
      `
    },
    {
      company: 'SofTeam | Empresa Júnior de Computação',
      role: 'Back-End Developer',
      from: 'Julho de 2016',
      to: 'Dezembro de 2019',
      description: `Desenvolvimento de aplicações usando NodeJs com JavaScript e MongoDB.
      `
    },
  ]

  const education = [
    {
      school: 'Universidade Tiradentes - UNIT',
      course: 'Graduação em Análise e Desenvolvimento de Sistemas',
      description: '',
      from: '2016',
      to: '2018'
    },
    {
      school: 'Estácio - FASE',
      course: 'Pós Graduação em Administração e Segurança de Sistemas Computacionais.',
      description: 'Tema do TCC: Infraestrutura como Código com o uso do Docker.',
      from: '2015',
      to: '2017'
    },
    {
      school: 'Universidade Tiradentes - UNIT',
      course: 'Informática Licenciatura',
      description: '',
      from: '2012',
      to: '2015'
    },
  ]
  return (
    <div className="relative text-gray-800 mb-16">
        <section className="flex flex-col items-center justify-center h-screen  -my-20 md:-mt-48 px-8">
            <div className="flex flex-col items-center justify-center text-center h-screen-half">
                <Image 
                  className="md:hidden object-cover w-15 h-40 rounded-full mb-5 ring-2 ring-gray-500/50 ring-offset-[10px]"
                  src={profile} 
                  alt="Foto do Perfil"
                  width={1000}
                  height={1000}
                />
                <h1 className="text-5xl sm:text-6xl lg:text-9xl">
                    Jefferson
                </h1>
                <h2 className="font-light text-4xl sm:text-5xl lg:text-8xl">
                    Web Developer
                </h2>
            </div>
        </section>
        <section className="flex items-center justify-between px-8 mb-20 tracking-wider">
            <div className="flex flex-col w-full md:w-1/3 space-y-12 text-center md:text-left">
                <div className="flex flex-col px-10 md:px-20">
                    <h3 className="text-xl font-bold">Skills</h3>
                    <span className="text-lg">
                      {
                        skills.map(skill => 
                          <Image 
                            className='mb-2'
                            key={skill.alt}
                            src={skill.src}
                            alt={skill.alt}
                            width={100}
                            height={100}
                          />  
                        )
                      }
                    </span>
                </div>
                <div className="px-10 md:px-20">
                    <h3 className="text-xl font-bold">
                      Sobre Mim
                    </h3>
                    <p className="w-full md:w-2/3">
                      { aboutMe }
                    </p>
                </div>
                <div className="px-10 md:px-20">
                    <h3 className="text-xl font-bold">Contato</h3>
                    <a className="text-xl hover:text-blue-600" href="mailto:jf.nts10@gmail.com">jf.tns10@gmail.com</a>
                </div>
            </div>
            <Image 
              className="hidden md:block object-cover w-1/4 h-screen rounded-full ring-2 ring-gray-500/50 ring-offset-[30px]"
              src={profile} 
              alt="Foto do Perfil"
              width={1000}
              height={1000}
            />
            <div className="hidden md:flex flex-col w-1/3 space-y-12 text-right">
                <div className="px-20">
                    <h4 className="text-xl font-bold">Experiência</h4>
                    <p className="text-6xl">
                      +{ new Date().getFullYear() - 2016 } 
                    </p>
                </div>
            </div>
        </section>
        <hr className="border-gray-400 mx-44" />
        <section className="px-20 mt-10">
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
              Experiência
            </h4>
            {
              experiences.map(experience => (
                <div key={experience.company} className="grid grid-cols-1 md:grid-cols-6 my-10">
                  <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                        <h5 className="text-xl md:text-2xl font-bold">
                          { experience.role }
                        </h5>
                        <h6 className="text-lg font-bold">
                          { experience.company }
                        </h6>
                        <p>{ experience.from } - {experience.to}</p>
                    </div>
                    <div className="flex flex-col col-span-4">
                        <p>
                          { experience.description }
                        </p>
                    </div>
                </div>
              ))
            }          
        </section>
        <hr className="border-gray-400 mx-44" />
        <section className="px-20 mt-10">
            <h4 className="mb-8 text-3xl font-bold text-center md:text-left">
                Educação
            </h4>
            {
              education.map(education => (
                <div 
                  key={education.course}
                  className="grid grid-cols-1 md:grid-cols-6 my-10"
                >
                  <div className="flex flex-col col-span-2 mb-4 md:mb-0">
                      <h5 className="text-xl md:text-2xl  font-bold">
                        { education.course }
                      </h5>
                      <h6 className="text-lg font-bold">
                        { education.school }
                      </h6>
                      <p>
                        { education.from } - { education.to }
                      </p>
                  </div>
                  <div className="flex flex-col col-span-4 ">
                      <p>
                        { education.description }
                      </p>
                  </div>
              </div>
              ))
            }
        </section>
      </div>
  )
}
