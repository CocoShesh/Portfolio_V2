import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkExposure from "./components/WorkExp";
import BlurFade from "./components/magicui/blur-fade";
function App() {
  return (
    <>
      <main className="w-full h-fit  dark:text-white select-none  max-md:px-5     transition-all duration-300 ease-in-out  dark:bg-black   flex items-center justify-center">
        <BlurFade inView className="w-[650px] h-full flex flex-col    ">
          <Hero />
          <About />
          <WorkExposure />
          <Education />
          <TechStack />
          <Projects />
          <Contacts />
        </BlurFade>
        <Navbar />
      </main>
    </>
  );
}

export default App;
