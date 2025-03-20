import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { AiOutlineExport } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { Tooltip } from "@heroui/react";
import cvGian from "../../extra/GIANCARLOS_CV.pdf";

import { RotateIcons } from "./RotateIcons";

export const MeSection = () => {
  const tooltips = [
    /*{
      icon: <FaLinkedin className="text-white text-2xl" />,
      content: "¡Visita mi linkedin!",
    },*/
    {
      icon: <MdEmail className="text-white text-2xl" />,
      content: "¡Escribeme a mi correo!",
      href: "mailto:giantrabajodev@gmail.com",
    },
    {
      icon: <FaGithub className="text-white text-2xl" />,
      content: "¡Visita mi github!",
      href: "https://github.com/gianLoyola",
    },
    {
      icon: <AiOutlineExport className="text-white text-2xl" />,
      content: "¡Descarga mi cv!",
      download: "Cv_Giancarlos",
      href: cvGian,
    },
  ];

  return (
    <div className="min-h-screen pb-24  flex flex-col justify-center items-center lg:px-16">
      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl w-full  lg:py-0">
        {/* Texto */}
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-2xl mb-2  font-bold text-white lg:text-5xl lg:mb-4">
            Giancarlos Loyola Caraza
          </h1>
          <h2 className="text-xl mb-2 font-bold text-[#4383D7] lg:text-3xl lg:mb-4">
            Programador Junior
          </h2>

          <p className="text-md lg:text-xl text-[#9C9C9C] mb-8">
            Soy un desarrollador apasionado por crear soluciones
            <span className="text-[#DF9D78]"> innovadoras y eficientes</span>.
            Destaco por mi{" "}
            <span className="text-[#D3E2F1]">
              adaptabilidad, rápido aprendizaje y habilidad para el trabajo en
              equipo
            </span>
            .
          </p>

          <div className="flex  gap-4 justify-center lg:justify-start ">
            {tooltips.map((x, index) => (
              <Tooltip key={index} content={x.content}>
                <a
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  {...(x.download && { download: x.download })}
                >
                  {x.icon}
                </a>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Imagen */}
        <div className="w-full lg:w-2/3 flex justify-center pt-4">
          <RotateIcons />
        </div>
      </div>
    </div>
  );
};
