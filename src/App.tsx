import "./App.css";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <>
      <main className="w-full h-screen     flex items-center justify-center">
        <section className="w-[650px] max-sm:px-5 h-full flex flex-col">
          <Hero />
          <About />
          <WorkExp />
        </section>
        <Navbar />
      </main>
    </>
  );
}

export default App;
