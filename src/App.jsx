import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About"


function App() {
  return <>
  <div class="h-full">
          <div className="grid grid-cols-[600px_1fr] absolute h-screen overflow-hidden w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <aside className="sticky top-0 h-screen">
      <Main />
      <Navbar />
      </aside>
      <main className="overflow-y-auto h-screen relative">
      <section className="mx-auto max-w-[800px]">
          <h1 className=""> <About /></h1>
        </section>
        <section className="mt-30">
          <h1 className=""> <Work /></h1>
        </section>
        <section className="mt-30">
          <h1 className=""><Education /></h1>
        </section>
        <section className="mt-30">
          <h1 className=""><Skills /></h1>
        </section>
        <section className="mt-30">
          <h1 className=""><Projects /></h1>
        </section>
      </main>
    </div>
    </div>  
    </>;
}

export default App;
