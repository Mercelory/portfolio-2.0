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
          <div className=" grid gap-20 wrap overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] md:grid-cols-[300px_1fr] xs:grid-cols-[350px]">
      <aside className="md:sticky md:top-0 h-screen overflow-y-auto md:block xs:flex xs:justify-center xs:items-center">
      <Main />
      <Navbar />
      </aside>
      <main className="md:overflow-y-auto h-screen w-full">
      <section className="mx-auto max-w-[600px]">
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
