import { Button } from "flowbite-react";
import Header from "../components/Header.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import ScrollTopBtn from "../components/ScrollTopBtn.jsx";
import Contact from "../components/Contact.jsx";
export default function Home() {
  return (
    <>
      <div className="bg-white dark:bg-gray-900">
        <ScrollTopBtn />
        <div className="flex flex-col h-screen">
          <Header />

          <div className="flex-1">
            <Hero />
          </div>
        </div>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
