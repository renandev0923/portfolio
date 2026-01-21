import {
  Timeline,
  TimelineItem,
  TimelinePoint,
  TimelineContent,
  TimelineTime,
  TimelineTitle,
  TimelineBody,
} from "flowbite-react";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function About() {
  useEffect(() => {
    ScrollReveal().reveal("#about", {
      duration: 800,
      distance: "80px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 flex items-center"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Título */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Sobre Mim
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Um pouco da minha trajetória acadêmica e profissional como futuro
            desenvolvedor.
          </p>
        </div>

        {/* Timeline */}
        <Timeline>
          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2024 - 2026</TimelineTime>
              <TimelineTitle>Técnico em Informática</TimelineTitle>
              <TimelineBody>
                EEEP Osmira Eduardo de Castro — foco em programação, redes de
                computadores, manutenção de hardware e designer em geral.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelinePoint />
            <TimelineContent>
              <TimelineTime>2025 - Atual</TimelineTime>
              <TimelineTitle>Freelancer & Consultor</TimelineTitle>
              <TimelineBody>
                Desenvolvimento de soluções personalizadas, APIs e aplicações
                escaláveis para clientes diversos com foco em Laravel e PHP.
              </TimelineBody>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <p className="font-sans mt-12 text-left text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto relative">
          <span className="block mb text-5xl text-blue-600 dark:text-blue-400">
            “
          </span>
          Meu estilo de trabalho é{" "}
          <span className="font-semibold">colaborativo</span> e orientado a
          resultados, sempre buscando superar as expectativas dos clientes. Não
          se trata apenas de{" "}
          <span className="font-semibold">escrever códigos</span>, mas de criar
          soluções que realmente façam a diferença.
          <span className="block text-right mt-4 text-5xl text-blue-600 dark:text-blue-400">
            ”
          </span>
        </p>
      </div>
    </section>
  );
}
