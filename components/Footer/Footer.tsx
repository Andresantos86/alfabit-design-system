import Image from "next/image"
import jacadLogo from "../../public/logo-alfabit-branco.png"
import jacadLgpd from "../../public/logo-alfabit-branco.png"
import { MapPinIcon } from "@heroicons/react/24/solid"
import { FaWhatsapp } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

interface FooterProps {
  backgroundConfig?: string
}


export const Footer = ({ backgroundConfig }: FooterProps) => {
  return (
    <footer className="w-full sm:px-60 sm:py-14 flex justify-center items-center" style={{ background: backgroundConfig || "#515151" }}>
      <div className="border border-black flex flex-col justify-center items-center gap-12 w-full max-w-5xl">

        <div className="flex flex-col sm:flex-row justify-between items-center gap-10 w-full pt-4">
          <div className="flex flex-row items-start gap-6"> {/* items-start to align at the top */}
            <Image
              className=""
              alt="logo 1"
              src={jacadLogo}
              width={120}
              height={30}
            />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              <div className="flex items-center">
                <MapPinIcon className="w-5 h-5 mr-1" />
                <p className="text-slate-950">R. Paraná, 2282 - Centro, Medianeira - PR</p>
              </div>
              <div className="flex items-center ">
                <FaWhatsapp className=""/>
                <p>(45) 3264-0961</p>
              </div>
              <div className="flex items-center">
              <CiMail />
                <p>contact@mysite.com</p>
              </div>
              <div className="flex justify-center sm:justify-start items-center gap-6 mt-4"> {/* Icons list aligned to text */}
                <div>Icone</div>
                <div>Icone</div>
                <div>Icone</div>
                <div>Icone</div>
                <div>Icone</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center w-full mt-4">
          <Image
            className=""
            alt="logo 1"
            src={jacadLogo}
            width={120}
            height={30}
          />
          <Image
            className=""
            alt="logo 2"
            src="/logo-alfabit-branco.png"
            width={150}
            height={30}
          />
        </div>

      </div>
    </footer>
  );
};