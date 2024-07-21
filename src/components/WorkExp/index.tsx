import { Work } from "./data";
import { useState } from "react";

const WorkExperience = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return (
    <>
      <section className="mt-10 pb-32 text-sm max-sm:text-xs">
        <h3 className="font-bold text-2xl mb-1"> Work Experience</h3>
        {Work.map(exp => {
          return (
            <section
              key={exp.id}
              onMouseEnter={() => setIsHovered(exp.id)}
              onMouseLeave={() => setIsHovered(null)}
              className="flex items-center justify-between mt-5 cursor-pointer"
            >
              <section className="flex items-center gap-5">
                <img
                  src={exp.image}
                  alt=""
                  className="w-12 rounded-full h-12"
                />
                <section>
                  <div className="flex items-center gap-1">
                    <h1 className="font-bold"> {exp.company} </h1>
                    {isHovered === exp.id && (
                      <img
                        data-aos="zoom-in"
                        src="./icon/chevron-right.svg"
                        alt="Chevron Right"
                        className="h-4  "
                      />
                    )}
                  </div>
                  <span>{exp.position}</span>
                </section>
              </section>
              <span className="text-[#797b7b] "> {exp.date}</span>
            </section>
          );
        })}
      </section>
    </>
  );
};

export default WorkExperience;
