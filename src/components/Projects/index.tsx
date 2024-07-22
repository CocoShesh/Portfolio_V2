import { projects } from "./data";

const Projects = () => {
  return (
    <>
      <section
        id="projects"
        className="mt-16  text-center pb-32 text-sm max-sm:text-xs"
      >
        <span className=" bg-black text-white px-3 py-1 rounded-md  mb-1">
          My Projects{" "}
        </span>
        <h1 className="text-5xl font-semibold mt-3">
          Check out my latest work
        </h1>
        <h1 className="text-2xl mt-3">
          I've worked on a variety of projects, from simple websites to complex
          web applications.
        </h1>
        <section className="grid grid-cols-2 gap-3 max-sm:grid-cols-1 mt-5">
          {projects.map(list => (
            <section key={list.id} className=" border text-left  rounded-md">
              <img
                src={list.src}
                alt=""
                className="h-[150px] w-full  rounded-t-md"
              />
              <section className="px-3 py-2">
                <h1 className=" font-bold "> {list.title} </h1>
                <p className="mt-2 text-xs"> {list.descriptions}</p>
                <section className="flex flex-wrap mt-2 gap-2">
                  {list.techStack.map(tech => (
                    <span
                      key={tech}
                      className="bg-[#f7f7f7]  font-medium px-2 py-1 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </section>
                <section className="flex gap-3 mt-3">
                  <a
                    href={list.liveLink}
                    target="_blank"
                    className="px-2 py-1 text-xs flex gap-1 items-center hover:bg-[#454545] rounded-md bg-black text-white "
                  >
                    <img src="./icon/globe.svg" alt="" className="h-3" />{" "}
                    Website
                  </a>
                  <a
                    href={list.githubLink}
                    target="_blank"
                    className="px-2 py-1 text-xs flex gap-1 items-center rounded-md hover:bg-[#454545]  bg-black text-white "
                  >
                    <img
                      src="./icon/github-white.svg"
                      alt=""
                      className="h-3 "
                    />{" "}
                    Source
                  </a>
                </section>
              </section>
            </section>
          ))}
        </section>
      </section>
    </>
  );
};

export default Projects;
