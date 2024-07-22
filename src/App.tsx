import "./App.css";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Education from "./components/Education";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <main className="w-full h-screen select-none  max-md:px-5    flex items-center justify-center">
        <section className="w-[650px] h-full flex flex-col">
          <Hero />
          <About />
          <WorkExp />
          <Education />
          <TechStack />
          <Projects />
          <Contacts />
        </section>
        <Navbar />
      </main>
    </>
  );
}

export default App;
