import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Work from "./components/Work";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";


function App() {
  return <>
        <main className="overlay">
          <Navbar />
          <Main />
          <Work />
          <Education />
          <Skills />
          <Projects />
        </main>
    </>;
}

export default App;
