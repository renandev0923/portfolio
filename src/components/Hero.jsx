import renanImg from "../assets/images/renan.webp";
import { Kbd } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typewriter from "typewriter-effect";
import {
  faJs,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3,
  faPhp,
  faLaravel,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Hero() {
  useEffect(() => {
    ScrollReveal().reveal("#hero", {
      duration: 800,
      distance: "80px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
  }, []);

  return (
    <section
      id="hero"
      className="font-sans bg-white dark:bg-gray-900 transition-colors duration-300 h-full flex items-center"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Coluna esquerda */}
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-2">
            Oi, eu sou
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
            Renan Aguiar
          </h1>
          <h2 className="md:text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400">
            <Typewriter
              options={{
                strings: [
                  "Desenvolvedor Full-Stack",
                  "Técnico em Informática",
                  "Apaixonado por Tecnologia",
                  "Solucionador de Problemas"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
          <div className="flex flex-wrap gap-2 my-2">
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <FontAwesomeIcon
                icon={faJs}
                className="text-yellow-300 text-3xl"
                title="JavaScript"
              />
            </span>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-500 text-3xl"
                title="React"
              />
            </span>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <FontAwesomeIcon
                icon={faLaravel}
                className="text-red-500 text-3xl"
                title="Laravel"
              />
            </span>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <FontAwesomeIcon
                icon={faPhp}
                className="text-indigo-700 text-3xl"
                title="PHP"
              />
            </span>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-green-500 text-3xl"
                title="Node.js"
              />
            </span>
            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-gray-100 dark:bg-gray-800 p-3 hover:scale-110 transition-transform">
              <SiTailwindcss className="text-cyan-500 text-3xl" title="Tailwindcss" />
            </span>
          </div>
        </div>

        {/* Coluna direita */}
        <div className="flex flex-col justify-start md:justify-center items-center space-y-4">
          <img
            src={renanImg}
            alt="Renan Aguiar"
            className="h-72 w-72 rounded-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
