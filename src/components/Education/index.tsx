import { EducationData } from "./data";
import { useState } from "react";
const Education = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const handleClick = (id: number) => {
    setSelectedId(prevId => (prevId === id ? null : id));
  };

  return (
    <>
      <section id="education" className="mt-10  text-sm max-sm:text-xs">
        <h3 className="font-bold text-2xl mb-1">Education </h3>

        {EducationData.map(educ => {
          return (
            <section
              key={educ.id}
              onMouseEnter={() => setIsHovered(educ.id)}
              onMouseLeave={() => setIsHovered(null)}
              onClick={() => handleClick(educ.id)}
              className="flex flex-col  mt-5 "
            >
              <section className="flex items-center justify-between  cursor-pointer">
                <section className="flex items-center gap-5">
                  <img
                    src={educ.image}
                    alt=""
                    className="w-12 rounded-full h-12"
                  />
                  <section>
                    <div className="flex items-center gap-1">
                      <h1 className="font-bold"> {educ.name} </h1>
                      {(isHovered === educ.id || selectedId === educ.id) && (
                        <img
                          data-aos="zoom-in"
                          src={
                            selectedId === educ.id
                              ? "./icon/chevron-down.svg"
                              : "./icon/chevron-right.svg"
                          }
                          alt={
                            selectedId === educ.id
                              ? "Chevron Down"
                              : "Chevron Right"
                          }
                          className="h-4  "
                        />
                      )}
                    </div>
                    <span>{educ.degree}</span>
                  </section>
                </section>
                <span className="text-[#797b7b] "> {educ.date}</span>
              </section>
              {selectedId === educ.id && (
                <section
                  data-aos="fade-zoom-in"
                  className="pl-[4.4rem] text-[#424853] dark:text-[#a09f9f]"
                >
                  {educ.about}
                </section>
              )}
            </section>
          );
        })}
      </section>
    </>
  );
};

export default Education;
