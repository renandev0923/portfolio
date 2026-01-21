import { Card, Progress } from "flowbite-react";
import tailwindLogo from "../assets/images/tailwindcss.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faNodeJs,
  faPhp,
  faLaravel,
  faFigma,
  faBootstrap,
  faHtml5,
  faCss3,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";
import { faDatabase, faLeaf } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Skills() {
  useEffect(() => {
    ScrollReveal().reveal("#skills", {
      duration: 800,
      distance: "80px",
      easing: "ease-in-out",
      origin: "bottom",
      reset: false,
    });
  }, []);
  return (
    <section
      id="skills"
      className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 flex flex-col items-center text-center"
    >
      <div className="mx-auto max-w-5xl px-4 py-16">
        {/* Título */}
        <div className="text-left mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            Minhas Habilidades
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Tecnologias que estudo e aplico em projetos pessoais.
          </p>
        </div>
        {/* Grid de Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faHtml5}
                className="text-orange-500 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">HTML5</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Estrutura de páginas web.
              </p>
              <Progress progress={100} color="green" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faCss3}
                className="text-blue-600 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">CSS3</h3>
              <p className="text-gray-600 dark:text-gray-400 text-nowrap">
                Estilização e layout de páginas web.
              </p>
              <Progress progress={90} color="green" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faJs}
                className="text-yellow-300 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">JavaScript</h3>
              <p className="text-gray-600 dark:text-gray-400 text-nowrap">
                Front-end e back-end.
              </p>
              <Progress progress={90} color="green" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faReact}
                className="text-blue-500 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">React</h3>
              <p className="text-gray-600 dark:text-gray-400 text-nowrap">
                Interfaces modernas e responsivas.
              </p>
              <Progress progress={35} color="red" className="w-52 mt-4" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faNodeJs}
                className="text-green-600 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">Node.js</h3>
              <p className="text-gray-600 dark:text-gray-400">
                APIs e aplicações escaláveis.
              </p>
              <Progress progress={60} color="yellow" className="w-52 mt-4" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faPhp}
                className="text-indigo-700 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">PHP</h3>
              <p className="text-gray-600 dark:text-gray-400">Web dinâmico.</p>
              <Progress progress={100} color="green" className="w-52 mt-4" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faLaravel}
                className="text-red-600 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">Laravel</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Framework robusto em PHP.
              </p>
              <Progress progress={30} color="red" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faBootstrap}
                className="text-purple-700 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">Bootstrap</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Framework CSS utilitário.
              </p>
              <Progress progress={100} color="green" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <SiTailwindcss className="text-cyan-500 text-5xl mb-4" />
                <h3 className="text-xl font-bold dark:text-white">TailwindCSS</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Framework CSS utilitário.
                </p>
              <Progress progress={100} color="green" className="w-52 mt-4" />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faDatabase}
                className="text-blue-600 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">MySQL</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Banco de dados relacional.
              </p>
              <Progress progress={80} color="green" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faGitAlt}
                className="text-orange-500 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">Git</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Controle de versão e colaboração.
              </p>
              <Progress progress={35} color="red" className="w-52 mt-4" />
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-600 text-5xl mb-4"
              />
              <h3 className="text-xl font-bold dark:text-white">GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Repositórios e colaboração.
              </p>
              <Progress progress={60} color="yellow" className="w-52 mt-4" />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
