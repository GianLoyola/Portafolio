import { proyects } from "../../context/ProyectsData";
import { Button } from "@heroui/react";
import { Tooltip } from "@heroui/tooltip";
import { UseGlobalContext } from "../../context/GlobalProvider";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Proyects = () => {
  //Cuando esten seleccionados que salga el color y si no que este en gris
  const { add_RemoveIcons, iconActive, idIconsActive } = UseGlobalContext();

  const [activeProyect, setActiveProyect] = useState([]);

  useEffect(() => {
    if (idIconsActive.length > 0) {
      const activeProyects = proyects.filter((proyect) =>
        proyect.technologies.some((tech) => idIconsActive.includes(tech))
      );
      setActiveProyect(activeProyects);
    } else {
      setActiveProyect(proyects);
    }
  }, [idIconsActive]);

  //Hay que averiguar como comparar estos filtros con los del array de icons o retonar objetos complejos en el mismo filterReducer
  //Tambien podriamos poner el filters arriba y mediante una condicional tal vez en una propiedad "active" gestionar los estilos...
  //O tal vez algo completamente diferente, hay que pensarla bien
  return (
    <div id="proyects" className="py-16">
      {/* Sección de filtros de tecnologías */}
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-8">Mis Proyectos</h2>
        <p className="text-lg text-[#9C9C9C] mb-8 max-w-2xl text-center">
          Selecciona las tecnologías para filtrar los proyectos
        </p>
        <div className="flex flex-row flex-wrap items-center justify-center gap-6 md:gap-8">
          {iconActive.map((x, index) => {
            const IconComponent = x.icon;
            return (
              <Tooltip
                key={index}
                content={x.label}
                className={`${x.color} ${
                  x.textColor ? x.textColor : "text-white"
                }`}
              >
                <Button
                  radius="full"
                  className="bg-transparent min-w-0 w-[65px] h-[65px] md:w-[75px] md:h-[75px] p-0 shrink-0 relative"
                  onPress={() => {
                    add_RemoveIcons(x.id);
                  }}
                >
                  <div
                    className={`absolute inset-0 ${
                      x.active ? x.color : "bg-[#3f3f3f]"
                    } blur-md opacity-35`}
                  ></div>
                  <IconComponent
                    className={`text-5xl md:text-6xl relative z-10`}
                    style={
                      x.active == true
                        ? { color: x.activeColor }
                        : { color: "#3f3f3f" }
                    }
                  />
                </Button>
              </Tooltip>
            );
          })}
        </div>
      </div>

      {/* Sección de proyectos */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
          {activeProyect.map((proyect, index) => (
            <div
              key={index}
              className="bg-[#0E1425] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col md:h-[550px] w-full max-w-[420px]"
            >
              {proyect.image.length > 1 && (
                <div className="h-56 md:h-64 overflow-hidden bg-[#3B4355] flex-shrink-0">
                  <Swiper
                    loop={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    className="w-full h-full"
                  >
                    {proyect.image.map((image, index) => (
                      <SwiperSlide key={index} className="w-full h-full">
                        <div className="w-full h-full flex items-center justify-center overflow-hidden">
                          {/* Usar img estándar en lugar del componente Image */}
                          <img
                            alt={proyect.name}
                            src={image}
                            className="w-full h-full object-fill"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
              <div className="flex flex-col flex-grow p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-[#3f92ff] mb-2">
                    {proyect.name}
                  </h3>
                  <div className="overflow-y-auto max-h-[150px] pr-1">
                    <p className="text-[#9C9C9C]">{proyect.description}</p>
                  </div>
                </div>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {proyect.technologies.map((techId, idx) => {
                      const tech = iconActive.find((icon) => icon.id === techId);
                      if (!tech) return null;
                      const IconComp = tech.icon;
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center"
                          title={tech.label}
                        >
                          <IconComp
                            style={{ color: tech.activeColor }}
                            className="w-5 h-5 mr-1"
                          />
                        </span>
                      );
                    })}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {proyect.pageUrl && (
                      <a
                        href={proyect.pageUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#4383D7] text-white px-4 py-2 rounded hover:bg-[#3672c6] transition-colors"
                      >
                        Sitio Web
                      </a>
                    )}
                    {proyect.repoUrl && (
                      <a
                        href={proyect.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-transparent border border-[#4383D7] text-[#4383D7] px-4 py-2 rounded hover:bg-[#4383D7] hover:text-white transition-colors"
                      >
                        Github
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {activeProyect.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl text-[#9C9C9C]">
              No se encontraron proyectos que coincidan con los filtros
              seleccionados.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
