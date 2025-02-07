import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About"


function App() {
  return <>
  <div class="" >
          <div className="flex md:flex-row xs:flex-col bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <aside className="h-screen md:overflow-y-auto mr-25 p-5">
      <Main />
      <Navbar />
      </aside>
      <main className="p-5 h-screen md:overflow-y-auto md:overflow-x-hidden">
      <section className="">
      <div>
          <h1 className=""><About /></h1>
          </div>
        </section>
        <section className="">
          <h1 className=""><Work /></h1>
        </section>
        <section className="">
          <h1 className=""><Education /></h1>
        </section>
        <section className="">
          <h1 className=""><Skills /></h1>
        </section>
        <section className="">
          <h1 className=""><Projects /></h1>       
        </section>      
      </main>
    </div>
    
    </div>  

    </>;
}

export default App;
