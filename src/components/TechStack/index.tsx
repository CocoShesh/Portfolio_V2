import { TechStackData } from "./data";

const TechStack = () => {
  return (
    <>
      <section className="mt-10  text-sm max-sm:text-xs">
        <h3 className="font-bold text-2xl mb-1"> Tech Stack</h3>
        <section className="flex  flex-wrap gap-3 mt-5">
          {TechStackData.map((tech, index) => (
            <section
              key={index}
              className="font-bold bg-[#171717] text-white px-3 py-[0.2rem]  w-fit text-center  rounded-md text-[0.75rem] hover:bg-[#454545] transition-transform duration-300  hover:select-text"
            >
              <h1>{tech} </h1>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default TechStack;
