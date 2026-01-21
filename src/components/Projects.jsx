import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { SiVercel, SiNetlify, SiHeroku, SiRender, SiGooglecloud } from "react-icons/si";
import { Button } from "flowbite-react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Projects() {
    useEffect(() => {
      ScrollReveal().reveal("#projects", {
        duration: 800,
        distance: "80px",
        easing: "ease-in-out",
        origin: "bottom",
        reset: false,
      });
    }, []);
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex items-center"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Título */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Meus Projetos
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Alguns dos trabalhos e estudos que desenvolvi, com links para ver
            mais detalhes.
          </p>
        </div>

        {/* Timeline de Projetos */}
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2025</TimelineTime>
              <TimelineTitle>OSLibrary</TimelineTitle>
              <TimelineBody>
               Um sistema completo de gerenciamento de bibliotecas desenvolvido com PHP (composer), MySQL, jQuery e Tailwindcss. Nele, implementei funcionalidades como cadastro de livros por ISBN, OSLibrary Book Search com API do GoogleBooks, controle de empréstimos, devoluções e gerenciamento de usuários. Nele eu foquei principalmente nas escolas públicas que precisam de uma solução simples e eficiente para gerenciar suas bibliotecas.
                <div className="flex mt-4">
                  <Button
                    color="transparent"
                    href="https://github.com/seuusuario/portfolio"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl hover:text-gray-600 transition"
                    />
                  </Button>
                  <Button
                    color="transparent"
                    href="https://seuportfolio.vercel.app"
                    target="_blank"
                  >
                    <SiGooglecloud className="text-gray hover:text-blue-400 text-xl" />
                  </Button>
                </div>
              </TimelineBody>
            </TimelineContent>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2025</TimelineTime>
              <TimelineTitle>ColonialCoffee</TimelineTitle>
              <TimelineBody>
               Essa foi a minha primeira aplicação utilizando Java puro e Swing para a interface gráfica. 
               Desenvolvi um sistema de gerenciamento para uma cafeteria, onde pude aplicar conceitos de POO, 
               manipulação de arquivos e design de interfaces. Embora não seja o meu foco enquanto programador, 
               Java é uma linguagem que me ajudou a entender muitos conceitos fundamentais de programação.
                <div className="flex mt-4">
                  <Button
                    color="transparent"
                    href="https://github.com/seuusuario/portfolio"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl hover:text-gray-600 transition"
                    />
                  </Button>
                  <Button
                    color="transparent"
                    href="https://seuportfolio.vercel.app"
                    target="_blank"
                  >
                    <SiGooglecloud className="text-gray hover:text-blue-400 text-xl" />
                  </Button>
                </div>
              </TimelineBody>
            </TimelineContent>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2025</TimelineTime>
              <TimelineTitle>Agendify</TimelineTitle>
              <TimelineBody>
               Aplicação web de agendamento desenvolvida com PHP, MySQL, Bootstrap e jQuery, nesse projeto foquei em criar um sistema funcional 
               onde os usuários podem marcar compromissos com locais ou equipamentos específicos cadastrados 
               e gerenciados por um administrador do sistema. Aprendi bastante sobre desenvolvimento backend com PHP e integração com banco de dados MySQL.
                <div className="flex mt-4">
                  <Button
                    color="transparent"
                    href="https://github.com/seuusuario/portfolio"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl hover:text-gray-600 transition"
                    />
                  </Button>
                  <Button
                    color="transparent"
                    href="https://seuportfolio.vercel.app"
                    target="_blank"
                  >
                    <SiGooglecloud className="text-gray hover:text-blue-400 text-xl" />
                  </Button>
                </div>
              </TimelineBody>
            </TimelineContent>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2025</TimelineTime>
              <TimelineTitle>ChessJS</TimelineTitle>
              <TimelineBody>
                Jogo responsivo de xadrez desenvolvido com JS puro, HTML5, CSS3
                e jQuery. Nele eu aprendi ES6+, manipulação do DOM, lógica de
                jogos e design responsivo.
                <div className="flex mt-4">
                  <Button
                    color="transparent"
                    href="https://github.com/seuusuario/portfolio"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl hover:text-gray-600 transition"
                    />
                  </Button>
                  <Button
                    color="transparent"
                    href="https://seuportfolio.vercel.app"
                    target="_blank"
                  >
                    <SiGooglecloud className="text-gray hover:text-blue-400 text-xl" />
                  </Button>
                </div>
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </section>
  );
}
