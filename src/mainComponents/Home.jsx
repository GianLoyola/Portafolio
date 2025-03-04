import { MeSection } from "../subComponents/subDashboard/MeSection";
import { Proyects } from "../subComponents/subDashboard/Proyects";
import { Experience } from "../subComponents/subDashboard/Experience";
import { AboutMe } from "../subComponents/subDashboard/AboutMe";
import { Button } from "@heroui/react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <div className="px-8">
      <MeSection />
      <Proyects />
      <Experience />
      <AboutMe />
      <div className="flex justify-center items-center py-4 ">
        <motion.div
          animate={{
            y: [0, -10, 0], // Animación de subida y bajada
          }}
          transition={{
            duration: 1.3,
            repeat: Infinity, // Repetir la animación indefinidamente
            ease: "linear",
          }}
        >
          <Button
            onPress={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
            size="lg"
            className="text-lg p-5 text-[#4383D7] hover:text-[#3672c6] transition-colors border-0 bg-transparent"
            color="primary"
          >
            Ir al inicio <MdKeyboardDoubleArrowUp />
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
