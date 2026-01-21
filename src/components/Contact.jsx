import {
  Footer,
  FooterBrand,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import renanImg from "../assets/images/renan.webp";

import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";

export default function Contact() {
  return (
    <Footer container id="contact" className="bg-gray-100 dark:bg-gray-800 mt-12">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          {/* <div>
            <FooterBrand
              href="/"
              src={renanImg}
              alt="Logo"
              name="Renan Aguiar"
            />
          </div> */}

          <div className="dark:text-white grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-12">
            <div>
              <FooterTitle title="Contato" />
              <FooterLinkGroup col>
                <FooterLink href="mailto:aguiarrenan417@gmail.com">
                  <BsEnvelope className="hidden md:inline mr-2 " />{" "}
                  aguiarrenan417@gmail.com
                </FooterLink>
                <FooterLink href="tel:+5585994816245">
                  <BsTelephone className="mr-2 inline" /> +55 (88) 994816245
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Localização" />
              <FooterLinkGroup col>
                <FooterLink href="https://maps.google.com?q=Morada+Nova+-+CE,+Brasil">
                  Morada Nova - CE, Brasil
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Redes sociais" />
              <FooterLinkGroup col>
                <FooterLink href="https://github.com/renandev0923">
                  Github
                </FooterLink>
                {/* <FooterLink href="https://linkedin.com/in/seuusuario">
                  LinkedIn
                </FooterLink> */}
              </FooterLinkGroup>
            </div>
          </div>
        </div>

        <FooterDivider />

        {/* Copyright + ícones sociais */}
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="/" by="Renan Aguiar" year={2026} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            {/* <FooterIcon
              href="https://facebook.com/seuusuario"
              icon={BsFacebook}
            /> */}
            <FooterIcon
              href="https://instagram.com/renan.aguiar09"
              icon={BsInstagram}
            />
            {/* <FooterIcon
              href="https://twitter.com/seuusuario"
              icon={BsTwitter}
            /> */}
            <FooterIcon href="https://github.com/renandev0923" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
