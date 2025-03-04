import { FaBriefcase } from "react-icons/fa";
import { BsCalendarDate } from "react-icons/bs";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { Button } from "@heroui/react";
import {experiences} from "../../context/ExperienceData";

export const Experience = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  
  return (
    <div id="experience" className="py-16">
      <div className="flex flex-col items-center justify-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4 flex items-center">
          <FaBriefcase className="mr-3 text-[#4383D7]" />
          Experiencia
        </h2>
        <p className="text-lg text-[#9C9C9C] mb-8 max-w-2xl text-center">
          Mi trayectoria en el mundo del desarrollo y la tecnología
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-4">
        {/* Línea vertical */}
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4383D7] to-[#0E1425] z-0 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative z-10">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Círculo con icono - solo visible en md y superiores */}
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center z-10 shrink-0 hidden md:flex"
                    style={{
                      background: `linear-gradient(135deg, ${exp.color}, #0E1425)`,
                      boxShadow: `0 0 15px ${exp.color}40`,
                    }}
                  >
                    <span className="text-2xl">{exp.icon}</span>
                  </div>

                  {/* Contenido */}
                  <div
                    className="bg-[#0E1425] rounded-3xl p-6 flex-grow shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                    style={{
                      borderLeft: `4px solid ${exp.color}`,
                    }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center md:hidden mb-2">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                          style={{
                            background: `linear-gradient(135deg, ${exp.color}, #0E1425)`,
                          }}
                        >
                          <span className="text-lg">{exp.icon}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                      </div>

                      <div className="hidden md:block">
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <div className="flex items-center text-[#9C9C9C]">
                          <span
                            className="font-medium"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      <div className="md:hidden">
                        <div className="flex items-center text-[#9C9C9C]">
                          <span
                            className="font-medium"
                            style={{ color: exp.color }}
                          >
                            {exp.company}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center mt-2 md:mt-0 text-[#9C9C9C]">
                        <BsCalendarDate className="mr-2" />
                        <span>{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-[#9C9C9C] mb-4">{exp.description}</p>
                    <Button
                      onPress={() => toggleExpand(exp.id)}
                      className="flex items-center text-md p-0 text-[#4383D7] hover:text-[#3672c6] transition-colors bg-transparent"
                    >
                      {" "}
                      {expandedId === exp.id ? "Ver menos" : "Ver más"}
                      <FaChevronDown
                        className={`ml-1 transition-transform duration-300 ${
                          expandedId === exp.id ? "rotate-180" : ""
                        }`}
                      />
                    </Button>

                    {expandedId === exp.id && (
                      <div className="mt-4 pl-4 border-l-2 border-[#4383D7]">
                        <h4 className="text-white font-medium mb-2">
                          Logros destacados:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#4383D7] mr-2">•</span>
                              <span className="text-[#9C9C9C]">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
