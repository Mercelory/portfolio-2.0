import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About"


function App() {
  return <>
  <div class="h-full" >
          <div className="grid wrap overflow-y-auto bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] md:grid-cols-[700px_1fr] xs:grid-cols-[350px]">
      <aside className="md:sticky md:top-0 h-screen overflow-y-auto md:block xs:flex xs:justify-center xs:items-center">
      <Main />
      <Navbar />
      </aside>
      <main className="md:overflow-y-auto h-screen ">
      <section className="mx-auto max-w-[600px]">
      <div>
          <h1 className=""> <About /></h1>
          </div>
        </section>
        <section className="mt-30">
          <h1 className=""> <Work /></h1>
        </section>
        <section className="mt-30">
          <h1 className="" data-aos="fade-up"
     data-aos-duration="3000"><Education /></h1>
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
