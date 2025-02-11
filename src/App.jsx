import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";

function App() {
  return (
  <div className="min-h-screen bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] dark:bg-neutral-800 dark:bg-[radial-gradient(#4e4e4e33_1px,#212121_1px)] dark:bg-[size:16px_16px]">
          <div className="flex md:flex-row xs:flex-col justify-center">        
      <aside className="xs:min-h-screen md:h-screen md:overflow-y-auto p-10">
      <Main />
      <Navbar />
      </aside>
      <main className="p-10 xs:min-h-screen md:h-screen md:overflow-y-auto md:overflow-x-hidden dark:bg-neutral-800 dark:bg-[radial-gradient(#4e4e4e33_1px,#212121_1px)] dark:bg-[size:16px_16px]">
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
  )
}

export default App;
