import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="w-full h-screen    flex items-center justify-center">
        <section className="w-[650px]  h-full flex flex-col">
          <Hero />
        </section>
        <Navbar />
      </main>
    </>
  );
}

export default App;
