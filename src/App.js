import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import Projects from "./components/Projects/projects";
import Contacts from "./components/Contacts/contacts";
import Skills from "./components/Skills/skills";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <Contacts/>
    </div>
  );
}

export default App;
