import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  DarkThemeToggle,
} from "flowbite-react";
import { useNavScroll } from "../hooks/useNavScroll";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

export default function Header() {

  const { scrolled } = useNavScroll();
  useEffect(() => {
    ScrollReveal().reveal("#nav", {
      duration: 800,
      distance: "80px",
      easing: "ease-in-out",
      origin: "top",
      reset: false,
    });
  }, []);
  return (
    <Navbar fluid id="nav" className={`${scrolled ? "bg-white dark:bg-gray-800 shadow-md" : "bg-transparent dark:bg-transparent"} rounded-b-lg fixed top-0 left-0 right-0 z-50`} >
      <NavbarBrand href="/">
        <span className="font-sans self-center whitespace-nowrap text-lg font-semibold dark:text-white">
        Renan Aguiar 
        </span>
      </NavbarBrand>

      {/* Botão Dark Mode + Toggle mobile */}
      <div className="flex md:order-2 items-center gap-2">
        <DarkThemeToggle className="cursor-pointer"/>
        <NavbarToggle />
      </div>

      {/* Links */}
      <NavbarCollapse>
        <NavbarLink href="/" >
          Home
        </NavbarLink>
        <NavbarLink href="#about">Sobre</NavbarLink>
        <NavbarLink href="#skills">Habilidades</NavbarLink>
        <NavbarLink href="#projects">Projetos</NavbarLink>
        <NavbarLink href="#contact">Contato</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
