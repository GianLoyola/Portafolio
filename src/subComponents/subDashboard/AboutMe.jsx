import { FaUser } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiOutlineExport } from "react-icons/ai";
import { Tooltip } from "@heroui/react";
import fotoPerfil from "../../img/Foto2bg.png";
import cvGian from "../../extra/GIANCARLOS_CV.pdf"

export const AboutMe = () => {
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
      download:  "Cv_Giancarlos",
      href: cvGian
    },
  ];

  return (
    <div id="contact" className="py-16">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <FaUser className="mr-3 text-[#4383D7]" />
          Un poco más sobre mí
        </h2>
        <p className="text-lg text-[#9C9C9C] mb-8 max-w-2xl text-center">
          Conoce un poco más sobre quién soy y qué hago
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="relative mb-6">
              <div
                className="w-64 h-64 rounded-full p-1"
                style={{
                  background: "linear-gradient(135deg, #4383D7, #0E1425)",
                  boxShadow: "0 0 25px rgba(67, 131, 215, 0.4)",
                }}
              >
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#0E1425]">
                  <img
                    src={fotoPerfil}
                    alt="Foto de perfil"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-4 justify-center lg:justify-start ">
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

          <div className="w-full md:w-2/3">
            <div
              className="bg-[#0E1425] rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              style={{
                borderLeft: "4px solid #4383D7",
              }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Hola! Soy Giancarlos
              </h3>

              <div className="text-[#9C9C9C] space-y-4">
                <p>
                  Soy un desarrollador{" "}
                  <span className="text-[#DF9D78]">Front-End Junior</span>{" "}
                  especializado en{" "}
                  <span className="text-[#D3E2F1]">
                    React, JavaScript y Tailwind CSS
                  </span>
                  . Me encanta crear interfaces modernas, optimizar la
                  experiencia del usuario y escribir código limpio.
                </p>
                <p>
                  Disfruto los desafíos y mejorar mis habilidades con proyectos
                  prácticos. Tengo experiencia en{" "}
                  <span className="text-[#D3E2F1]">
                    integraciones de APIs, sistemas CRUD y mejoras en UI/UX
                  </span>
                  .
                </p>
                <p>
                  Siempre busco aprender{" "}
                  <span className="text-[#DF9D78]">nuevas tecnologías</span> y
                  mejorar mis proyectos. Cuando no programo, exploro
                  herramientas de desarrollo y aprendo de la comunidad tech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
