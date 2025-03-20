import { motion } from "framer-motion";
import { SiJavascript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiNextui } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { Image } from "@heroui/react";
import fotoPerfil from "../../img/Foto2bg.png"
export const RotateIcons = () => {
  return (
    <div className="relative flex justify-center items-center ~w-[250px]/[500px] ~h-[250px]/[500px]">
      <div className="flex justify-center items-center ~w-[250px]/[500px] ~h-[250px]/[500px] rounded-full overflow-hidden z-0 border-3 border-blue-500">
        <Image
          src={fotoPerfil}
          alt="Foto de perfil"
          className="w-full h-full object-contain "
  
        />
      </div>
      
      {/* Contenedor de iconos rotantes */}
      <motion.div
        className="absolute inset-0 z-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {/* Contenedor para limitar el área de los iconos */}
        <div className="relative w-full h-full">
          {/* JavaScript - arriba */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
            <SiJavascript className="text-4xl md:text-5xl lg:text-5xl text-yellow-500" />
          </div>
          <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <IoLogoReact className=" text-4xl lg:text-5xl text-[#50D6FF]" />
          </div>
          <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
            <FaHtml5 className=" text-4xl lg:text-5xl text-orange-500" />
          </div>
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">
            <FaCss3Alt className="text-4xl lg:text-5xl text-blue-600" />
          </div>
          <div className="absolute top-1/4 left-1/4 transform -translate-x-12 -translate-y-12">
            <SiNextui className="text-4xl lg:text-5xl text-[#bd39dd]" />
          </div>
          <div className="absolute bottom-1/4 right-1/4 transform translate-x-12 translate-y-12">
            <RiTailwindCssFill className="text-4xl lg:text-5xl text-[#00BCFF]" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};
